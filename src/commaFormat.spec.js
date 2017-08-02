import { expect } from 'chai'
import 'mocha'
import commaFormat from './commaFormat'

describe('Numeric comma function ', () => {
  const data = [
    [100, '100'],
    [3000, '3,000'],
    [100000, '100,000'],
    [5004000, '5,000,000']
  ]

  const inputs = new Map(data)

  inputs.forEach((result, number) => {
    it(`Input ${number} should return a numeric string with commas`, () => {
      expect(commaFormat(number)).to.equal(result)
    })
  })

  it('should return the same input if the number contains less than 4 digits', () => {
    expect(commaFormat(100)).to.equal('100')
  })
})

