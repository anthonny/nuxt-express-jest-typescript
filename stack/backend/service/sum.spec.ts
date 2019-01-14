import { sum } from "./sum";

describe(`Sum Service`, () => {

  it('makes the sum of 1 and 3', () => {
    expect(sum(1,3)).toEqual(4);
  })

})
