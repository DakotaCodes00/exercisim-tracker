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
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));
    
    this.size.resize(newWidth, newHeight);
  }

  // task 5
  move(newPosition){
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(newX, newY);
  }
}

// task 6
/**
 * @param {ProgramWindow} programWindow
 * @return {ProgramWindow}
 */
export function changeWindow(programWindow){
  programWindow.move(new Position(100,150));
  programWindow.resize(new Size(400,300));    
  return programWindow
}


