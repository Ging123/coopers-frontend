function getElementPosition(element:any) {
  const rect = element.getBoundingClientRect();
  return {
    y:rect.top + window.scrollY,
    x:rect.left + window.scrollX
  }
}

export default getElementPosition;