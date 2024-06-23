const Arithmetic = require('../lib/shape.js');

describe('Arithmetic',()=>{
    describe('circle', ()=>{
      it('it will take color and return a circle shape', ()=>{
         const shape = new Arithmetic.Circle();
            shape.setColor("blue");
         expect(shape.render()).toEqual(`<circle r="100" cx="50%" cy="50%"  fill="blue" />`);
      });

    });

    describe('square', ()=>{

    });

    describe('traingle', ()=>{

    });

});