var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
var slidesCount = sliderImages.length;
var currentSlide = 1;
var slideNumberElement = document.getElementById('slide-number');
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('previous');
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
for (var i = 1; i <= slidesCount; i++) {
  var paginationItem = document.createElement('li');
  paginationItem.setAttribute('data-index', i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement);
var paginationCreatedUl = document.getElementById('pagination-ul');
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Add event listeners to pagination bullets
for (var i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker();
  }
}

// Add event listeners to next and previous buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Set interval to change slide every 5 seconds
setInterval(nextSlide, 5000);

theChecker();

function nextSlide() {
  currentSlide++;
  if (currentSlide > slidesCount) {
    currentSlide = 1; // Start from the first slide again
  }
  theChecker();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = slidesCount; // Go to the last slide
  }
  theChecker();
}

function theChecker() {
  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);
  removeAllActive();
  sliderImages[currentSlide - 1].classList.add('active');
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');
  if (currentSlide == 1) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }
  if (currentSlide == slidesCount) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

function removeAllActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove('active');
  });
  paginationsBullets.forEach(function (bullet) {
    bullet.classList.remove('active');
  });
}


upbtn=document.getElementById('up')
upbtn.addEventListener('click',function(){
  window.scrollTo({left:0,top:0,behavior:'smooth'})
});