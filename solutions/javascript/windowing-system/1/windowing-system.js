// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

// task 1 - prototype syntax
// prototype for window Size with default being 80x60
export function Size(width=80, height=60) {
  this.width = width;
  this.height = height;
}
// prototype method for resizing the window
Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

// task 2 - prototype syntax
// prototype for window position on screen 0,0 = top left
export function Position(x=0, y=0) {
  this.x = x;
  this.y = y;
}
// prototype method for moving window position on screen
Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
}

// task 3 - class syntax

export class ProgramWindow {
  constructor(){
    this.screenSize = new Size(800,600);
    this.size = new Size();
    this.position = new Position();
  }

  // task 4
  resize(newSize){
    if(newSize.width < 1){
      newSize.width = 1;
    }

    if(newSize.height < 1){
      newSize.height = 1;
    }

    if((this.position.x + newSize.width) > this.screenSize.width){
      newSize.width = this.screenSize.width - this.position.x;
    }

    if((this.position.y + newSize.height) > this.screenSize.height){
      newSize.height = this.screenSize.height - this.position.y;
    }
    
    this.size.resize(newSize.width, newSize.height);
  }

  // task 5
  move(newPos){
    let min = 0;
    let maxWidth = this.screenSize.width - this.size.width;
    let maxHeight = this.screenSize.height - this.size.height;

    if(newPos.x < min){
      newPos.x = min;
    }

    if(newPos.y < min){
      newPos.y = min;
    }

    if(newPos.x > maxWidth){
      newPos.x = maxWidth;
    }

    if(newPos.y > maxHeight){
      newPos.y = maxHeight;
    }

    this.position.x = newPos.x;
    this.position.y = newPos.y;
  }
}

// task 6
/**
 * @param {ProgramWindow} programWindow
 * @return {ProgramWindow}
 */
export function changeWindow(programWindow){
  let newSize = new Size(400,300);
  let newPos = new Position(100,150);
  
  programWindow.resize(newSize);
  programWindow.move(newPos);
    
  return programWindow
}


