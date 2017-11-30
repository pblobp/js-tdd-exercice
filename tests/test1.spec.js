var expect = require("chai").expect;

describe("main", function() {

  let arr;


  // run once before the block
  before(function() {
    // open DB connections
    // create datasets
    // ..
  });

  // run once after the block
  after(function() {
    // close DB connection
    // drop datasets
    // ...
  });

  // run always before each block
  beforeEach(function() {
    arr = [1, 2, 3];
  });

  // run always after each block
  afterEach(function() {});

  it("should be an array", function() {
    expect(arr).to.be.an('array');
  });

  it("should have a size of 4 when push another value to the array", function() {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it("should have a size of 2 when pop a value from the array", function() {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it("should be true if thirdy item is 3", function() {
    expect(arr.pop() === 3).to.be.true;
  });

});
