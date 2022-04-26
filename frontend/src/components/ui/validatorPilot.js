const validatePilot = values => {
  //create validators object for name email phone and message
  const validators = {
    name: [
      {
        validator: value => value.length > 0,
        message: "Name is required",
      },
      {
        validator: value => value.length < 100,
        message: "Name is too long",
      },
    ],
    email: [
      {
        validator: value => value.length > 0,
        message: "Email is required",
      },
      {
        validator: value => value.length < 100,
        message: "Email is too long",
      },
      {
        validator: value =>
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
        message: "Invalid email address",
      },
    ],
    phoneNumber: [
      {
        validator: value => value.length > 0,
        message: "Phone number is required",
      },
      {
        validator: value => value.length < 100,
        message: "Phone number is too long",
      },
      {
        validator: value =>
          /^\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})$/.test(
            value
          ),
        message: "Invalid phone number",
      },
    ],
    message: [
      {
        validator: value => value.length > 0,
        message: "Message is required",
      },
      {
        validator: value => value.length < 100,
        message: "Message is too long",
      },
    ],
  }

  //create validation object
  const validationMessage = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  }

  //loop through validators object and validate each field
  for (let key in validators) {
    validators[key].forEach(v => {
      if (!v.validator(values[key])) {
        validationMessage[key] = v.message
      }
    })
  }

  //return validation object
  return validationMessage
}

export default validatePilot
