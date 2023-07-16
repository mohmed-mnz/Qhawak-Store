/**Update Cart Count */
let cartCount = 0;

function addToCart() {
  cartCount++;
  updateCartCount();
}

function updateCartCount() {
  const cartCounter = document.getElementById("cart-counter");
  if (cartCounter) {
    cartCounter.textContent = cartCount.toString();
    cartCounter.style.display = "inline";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", addToCart);
  });
});


/**Up Buttom */
upbtn=document.getElementById('up')
upbtn.addEventListener('click',function(){
  window.scrollTo({left:0,top:0,behavior:'smooth'})
});

/**Filter the category */
let switcherList=document.querySelectorAll(".container .switcher li");
let imgs=Array.from(document.querySelectorAll(".gallary .row .col"));
switcherList.forEach((li)=>{
  li.addEventListener("click",removeActive);
  li.addEventListener("click",mangeimgs);
});
function removeActive(){
  switcherList.forEach((li)=>{
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function mangeimgs(){
  imgs.forEach((img)=>{
    img.style.display="none";
  });
   document.querySelectorAll(this.dataset.cat).forEach((e1)=>{
  e1.style.display="block";
 })
}
