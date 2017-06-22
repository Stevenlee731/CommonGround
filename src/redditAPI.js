$(document).ready(function(){

  $.ajax({
    //AJAX call to reddits public api
    "url": "https://www.reddit.com/r/coffee.json",
    "method": "GET"
  })
  //if successful, return back a JSON Object
  .done(function(response){
    //get the array of reddit threads/posts
    var content = response.data.children;

    //iterate through each reddit post
    content.forEach(function(thread, index){
      console.log(thread.data.title);
      console.log(thread.data.url);
      console.log(thread.data.author);
    });

  })
  //if there was an error, you may skip this section
  .fail(function(e) {
    console.log("failed", e);
  })

});
