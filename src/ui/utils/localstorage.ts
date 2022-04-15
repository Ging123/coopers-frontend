class Localstorage {

  public set(key:string, value:any) {
    const stringfyValue = JSON.stringify(value);
    localStorage.setItem(key, stringfyValue);
  }

  
  public get(key:string) {
    const stringfyValue = localStorage.getItem(key);
    if(!stringfyValue) return;
    const value = JSON.parse(stringfyValue);
    return value;
  }


  public delete(key:string) {
    localStorage.removeItem(key);
  }
}

export default Localstorage;