
let userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGQVJWMTg5RHpiWEVKSWVaWHBWcWtkLWFZAdTgzRHFwbW0wb0xUNHBHMzNWYXNTWVh4T25McXVQcjlJVEMzT0kxeW5iUVh6RXoxcEJMUzBRdGljR2gzQ3lQYTdnSnhyWlIybEMyMDdIdUxfajNiaFFNQgZDZD',
limit: 24,
template: '<a href="{{link}}" target="_blank" ><img title="Click here to redirect to Instagram Post" src="{{image}}" class="img12" alt="Instagram Post" /></a>',
});
userFeed.run();