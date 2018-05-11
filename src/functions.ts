//Pure Functions

const square = (x: number) => {
  return x * x;
};

const squareAll = (items: Array<number>) => {
  //map does not modify the original array, instead it creates a new one
  return items.map(items => square(items));
};

const getNewCounterValue = (c:number,operation:string)=>{
    switch(operation){
        case "I":
            return c+1;
        case "D":
            return c-1;
        default:
            return c;
    }
}

//Impure Functions
let y = 0;
const doSomeMathMagic = x => {
  return x * y;
};

const squareAllByImpureMeans = (items: Array<number>) => {
  for (let i = 0; i < items.length; i++) {
    items[i] = square(items[i]);
  }
};


/**
 * Reducer: Its a pure function, that takes as parameters the CURRENT STATE and the ACTION being dispatched, and returns a NEW STATE
 */