import { Component, OnInit, ViewChild } from '@angular/core';
import { timeout } from 'q';
import { isNull } from 'util';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})

export class GameFieldComponent implements OnInit {
  constructor() { }
  @ViewChild('gameField') gameField;
  ngAfterViewInit() {
    this.gameField.nativeElement.focus();  
  }

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
    //console.log('arr ',this.array);
    let freeIndex = this.array.map((v, i) => {if(v == null) {return i;}}).filter(v => {if(v != undefined) return true;});
    //console.log('free: ', freeIndex);
    if(freeIndex.length >= 1) {
      let index = freeIndex[this.randomGen(freeIndex.length -1)];
      this.array[index] = this.randomGen(1) == 0 ? 2 : 4;
      this.animate(index, 'appear');
    }
  }
  randomGen(max) {
    let temp = Math.floor(Math.random() * Math.floor(max + 1));
    //console.log(temp);
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
    //console.log(event.key);
    if(event.key == 'ArrowRight') {
      this.direction = 'right';
      this.move();
      //this.appearRandomNumber();
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
      let freePlace = null;

      for(let j = chunks[i].length-1; j >= 0; j--) {
        if(j != 3) {
          //console.log('data: ', j, freePlace);
          freePlace = makeMove(this, i,j,freePlace)
        } else freePlace = 3;
      } 
    }

    
      setTimeout(() => {
        console.log('before', chunks);
        setTimeout(() => console.log('after', chunks), 1000)
        this.array = chunks[0].concat(chunks[1], chunks[2], chunks[3]);
        this.appearRandomNumber()
      }, 600);
      //console.log('array', this.array)
      
    function makeMove(self: GameFieldComponent, i, j, freePlace) {
      if (chunks[i][freePlace] == null) {
        //move animation
        //self.moveAnimation(i, j, freePlace).then(()=> {
          chunks[i][freePlace] = chunks[i][j];
          chunks[i][j] = null;
          return freePlace;
        //});
      } else if(chunks[i][j] == null) {
        return freePlace;
      } else if (chunks[i][freePlace] == chunks[i][j]) {
        chunks[i][freePlace] = chunks[i][freePlace] * 2;
        //move animation from j to freePlace, 
        //self.moveAnimation(i, j, freePlace).then(() => {
        //then animation of appering new number at freePlace
          //self.appearAnimation(i, freePlace).then(()=> {
            chunks[i][j] = null;
            return j;
          //});
        //});
      } else {
        if(freePlace - j == 1) {
          return j
        } else {
          //animation here please (move from j to freePlace-1)
          //self.moveAnimation(i, j, freePlace-1).then(()=>{
            chunks[i][freePlace - 1] = chunks[i][j];
            chunks[i][j] = null;
            return freePlace - 1;
          //});
        }
      }
    }
  }
  moveAnimation(row, from, to) {
    return new Promise((resolve, reject) => {
      this.classArray[row * 4 + from] = `move-${this.direction}-${to - from}`;
      setTimeout(() => {
        this.classArray[row * 4 + from] = 'displayNone';
        setTimeout(()=> {
          this.classArray[row * 4 + from] = '';
        resolve;
        }, 300);
      }, 300);
    })
  }
  appearAnimation(row, to) {
    return new Promise((resolve, reject) => {
      this.classArray[row * 4 + to] = 'appear';
      setTimeout(() => {
        this.classArray[row * 4 + to] = 'displayNone';
        setTimeout(() => {
          this.classArray[row * 4 + to] = '';
          resolve;
        });
      }, 300);
    });
  }
  getScore() {
    return this.array.reduce((res, n) => {return res + n});
  }
}
