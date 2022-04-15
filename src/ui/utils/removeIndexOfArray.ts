function removeIndexOfArray(array:any[], indexToRemove:number) {
  let newArray = [];
  
  for(let i = 0; i < array.length; i++) {
    if(i !== indexToRemove) newArray.push(array[i]);
  }

  return newArray;
}

export default removeIndexOfArray;