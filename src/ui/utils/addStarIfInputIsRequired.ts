function addStarIfInputIsRequired(fieldName?:string, required?:boolean) {
  if(!fieldName) return '';
  return `${ fieldName }${ required ? '*' : '' }`;
}

export default addStarIfInputIsRequired;