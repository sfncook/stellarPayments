# Stellar Payments
The goal of the Stellar Payments project is to create a few Node scripts for working with the Stellar cryptocurrency.  This is primarily a learning vehicle for the developers involved.

# Getting Started
 1. Install [Node.js and npm](https://nodejs.org/en/)
 1. Install npm package dependencies.  From the command line `cd` into the root of the stellarPayments project (where ever it happens to be on your development environment). Run this command: `npm install`.  This can take several minutes to run.

# Using the scripts
## Create your first account 
 ```console
 $ node createAccount.js 
 publicKey: GCRHKUTKAOX3TTXI4QNYJQJMGHWD72ETK3ZVJM5QQMOPPMVRZZBCSJTU
 secret: SAKQYT5ZMHUKYLSJWB3LAEX7B4DEEY4P47TCWK4MW5GUUVVGQQOJEEDV
 SUCCESS! You have a new account :)
  { _links: 
    { transaction: 
       { href: 'https://horizon-testnet.stellar.org/transactions/4e89868cee429ed0338bafd1f24e4ef665a2c56c4cd290359df55b8fa3e0ef6b' } },
   hash: '4e89868cee429ed0338bafd1f24e4ef665a2c56c4cd290359df55b8fa3e0ef6b',
   ledger: 10237339,
   envelope_xdr: 'AAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAAAZABiwhcAAsYWAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAonVSagOvuc7o5BuEwSwx7D/ok1bzVLOwgxz3srHOQikAAAAXSHboAAAAAAAAAAABhlbgnAAAAECNlPkUx0S+N4+oGDXVuDUAKv3qhMXjmLIe0Uwpew70WqVyjEzBqwWvGJskwDFv7qpHtuShj8VXrxoP/H4uBpAL',
   result_xdr: 'AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAA=',
   result_meta_xdr: 'AAAAAAAAAAEAAAADAAAAAACcNZsAAAAAAAAAAKJ1UmoDr7nO6OQbhMEsMew/6JNW81SzsIMc97KxzkIpAAAAF0h26AAAnDWbAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAwCcNZsAAAAAAAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAKSNoK8GEsAYsIXAALGFgAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAQCcNZsAAAAAAAAAABB90WssODNIgi6BHveqzxTRmIpvAFRyVNM+Hm2GVuCcAAKSHzpFMEsAYsIXAALGFgAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA' }
 Balances for account: GCRHKUTKAOX3TTXI4QNYJQJMGHWD72ETK3ZVJM5QQMOPPMVRZZBCSJTU
 Type: native , Balance: 10000.0000000
 ```
 
## Check your account balance
(Note that we use the `publicKey` from the output of creating an account above)
```console
$ node getBalance.js GCRHKUTKAOX3TTXI4QNYJQJMGHWD72ETK3ZVJM5QQMOPPMVRZZBCSJTU
Balances for account: GCRHKUTKAOX3TTXI4QNYJQJMGHWD72ETK3ZVJM5QQMOPPMVRZZBCSJTU
Type: native , Balance: 10000.0000000
```

## Make a payment
(Note that we have created a *second* account and are using it as the destination account.  Also, you have to use the *secret* for the source account and the *publicKey* for the destination account)
```console
$ node sendMoney.js SAKQYT5ZMHUKYLSJWB3LAEX7B4DEEY4P47TCWK4MW5GUUVVGQQOJEEDV GCU7GXBAPLGFRT4KUBJGUYLHWRQLOF2M2SXRSS7K4EDMSF5SFWP6D 
Success! Results: { _links: 
   { transaction: 
      { href: 'https://horizon-testnet.stellar.org/transactions/b43f07a439a743469e8ce6744d373e932d1a98be2818710a9ed1b92b3faeab99' } },
  hash: 'b43f07a439a743469e8ce6744d373e932d1a98be2818710a9ed1b92b3faeab99',
  ledger: 10237415,
  envelope_xdr: 'AAAAAKJ1UmoDr7nO6OQbhMEsMew/6JNW81SzsIMc97KxzkIpAAAAZACcNZsAAAABAAAAAAAAAAEAAAAQVGVzdCBUcmFuc2FjdGlvbgAAAAEAAAAAAAAAAQAAAACp81wgesxYz4qgUmphZ7RgtxdM1K8ZS+rhBskXsi2f4QAAAAAAAAAABfXhAAAAAAAAAAABsc5CKQAAAEBUUNvUC+Clw9P43Dl+YB/6qtWSnq2ZvHOnZURIwsf6dW9srFPghhwIcJVSEdtq2REYbuSEcRS40TtpBftfkY0F',
  result_xdr: 'AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAA=',
  result_meta_xdr: 'AAAAAAAAAAEAAAAEAAAAAwCcNecAAAAAAAAAAKJ1UmoDr7nO6OQbhMEsMew/6JNW81SzsIMc97KxzkIpAAAAF0h255wAnDWbAAAAAQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAQCcNecAAAAAAAAAAKJ1UmoDr7nO6OQbhMEsMew/6JNW81SzsIMc97KxzkIpAAAAF0KBBpwAnDWbAAAAAQAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAwCcNdIAAAAAAAAAAKnzXCB6zFjPiqBSamFntGC3F0zUrxlL6uEGyReyLZ/hAAAAFzyLJTgAnDTuAAAAAgAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAQCcNecAAAAAAAAAAKnzXCB6zFjPiqBSamFntGC3F0zUrxlL6uEGyReyLZ/hAAAAF0KBBjgAnDTuAAAAAgAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA' }
```