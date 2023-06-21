import { IDKitWidget } from '@worldcoin/idkit'

return (
	<IDKitWidget
		app_id="app_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
		action="my_action"
		enableTelemetry
		onSuccess={result => console.log(result)} // pass the proof to the API or your smart contract
	/>
)
