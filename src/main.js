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

})
