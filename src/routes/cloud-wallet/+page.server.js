
import NeucronSDK from "neucron-sdk";

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({request}) => {
		const data = await request.formData();
        
const neucron = new NeucronSDK();

const authModule = neucron.authentication;
const walletModule = neucron.wallet;

// const signUpResponse = await authModule.signUp({ email: "ompagariya28@gmail.com", password: "Ompagariya@28" });
// console.log(signUpResponse);

const loginResponse = await authModule.login({ email:data.get('email'), password: data.get('password')});
console.log(loginResponse);

// const walletKeys = await walletModule.getWalletKeys({});
// console.log(walletKeys);

// For Default wallet balance
const DefaultWalletBalance = await walletModule.getWalletBalance({});
console.log(DefaultWalletBalance);

// const addresses = await walletModule.getAddressesByWalletId({});
// console.log(addresses);

// const options = {
//     outputs: [
//       {
//         address: 'rohan@dev.neucron.io',
//         note: 'gurudakshina',
//         amount: 10
//       }
//     ]
//   };

// const payResponse = await neucron.pay.txSpend(options)
// console.log(payResponse)

// const walletHistory = await walletModule.getWalletHistory({ });
// console.log(walletHistory);


// console.log('initiating wallet')
// const walletCreation1 = await walletModule.createWallet({ walletName: 'Om Pagariya' });
// console.log(walletCreation1);

// const walletBalance = await walletModule.getWalletBalance({ walletId: walletCreation1.walletID });
// console.log(walletBalance);

// const addresses = await walletModule.getAddressesByWalletId({ walletId: walletCreation1.walletID });
// console.log(addresses);

// const mnemonic = await walletModule.getMnemonic({ walletId: walletCreation1.walletID });
// console.log(mnemonic);

// const allUtxos = await walletModule.getAllUtxos({ walletId: walletCreation1.walletID });
// console.log(allUtxos);

// const xPubKeys = await walletModule.getXPubKeys({ walletId: walletCreation1.walletID });
// console.log(xPubKeys);

return { success1: true, balance: DefaultWalletBalance.data.balance.summary };
},

pay: async ({request}) => {
    const data = await request.formData();
    
const neucron = new NeucronSDK();

const authModule = neucron.authentication;
const walletModule = neucron.wallet;


const loginResponse = await authModule.login({ email:data.get('email'), password: data.get('password')});
console.log(loginResponse);

const options = {
        outputs: [
          {
            address: data.get('paymail'),
            note: 'gurudakshina',
            amount: Number(data.get('amount'))
          }
        ]
      };
    
    const payResponse = await neucron.pay.txSpend(options)
    console.log(payResponse)

    return { success2: true, payResponse };
}
};