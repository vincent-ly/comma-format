function commaFormat (input, fixedTo = 2) {
  const number = input.toFixed(fixedTo).split('.')
  const integer = number[0]
  const decimal = input % 1 !== 0 ? `.${number[1]}` : ''

  let counter = 0
  let temp = ''

  for (let i = integer.length - 1; i >= 0; i--) {
    counter++
    temp = integer[i] + temp

    if (counter === 3 && i > 0) {
      counter = 0
      temp = ',' + temp
    }
  }

  return temp + decimal
}

export default commaFormat
