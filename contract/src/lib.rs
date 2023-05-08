use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{near_bindgen};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
struct App {}

#[near_bindgen]
impl App {}

#[cfg(test)]
mod tests {
    use super::*;
}