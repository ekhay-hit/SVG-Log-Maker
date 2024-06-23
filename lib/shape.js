// CONSTRUCTOR CLASS
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  setColor(shapeColor){
    this.shapeColor = shapeColor;
  }

}

// Child circle of extends parent Shape

class Circle extends Shape {
  constructor(shapeColor) {
      super(shapeColor);
  }
  render() {
    return `<circle r="100" cx="50%" cy="50%"  fill="${this.shapeColor}" />`;
  }
}

// Child Square of extends parent Shape
class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return `<rect x="50" width="150" height="150"  fill="${this.shapeColor}" />`;
  }
}

// Child Traingle of extends parent Shape
class Traingle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
      return `<polygon height="150" width="150" points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`
  }
};

// Generating content of SVG receiving the shape and text
function svg(shape,txt){
  return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shape}${txt}</svg> `;
}

// function that set logic for creating the shape base on the input
function renderShape(data) {
  // deconstructing the data aboject
  const {logoName, textColor,shape,shapeColor} =data;
  // varaible that will be returned in this function and use for the content that will be written to svg file
  let svgShape='';
  // varaible to hold the shape text
  let text ='';
  
  // switch used to manupilate what shape, text  user requested
  switch(shape){
    case 'triangle':
      const traingleShape = new Traingle(shapeColor)
      const traingle=traingleShape.render();
      text = `<text x="150" y="125" font-size="30" text-anchor="middle" fill="${textColor}">${logoName}</text>` 
           svgShape= svg(traingle,text);
      break;

    case 'square':
      const squareShape = new Square(shapeColor)
      const square=squareShape.render(); 
      text = `<text x="120" y="90" font-size="50" text-anchor="middle" fill="${textColor}">${logoName}</text>`
           svgShape= svg(square,text);
      break;

    case 'circle':
      const circleShape = new Circle(shapeColor)
      const circle=circleShape.render(); 
      text = `<text x="150" y="115" font-size="30" text-anchor="middle" fill="${textColor}">${logoName}</text>`
           svgShape= svg(circle,text)
      break;

    default:
      console.log('wrong shape');
  }
      
  return svgShape;
}

// exporting functions and class constructor
module.exports = {
  renderShape,Circle, Square, Traingle
};