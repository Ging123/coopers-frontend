function getElementWidthAndHeight(element:any) {
  return {
    height:element.offsetHeight,
    width:element.offsetWidth
  }
}

export default getElementWidthAndHeight;