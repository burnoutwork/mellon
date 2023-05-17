use crate::{Account, App};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::Vector;
use near_sdk::json_types::U128;
use near_sdk::serde::Serialize;
use near_sdk::{env, near_bindgen, AccountId, Balance};

#[derive(BorshDeserialize, BorshSerialize)]
pub struct Chat {
    pub initiator_id: AccountId,
    pub initiator_public_key: String,
    pub responder_id: AccountId,
    pub responder_public_key: Option<String>,
    pub messages: Vector<String>,
}

impl Chat {
    pub fn get_chat_id(initiator: &AccountId, responder: &AccountId) -> String {
        format!("{}{}", initiator, responder)
    }
}
