use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::serde::Serialize;
use near_sdk::{AccountId, near_bindgen, env};
use near_sdk::collections::LookupMap;

#[derive(BorshDeserialize, BorshSerialize, Serialize)]
#[serde(crate = "near_sdk::serde")]
struct Account {
    pub account_id: AccountId,
    pub avatar_cid: Option<String>
}


#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
struct App {
    accounts: LookupMap<AccountId, Account>
}

impl Default for App {
    fn default() -> Self {
        Self { accounts: LookupMap::new(b"a") }
    }
}

#[near_bindgen]
impl App {
    pub fn register_account(&mut self) {
        let account_id = env::predecessor_account_id();
        let account = Account { account_id: account_id.clone(), avatar_cid: None };

        self.accounts.insert(&account_id, &account);
    }

    pub fn get_account(&self, account_id: AccountId) -> Option<Account> {
        self.accounts.get(&account_id)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
}