mod messages;

use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{LookupMap, Vector};
use near_sdk::serde::{Serialize, Serializer};
use near_sdk::{env, near_bindgen, AccountId};
use crate::messages::Chat;

#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
struct Account {
    pub account_id: AccountId,
    pub avatar_cid: Option<String>,
    #[serde(skip_serializing)]
    pub chats_id: Vector<String>
}


#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
struct App {
    accounts: LookupMap<AccountId, Account>,
    chats: LookupMap<String, Chat>
}

impl Default for App {
    fn default() -> Self {
        Self {
            accounts: LookupMap::new(b"a"),
            chats: LookupMap::new(b"c"),
        }
    }
}


#[near_bindgen]
impl App {
    pub fn register_account(&mut self) {
        let account_id = env::predecessor_account_id();
        let account = Account {
            account_id: account_id.clone(),
            avatar_cid: None,
            chats_id: Vector::new(format!("{}c", account_id).as_bytes()),
        };

        self.accounts.insert(&account_id, &account);
    }

    pub fn get_account(&self, account_id: AccountId) -> Option<Account> {
        self.accounts.get(&account_id)
    }

    pub fn start_chat(&mut self, public_key: String, responder_id: AccountId) {
        let account_id = env::predecessor_account_id();

        let mut initiator = match self.accounts.get(&account_id) {
            Some(account) => account,
            None => env::panic_str("Initiator account not registered"),
        };

        let mut responder = match self.accounts.get(&responder_id) {
            Some(account) => account,
            None => env::panic_str("Responder account not registered"),
        };

        let chat_id = Chat::get_chat_id(&initiator.account_id, &responder.account_id);
        let chat = Chat {
            initiator_id: initiator.account_id.clone(),
            responder_id: responder.account_id.clone(),
            initiator_public_key: public_key,
            responder_public_key: None,
            messages: Vector::new(format!("{}cm", chat_id).as_bytes())
        };

        self.chats.insert(&chat_id, &chat);

        initiator.chats_id.push(&chat_id);
        self.accounts.remove(&initiator.account_id);
        self.accounts.insert(&initiator.account_id, &initiator);

        responder.chats_id.push(&chat_id);
        self.accounts.remove(&responder.account_id);
        self.accounts.insert(&responder.account_id, &responder);
    }

    pub fn chat_is_ready(&self, initiator_id: AccountId, responder_id: AccountId) -> bool {
        match self.chats.get(&Chat::get_chat_id(&initiator_id, &responder_id)) {
            Some(chat) => chat.responder_public_key.is_some(),
            None => env::panic_str("Chat has not been started")
        }
    }
}
#[cfg(test)]
mod tests {
    use near_sdk::test_utils::{accounts, VMContextBuilder};
    use near_sdk::{testing_env, AccountId};

    use super::*;

    fn get_context(predecessor_account_id: AccountId) -> VMContextBuilder {
        let mut builder = VMContextBuilder::new();
        builder
            .current_account_id(accounts(0))
            .signer_account_id(predecessor_account_id.clone())
            .predecessor_account_id(predecessor_account_id);
        builder
    }

    #[test]
    fn test_register_account() {
        let mut context = get_context(accounts(1));
        testing_env!(context.build());

        let mut contract = App::default();
        contract.register_account();

        let account = contract
            .get_account(accounts(1))
            .expect("Account not found");
        assert_eq!(account.account_id, accounts(1));
        assert_eq!(account.avatar_cid, None);
    }

    #[test]
    fn test_get_account() {
        let mut context = get_context(accounts(1));
        testing_env!(context.build());

        let mut contract = App::default();
        contract.register_account();

        let account = contract
            .get_account(accounts(1))
            .expect("Account not found");
        assert_eq!(account.account_id, accounts(1));
        assert_eq!(account.avatar_cid, None);
    }
}
