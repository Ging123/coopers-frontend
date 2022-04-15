var currentImageVisible = 0;

function changeImagesAfterTime() {
  if(!slideImageExist()) return;
  const images:any = document.querySelectorAll(".slide-wrapper > img");
  const lastImageIndex = images.length - 1;
  if(currentImageVisible === lastImageIndex) goToFirstImage();
  else goToNextImage();
}


function slideImageExist() {
  const width  = window.innerWidth || document.documentElement.clientWidth || 
  document.body.clientWidth;
  return width >= 950;
}


function goToFirstImage() {
  const images:any = document.querySelectorAll(".slide-wrapper > img");
  const firstImage = 0;
  images[currentImageVisible].classList = "hide";
  images[firstImage].classList = "show";
  currentImageVisible = 0;
}


function goToNextImage() {
  const images:any = document.querySelectorAll(".slide-wrapper > img");
  const next = currentImageVisible + 1;
  images[currentImageVisible].classList = "hide";
  images[next].classList = "show";
  currentImageVisible += 1;
}


export default changeImagesAfterTime;