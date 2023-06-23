// import { IDKitWidget } from '@worldcoin/idkit'

// return (
// 	<IDKitWidget
// 		app_id="app_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
// 		action="my_action"
// 		enableTelemetry
// 		onSuccess={result => console.log(result)} // pass the proof to the API or your smart contract
// 	/>
// )



const   CreateAccount = async()=>{

	const address = "........";
	const amount  = 1000
	const fee = 0.01 * amount;

	const transt = fee * amount 
	console.log(transt)

	return transt

}

const getBalance  = async( address)=>{

	const balance  = await.ethers.balance(address)
	console.log(balance)
}

const History = async( address) =>{
	
}

getBalance()

getBalance()


const Transfer  = async ( address,amount ,privateKey)=>{
	const  send = await.ethers.Transfer(address,amount, privateKey)
	const  hash  = await.ethers(hassh)

	console log(hash,send)

	return hash
}

CreateAccount()



