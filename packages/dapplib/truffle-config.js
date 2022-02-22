require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note often minor inflict arena flock slush'; 
let testAccounts = [
"0x9aa865faa695da8610eb2f9b269839736ca04aa9df40abc437863d468ec67912",
"0x2a716238987962bb082aa50d67865bf7bc02812c5d1bba5f66629f37a3d5939d",
"0xad4b8fdfb8917ad4657edbb31e250e444748be01da22325974684faaf96823dd",
"0x7e9a8625082eaf1bbbec7d8400fffb14e088a4b082abb14ed40f93fe63c0ab22",
"0x8ed7d7cc63f4803ba72880f306e1b70ca6ad91be143488cd0ccd1fd85ead0314",
"0x54ddcbe7b0570dfc4a6c533278fe6da615525ccceb385dd42041a07d9d35b9ab",
"0xbbf9f7706af405bf739a1882fbd26eb51f6d2ac9e93b8c3b56bd53566eb88000",
"0x258a884478c217bedff5337dbdfad699a800ccdf1f566dc6a108b76faae8fb25",
"0xa2459496a7c7e2c0bbcb14f47e92905d8de5184a5d0dc3128603a99fbc0ea687",
"0xa05f00ae69f4325ae4e88e795f52cc43b62286a1a47b34318c33873d5b816a3d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

