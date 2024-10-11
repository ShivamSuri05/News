
let userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGQWRPazFkOXdoZA3cxV0l0dVc3bndhRUhaME1BdnpLTF82TU9aMXpDcmprQXNZAcXZAWbnlpZAHF2QXBTZAnVFLUlXWjl2NmxvbE1vbW5kZADlRYllhZAmlHUWVmQ2pJZAnZAKdW81bjM4bnZAtOUNzTVROWlRVTDBkQktwb1kZD',
limit: 24,
template: '<a href="{{link}}" target="_blank" ><img title="Click here to redirect to Instagram Post" src="{{image}}" class="img12" alt="Instagram Post" /></a>',
});
userFeed.run();
