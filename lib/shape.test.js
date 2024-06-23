const Arithmetic = require('./shape.js');

describe('Arithmetic',()=>{
    describe('circle', ()=>{
      it('it will take color and return a circle shape', ()=>{
         const shape = new Arithmetic.Circle();
         // let color = "blue";
         shape.setColor("blue");
         expect(shape.render()).toEqual(`<circle r="100" cx="50%" cy="50%"  fill="blue" />`);
      });

    });

    describe('square', ()=>{
   
         it('it will take color and return a square shape with color', ()=>{
            const shape = new Arithmetic.Square();
               shape.setColor("blue");
            expect(shape.render()).toEqual(`<rect x="50" width="150" height="150"  fill="blue" />`);
         });

    });

    describe('traingle', ()=>{
         it('it will take color and return a traingle shape with color', ()=>{
            const shape = new Arithmetic.Traingle();
               shape.setColor("blue");
            expect(shape.render()).toEqual(`<polygon height="150" width="150" points="150, 18 244, 182 56, 182" fill="blue"/>`);
         });

    });

});