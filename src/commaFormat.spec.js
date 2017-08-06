import { expect } from 'chai'
import 'mocha'
import commaFormat from './commaFormat'

describe('Numeric comma function ', () => {
  const data = [
    [10, '10'],
    [3000, '3,000'],
    [100000, '100,000'],
    [5004000, '5,004,000']
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

  it('should throw an error if input is not a number', () => {
    expect(() => commaFormat('asdf')).to.throw()
  })

  it('should fix the number to two decimal places if a fixed paramter is not specified', () => {
    expect(commaFormat(1367.4567)).to.equal('1,367.46')
  })

  it('should fix the number to the specific decimal places', () => {
    expect(commaFormat(5030.4934343, 3)).to.equal('5,030.493')
  })
})

