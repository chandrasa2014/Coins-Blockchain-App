'use strict';
/**
 * Sample transaction
 * @param {coins.AccountTransfer} accountTransfer
 * @transaction
 */

function accountTransfer(accountTransfer) {
    if (accountTransfer.from.balance < accountTransfer.to.balance) {
        throw new Error('Insufficient funds');
    }

    accountTransfer.from.balance -= accountTransfer.amount;
    accountTransfer.to.balance += accountTransfer.amount;

    return getAssetRegistry('coins.Account')
        .then(function (assetRegistry) {
            return assetRegistry.update(accountTransfer.from);
        })
        .then(function () {
            return getAssetRegistry('coins.Account');
        })
        .then(function (assetRegistry) {
            return assetRegistry.update(accountTransfer.to);
        });

}