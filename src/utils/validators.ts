
export const checkLength = (input: string): boolean => {
  if(input.length > 5 && input.length < 21){
    return true;
  }
  else{
    return false;
  }
}

export const checkUpperCase = (input: string): boolean => {
  if(input.match(/[A-Z]/g)){
    return true;
  }
  else{
    return false;
  }
}

export const checkLowerCase = (input: string): boolean => {
  if(input.match(/[a-z]/g)){
    return true;
  }
  else{
    return false;
  }
}

export const checkSpecialCharacter = (input: string): boolean => {
  if(input.match(/[^a-zA-Z\d]/g)){
    return true;
  }
  else{
    return false;
  }
}

export const checkNumber = (input: string): boolean => {
  if(input.match(/[0-9]/g)){
    return true;
  }
  else{
    return false;
  }
}
