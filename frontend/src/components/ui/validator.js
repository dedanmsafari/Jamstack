const validate = values => {
  const validators = {
    name: val => val.length > 1,
    email: val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val),
    phone: val =>
      /^\+?( |-|\.)?\d{1,2}( |-|\.)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})$/.test(
        val
      ),
    message: val => val.length > 5,
  }

  const valid = {}

  Object.keys(values).map(field => {
    valid[field] = validators[field](values[field])
  })

  return valid
}

export default validate
