const $viewList = ["#home", "#product", "#checkout"]
const $shippingViews = ["#info", "method", "payment"]

const $homeButton = document.querySelector('#home-button')
const $aboutButton = document.querySelector('#about-button')
const $productButton = document.querySelector('#product-button')
const $checkoutButton = document.querySelector('#checkout-button')

const $uploadButton = document.querySelector('#upload-button')
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
  changeView('#checkout', $viewList)
})

$homeButton.addEventListener('click', event => {
  changeView('#home', $viewList)
})


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

})
