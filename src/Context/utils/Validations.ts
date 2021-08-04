export function validateEmail(value: string) :string | undefined{
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  export function validatePassword(value: string) {
    let error;
    if (!value ) {
      error = "Please enter your password";
    }
    return error;
  }
  
  export function validateuserName(value: string) {
    let error;
    if (!value ) {
      error = "Please enter your name";
    }else if ( !/^[a-zA-Z]+(\s*\w*)*$/.test(value)){
        error = "Please enter valid name"
      }
    return error;
  }
  