use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::LookupMap;
use near_sdk::serde::Serialize;
use near_sdk::{env, near_bindgen, AccountId};

#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
struct Account {
    pub account_id: AccountId,
    pub avatar_cid: Option<String>,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
struct App {
    accounts: LookupMap<AccountId, Account>,
}

impl Default for App {
    fn default() -> Self {
        Self {
            accounts: LookupMap::new(b"a"),
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
        };

        self.accounts.insert(&account_id, &account);
    }

    pub fn get_account(&self, account_id: AccountId) -> Option<Account> {
        self.accounts.get(&account_id)
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

        let account = contract.get_account(accounts(1)).expect("Account not found");
        assert_eq!(account.account_id, accounts(1));
        assert_eq!(account.avatar_cid, None);
    }

    #[test]
    fn test_get_account() {
        let mut context = get_context(accounts(1));
        testing_env!(context.build());

        let mut contract = App::default();
        contract.register_account();

        let account = contract.get_account(accounts(1)).expect("Account not found");
        assert_eq!(account.account_id, accounts(1));
        assert_eq!(account.avatar_cid, None);
    }
}

