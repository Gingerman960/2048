import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { isNull } from 'util';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})
export class GameFieldComponent implements OnInit {
  constructor() { }

  numberClass = {
    2: 'title-2',
    4: 'title-4',
    8: 'title-8',
    16: 'title-16',
    32: 'title-32',
    64: 'title-64',
    128: 'title-128',
    256: 'title-256',
    512: 'title-512',
    1024: 'title-1024',
    2048: 'title-2048'
  }
  direction = '';
  array = Array(16).fill(null);
  classArray = Array(16).fill('');

  ngOnInit() {
    this.appearRandomNumber(); 
    this.appearRandomNumber(); 
  }
  appearRandomNumber() {
    console.log('arr ',this.array);
    let freeIndex = this.array.map((v, i) => {if(v == null) {return i;}}).filter(v => {if(v != undefined) return true;});
    console.log('free: ', freeIndex);
    if(freeIndex.length >= 1) {
      let index = freeIndex[this.randomGen(freeIndex.length -1)];
      this.array[index] = this.randomGen(1) == 0 ? 2 : 4;
      this.animate(index, 'appear');
    }
  }
  randomGen(max) {
    let temp = Math.floor(Math.random() * Math.floor(max + 1));
    console.log(temp);
    return temp;
  }
  getColour(val) {   
    return this.numberClass[val] ? this.numberClass[val] : '';
  }
  animate(index, type) {
    this.classArray[index] = type;
    setTimeout(() => {this.classArray[index] = '';},30);
  }
  gameControl(event: any)  {
    console.log(event.key);
    if(event.key == 'ArrowRight') {
      this.direction = 'right';
      this.move();
    // } else if(event.key == 'ArrowDown') {
    //   this.twist('right');
    //   this.move();
    //   this.twist('left');
    // } else if(event.key == 'ArrowLeft') {
    //   this.twist
    //   this.move();
    // } else if(event.key == 'ArrowUp') {
    //   this.move();
    // }
  }
}
move() {
  let chunks = [[],[],[],[]];
    chunks[0] = this.array.slice(0, 4);
    chunks[1] = this.array.slice(4, 8);
    chunks[2] = this.array.slice(8, 12);
    chunks[3] = this.array.slice(12, 16);
    for(let i = 0; i < chunks.length; i++) {
      // for(let j = 0; j < chunks[i].length; j++) {
        
      // }
      recoursiveCalc(chunks[i], 3);
      
    }
    function recoursiveCalc(chunks, i) { 
      if(!isNull(chunks[i]) && i >= 0)
      {
        
      } else {
        recoursiveCalc(chunks, i-1);
      }
    }
}
