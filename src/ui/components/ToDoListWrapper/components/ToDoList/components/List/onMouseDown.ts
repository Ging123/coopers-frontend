import getMousePosition from "../../../../../../utils/getMousePosition";
import onMouseMove from "./onMouseMove";
import onMouseUp from "./onMouseUp";

type mouseEvent =  React.MouseEvent<HTMLDivElement, MouseEvent>;

async function onMouseDown(e:mouseEvent) {
  const target:any = e.target;
  const task = target.parentNode;
  task.style.opacity = 0;
  const dragDiv = createDragDiv(task, e);
  putDragDivOnScreen(dragDiv);
}


function createDragDiv(task:any, e:mouseEvent) {
  const dragDiv = document.createElement("div");
  const mouse = getMousePosition(e);

  dragDiv.className = "drag-object";
  dragDiv.textContent = task.querySelector(".text").textContent;
  dragDiv.style.top = `${mouse.y - 10}px`;
  dragDiv.style.left = `${mouse.x - 150}px`;

  dragDiv.addEventListener("mousemove", onMouseMove);
  dragDiv.addEventListener("mouseleave", onMouseMove);
  dragDiv.addEventListener("mouseup", async (ev) => await onMouseUp(task, ev));

  return dragDiv;
}


function putDragDivOnScreen(dragDiv:any) {
  const container = document.querySelector(".to-do-list-wrapper");
  container?.appendChild(dragDiv);
}


export default onMouseDown;