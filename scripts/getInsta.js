
let userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGQVJWcjdPaXpuMTg4UG9PM2xRNVRJRTY3OVVpS3ZAjdFpITHBTay1rWWt6b0pHZAjg4LVRZAWVpnSXpoYVNjel9QdHdWMWcwbTVSLVpmaVJ3eEF4dko5d1BlR2FKRThnLWEtMUZA3cVhuN0k1X1B1TzE1NAZDZD',
limit: 24,
template: '<a href="{{link}}" target="_blank" ><img title="Click here to redirect to Instagram Post" src="{{image}}" class="img12" alt="Instagram Post" /></a>',
});
userFeed.run();