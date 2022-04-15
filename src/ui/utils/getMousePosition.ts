type mouseEvent =  React.MouseEvent<HTMLDivElement, MouseEvent>;

function getMousePosition(e:mouseEvent|MouseEvent) {
  return {
    y:e.pageY - window.scrollY,
    x:e.pageX
  }
}

export default getMousePosition;