import getMousePosition from "../../../../../../utils/getMousePosition";

function onMouseMove(e:MouseEvent) {
  const dragObject:any = e.currentTarget;
  const mouse = getMousePosition(e);
  dragObject.style.top = `${mouse.y - 20}px`;
  dragObject.style.left = `${mouse.x - 150}px`;
}

export default onMouseMove;