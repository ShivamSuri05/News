
fetch('/.netlify/functions/getToken')
  .then(response => response.json())
  .then(data => {
    let userFeed = new Instafeed({
      get: 'user',
      target: "instafeed-container",
      resolution: 'low_resolution',
      accessToken: data.token,
      limit: 24,
      template: '<a href="{{link}}" target="_blank" ><img title="Click here to redirect to Instagram Post" src="{{image}}" class="img12" alt="Instagram Post" /></a>',
    });
    userFeed.run();
  })
  .catch(error => {
    console.error('Error fetching Instagram token:', error);
  });
