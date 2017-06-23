const $viewList = ["#home", "#product", "#info", "#method", "#payment", "#confirmation"]

const $mainNav = document.querySelector('#main-nav')
const $homeButton = document.querySelector('#home-button')
const $aboutButton = document.querySelector('#about-button')
const $productButton = document.querySelector('#product-button')
const $checkoutButton = document.querySelector('#checkout-button')
const $infoButton = document.querySelector('#info-button')
const $methodButton = document.querySelector('#method-button')
const $drinkButton = document.querySelector('#drink-button')
const $completeButton = document.querySelector('#complete-button')
const $jon = document.querySelector('#jon')
const $judy = document.querySelector('#judy')
const $andrew = document.querySelector('#andrew')

var $shoppingCart = {}

const changeView = (activeView, viewList) => {
  const $activeView = document.querySelector(activeView)
  viewList.forEach(view => {
    const $view = document.querySelector(view)
    $view.classList.add('hide')
  })
  $activeView.classList.remove('hide')
}


document.addEventListener("DOMContentLoaded", event => {

$jon.addEventListener('click', event => {
  console.log('jon')
})

$judy.addEventListener('click', event => {
  console.log('judy')
})

$andrew.addEventListener('click', event => {
  console.log('andrew')
})

$aboutButton.addEventListener('click', event => {
  changeView('#home', $viewList)
})

$productButton.addEventListener('click', event => {
  changeView('#product', $viewList)
})

$checkoutButton.addEventListener('click', event => {
  changeView('#info', $viewList)
})

$homeButton.addEventListener('click', event => {
  changeView('#home', $viewList)
})

$infoButton.addEventListener('click', event => {
  changeView('#method', $viewList)
})

$methodButton.addEventListener('click', event => {
  changeView('#payment', $viewList)
})

$completeButton.addEventListener('click', event => {
  changeView('#confirmation', $viewList)
})

$drinkButton.addEventListener('click', event => {
  changeView('#info', $viewList)
})

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

window.addEventListener('scroll', () => {
  const $navbar = document.querySelector('#main-nav')
  if (document.body.scrollTop > 600) {
    $navbar.classList.add('fixed-top')
  }
  if (document.body.scrollTop < 600) {
    $navbar.classList.remove('fixed-top')
  }
})

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
      const $author = document.createElement('p')
      const $title = document.createElement('a')
      $title.setAttribute('href', thread.data.url)
      $title.textContent = thread.data.title
      $author.textContent = 'by ' + thread.data.author
      $author.classList.add('details-text')

      $('#tab-reddit').append($title)
      $('#tab-reddit').append($author)
      // console.log(thread.data.url);
      // console.log(thread.data.author);
    });

  })
  //if there was an error, you may skip this section
  .fail(function(e) {
    console.log("failed", e);
  })

});


})
