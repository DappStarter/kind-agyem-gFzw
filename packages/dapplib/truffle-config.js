require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food biology royal noble plastic coral light army giggle'; 
let testAccounts = [
"0xcfbc81a86dbb57722a8aa4d71d396b0db6eb9f6d60847bfb1c5d5c41867de3d1",
"0x1cbc06a0402d8c6dc66c975c070e045eaaa384a2f20521914c42c0dba78c6dea",
"0x838670bae79e61835f669c3f45435609a6b764318e74633a1f7e30b942790064",
"0xfc5e29f49d9291e9f60832fe3fd82d5065634676ae52a2b8aa43c768337d8619",
"0xd1e1acb4e4ed245bfb323a43f1e946c0790d4ae9998832e32a4110dcc91ad15f",
"0xb3005415a9a40d3ef3f054093520bd27a1436341a3b01e156a37ce7b9633136a",
"0x6d36ac0a731e1354cf6f9f3262419f1cf783b85c9381c41a4453c0cd6337ce36",
"0xb58ee7e2018a0e5f9c2f2919b1c7d2898924190fe1f74ed7decce5398646ac75",
"0x4067365a7d6b5f3833ee87b43402d6a4aee598dd0c08ffc4e507437316ecc858",
"0x9ecca9bf52e21b8500e7549f88d91434dbc5565eebad597412286700c10c3906"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


