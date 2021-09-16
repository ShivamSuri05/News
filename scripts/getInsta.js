
let userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGQVJXVVYtZAFprajNpN2dUSWUtZAUVnVHh6cDVCS21EaUZAFeVdIbWlneGR3T0tOT0NldFNQdF9lcUExMUotVzhvMnlyd3NwWnpQVFN0eVRMT2pmME50VFF0NHVEOGJmU0RUUzN6cnBNeXYtamlHeE9XYQZDZD',
limit: 24,
template: '<a href="{{link}}" target="_blank" ><img title="Click here to redirect to Instagram Post" src="{{image}}" class="img12" alt="Instagram Post" /></a>',
});
userFeed.run();