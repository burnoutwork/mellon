import {Wallet} from './near-wallet'
import {Account} from "./account";

export class Melon {
    wallet;

    constructor({walletToUse}) {
        this.wallet = walletToUse
    }

    async getAccount(accountId) {
        let account = await this.wallet.viewMethod({
            contractId: this.wallet.getContractId(),
            method: "get_account",
            args: {
                account_id: accountId
            }
        });

        if (!account) {
            throw 'account not found'
        }

        return new Account({
                accountId: account.account_id,
                avatarCID: account.avatar_cid
            })
    }

    async getSelfAccount() {
        let account = await this.getAccount(this.wallet.getAccountId());

        if (!account) {
            await this.registerAccount();
            return await this.getSelfAccount();
        }

        return account
    }

    async registerAccount() {
        return await this.wallet.callMethod({contractId: this.wallet.getContractId(), method: "register_account"});
    }
}

export const melon = new Melon({walletToUse: Wallet})
