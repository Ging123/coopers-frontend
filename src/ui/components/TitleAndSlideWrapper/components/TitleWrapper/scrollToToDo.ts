function scrollToToDo() {
  const howMuchMustScroll = getHowMuchMustScroll();
  window.scroll(0, howMuchMustScroll);
}


function getHowMuchMustScroll() {
  const slider:any = document.querySelector(".title-and-slide-wrapper")!;
  const header:any = document.querySelector("header")!;
  const sliderHeight = slider.offsetHeight;
  const headerHeight = header.offsetHeight;
  return sliderHeight + sliderHeight + headerHeight + 100;
}

export default scrollToToDo;