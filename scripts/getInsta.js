
let userFeed = new Instafeed({
    get: 'user',
    target: "instafeed-container",
    resolution: 'low_resolution',
    accessToken: 'IGQVJYTkthcFlfYlIwTkR2cDY0X1JzZAGc0bXF4V1R3OGVCbWVtYnNjQTFNY3pxR1NPSXQwRWR2TlN6REtNeDhqNWR3ZAVNyN1JBSmVueW1JVUw4NGo0TEtKSFp0d0pCS0lYT2NwOXRUX2VBS01kOW5meQZDZD',
limit: 24,
template: '<a href="{{link}}" target="_blank" ><img title="Click here to redirect to Instagram Post" src="{{image}}" class="img12" alt="Instagram Post" /></a>',
});
userFeed.run();