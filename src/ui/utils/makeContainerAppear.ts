function makeContainerAppear(containerQuery:string) {
  const conatainer:any = document.querySelector(containerQuery);
  conatainer.style.opacity = 1;
  conatainer.style.marginTop = "0px";
}

export default makeContainerAppear;