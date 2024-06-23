class Shape {
  constructor(logoName, textColor, shape, shapeColor) {
    this.logoText = logoName;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

}

class Circle extends Shape {
  constructor(logoName, textColor, shapeColor) {
    Super(logoName, textColor, shapeColor);
  }
  render() {
    return `<circle r="100" cx="50%" cy="50%"  fill="${shapeColor}" />`;
  }
}

class Square extends Shape {
  constructor(logoName, textColor, shapeColor) {
    Super(logoName, textColor, shapeColor);
  }
  render() {
    return `<rect x="50" width="150" height="150"  fill="${shapeColor}" />`;
  }
}

class Traingle extends Shape {
  constructor(logoName, textColor, shapeColor) {
    super(logoName, textColor, shapeColor);
  }
  render(logoName, textColor, shapeColor) {
    //   return `<polygon height="150" width="150" points="100,10 150,190 50,190" fill="${shapeColor}" />`

    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200"><polygon height="150" width="150" points="150, 18 244, 182 56, 182" fill="${shapeColor}"/> <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">${logoName}</text> `;
  }
};

function renderShape(data) {
  const {logoName, textColor, shape, shapeColor} =data;
   console.log(data);
   console.log(data.logoName);
   const traingleShape = new Traingle(logoName, textColor,shapeColor)
  console.log('You are here in render');
   return traingleShape.render(logoName, textColor, shapeColor);
}

module.exports = renderShape;
