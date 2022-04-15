const width = getWidthBase();

function calculateHowMuchShouldMoveImages(selectedPosition:number, oldPosition:number) {
  const mustMoveLeft = selectedPosition < oldPosition;
  if(mustMoveLeft) return positionsToLeft(selectedPosition);
  return positionsToRight(selectedPosition);
}

function positionsToLeft(selectedPosition:number) {
  const positions:number[] = [];
  for(let i = 0; i < 3; i++) {
    if(selectedPosition === i) positions.push(0);
    if(selectedPosition - 1 === i) positions.push(-width);
    if(selectedPosition + 1 === i) positions.push(width);
    if(selectedPosition + 2 === i) positions.push(width + width); 
  }
  return positions;
}

function positionsToRight(selectedPosition:number) {
  const positions:number[] = [];
  for(let i = 0; i < 3; i++) {
    if(selectedPosition === i) positions.push(0);
    if(selectedPosition - 1 === i) positions.push(-width);
    if(selectedPosition + 1 === i) positions.push(width);
    if(selectedPosition - 2 === i) positions.push(-width + -width); 
  }
  return positions;
}

export function getWidthBase() {
  const windowsWidth = window.innerWidth;
  if(windowsWidth < 1300) return windowsWidth;
  return 1300;
}

export default calculateHowMuchShouldMoveImages;