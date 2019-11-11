import {add, total} from './App'


// Unit Test => only  one function
test('add',() =>{
    const value = add(1,2);
    expect(value).toBe(3);

})

// Integration test => relies on other function

test('total', () => {
    expect(total(5, 20)).toBe("$25");
})

// App.js

export const add =  (x,y) => {
    return (x + y);
  }
  
  export const total = (shipping, subTotal) => {
    return "$" + add(shipping, subTotal);
  }
  