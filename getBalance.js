const StellarSdk = require('stellar-sdk');

if(process.argv.length<3) {
  console.error('ERROR: Missing input argument: The publicKey for the account to query.');
  console.error('Usage: ',process.argv[0],process.argv[1],'[publicKey]');
  return;
}
const publicKey = process.argv[2];

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

server.loadAccount(publicKey).then(function(account) {
  console.log('Balances for account: ' + publicKey);
  account.balances.forEach(function(balance) {
    console.log('Type:', balance.asset_type, ', Balance:', balance.balance);
  });
});
