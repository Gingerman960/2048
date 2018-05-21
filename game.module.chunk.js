webpackJsonp(["game.module"],{

/***/ "../../../../../src/app/game/game-field/game-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" #gameField (keydown)=\"gameControl($event)\" tabindex=\"1\">\r\n    <div class=\"content header\">\r\n        <div class=\"container head\">\r\n            <div>2048</div>\r\n        </div>\r\n        <div class=\"container score\">\r\n            <div>score</div>\r\n            <div>{{getScore()}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"grid-container\">\r\n        <div class=\"grid-item\" *ngFor=\"let item of array; let i = index\">\r\n            <div class=\"number-container\" [ngClass]=\"getColour(item) + ' ' + classArray[i]\">{{item}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"content text\">\r\n        <div>Use arrow keys to play</div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/game/game-field/game-field.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  margin: 0 auto;\n  font-family: 'Oswald', sans-serif;\n  display: -ms-grid;\n  display: grid; }\n  .wrapper .content {\n    text-transform: uppercase;\n    width: 450px;\n    margin: 20px 0;\n    color: #faf8ef;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    justify-self: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  @media screen and (max-width: 500px) {\n      .wrapper .content {\n        width: 350px; } }\n  .wrapper .content .container {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      height: 60px;\n      width: 100px;\n      background: #776e65;\n      border-radius: 5px;\n      margin: 0 10px; }\n  .wrapper .content .container.head {\n        font-size: 30px; }\n  .wrapper .content .container.score {\n        font-size: 18px; }\n  .wrapper .content.text {\n      color: #776e65;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  .wrapper .grid-container {\n    padding: 10px;\n    border-radius: 5px;\n    -ms-grid-row-align: center;\n        align-self: center;\n    -ms-grid-column-align: center;\n        justify-self: center;\n    display: -ms-grid;\n    display: grid;\n    grid-gap: 10px;\n    -ms-grid-columns: (100px)[4];\n        grid-template-columns: repeat(4, 100px);\n    -ms-grid-rows: (100px)[4];\n        grid-template-rows: repeat(4, 100px);\n    background: #bbada0; }\n  @media screen and (max-width: 500px) {\n      .wrapper .grid-container {\n        -ms-grid-columns: (70px)[4];\n            grid-template-columns: repeat(4, 70px);\n        -ms-grid-rows: (70px)[4];\n            grid-template-rows: repeat(4, 70px); }\n        .wrapper .grid-container .grid-item .number-container {\n          font-size: 35px; } }\n  .wrapper .grid-container .grid-item {\n      display: block;\n      background: #cdc1b4;\n      border-radius: 5px; }\n  .wrapper .grid-container .grid-item .number-container {\n        -webkit-transition: -webkit-transform 300ms;\n        transition: -webkit-transform 300ms;\n        transition: transform 300ms;\n        transition: transform 300ms, -webkit-transform 300ms;\n        -webkit-transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n                transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\n        display: -ms-grid;\n        display: grid;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        width: 100%;\n        height: 100%;\n        border-radius: 5px;\n        font-size: 40px;\n        font-weight: 700; }\n  .wrapper .grid-container .grid-item .number-container.displayNone {\n          display: none; }\n  .wrapper .grid-container .grid-item .number-container.move-right-1 {\n          -webkit-transform: translateX(110%);\n                  transform: translateX(110%); }\n  .wrapper .grid-container .grid-item .number-container.move-right-2 {\n          -webkit-transform: translateX(220%);\n                  transform: translateX(220%); }\n  .wrapper .grid-container .grid-item .number-container.move-right-3 {\n          -webkit-transform: translateX(330%);\n                  transform: translateX(330%); }\n  .wrapper .grid-container .grid-item .number-container.move-left {\n          -webkit-transform: translateX(-110%);\n                  transform: translateX(-110%); }\n  .wrapper .grid-container .grid-item .number-container.move-left-2 {\n          -webkit-transform: translateX(-220%);\n                  transform: translateX(-220%); }\n  .wrapper .grid-container .grid-item .number-container.move-left-3 {\n          -webkit-transform: translateX(-330%);\n                  transform: translateX(-330%); }\n  .wrapper .grid-container .grid-item .number-container.move-down {\n          -webkit-transform: translateY(110%);\n                  transform: translateY(110%); }\n  .wrapper .grid-container .grid-item .number-container.move-down-2 {\n          -webkit-transform: translateY(220%);\n                  transform: translateY(220%); }\n  .wrapper .grid-container .grid-item .number-container.move-down-3 {\n          -webkit-transform: translateY(330%);\n                  transform: translateY(330%); }\n  .wrapper .grid-container .grid-item .number-container.move-up {\n          -webkit-transform: translateY(-110%);\n                  transform: translateY(-110%); }\n  .wrapper .grid-container .grid-item .number-container.move-up-2 {\n          -webkit-transform: translateY(-220%);\n                  transform: translateY(-220%); }\n  .wrapper .grid-container .grid-item .number-container.move-up-3 {\n          -webkit-transform: translateY(-330%);\n                  transform: translateY(-330%); }\n  .wrapper .grid-container .grid-item .number-container.appear {\n          -webkit-transform: scale(1.1);\n                  transform: scale(1.1); }\n  .wrapper .grid-container .grid-item .number-container.title-2 {\n          background: #eee4da;\n          color: #776e65; }\n  .wrapper .grid-container .grid-item .number-container.title-4 {\n          background: #ede0c8;\n          color: #776e65; }\n  .wrapper .grid-container .grid-item .number-container.title-8 {\n          background: #f2b179;\n          color: #f9f6f2; }\n  .wrapper .grid-container .grid-item .number-container.title-16 {\n          background: #f59563;\n          color: #f9f6f2; }\n  .wrapper .grid-container .grid-item .number-container.title-32 {\n          background: #f67c5f;\n          color: #f9f6f2; }\n  .wrapper .grid-container .grid-item .number-container.title-64 {\n          background: #f65e3b;\n          color: #f9f6f2; }\n  .wrapper .grid-container .grid-item .number-container.title-128 {\n          color: #f9f6f2;\n          background: #edcf72;\n          -webkit-box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286);\n                  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286); }\n  .wrapper .grid-container .grid-item .number-container.title-256 {\n          color: #f9f6f2;\n          background: #edcc61;\n          -webkit-box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048);\n                  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.31746), inset 0 0 0 1px rgba(255, 255, 255, 0.19048); }\n  .wrapper .grid-container .grid-item .number-container.title-512 {\n          background: #edc850;\n          color: #f9f6f2;\n          -webkit-box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381);\n                  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.39683), inset 0 0 0 1px rgba(255, 255, 255, 0.2381); }\n  .wrapper .grid-container .grid-item .number-container.title-1024 {\n          color: #f9f6f2;\n          background: #edc53f;\n          -webkit-box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571);\n                  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.47619), inset 0 0 0 1px rgba(255, 255, 255, 0.28571); }\n  .wrapper .grid-container .grid-item .number-container.title-2048 {\n          color: #f9f6f2;\n          background: #edc22e;\n          -webkit-box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333);\n                  box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.55556), inset 0 0 0 1px rgba(255, 255, 255, 0.33333); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game-field/game-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameFieldComponent = /** @class */ (function () {
    function GameFieldComponent() {
        this.numberClass = {
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
        };
        this.direction = '';
        this.array = Array(16).fill(null);
        this.classArray = Array(16).fill('');
        this.score = 0;
    }
    GameFieldComponent.prototype.ngAfterViewInit = function () {
        this.gameField.nativeElement.focus();
    };
    GameFieldComponent.prototype.ngOnInit = function () {
        this.appearRandomNumber();
        this.appearRandomNumber();
    };
    GameFieldComponent.prototype.appearRandomNumber = function () {
        var _this = this;
        //console.log('arr ',this.array);
        var freeIndex = this.array.map(function (v, i) { if (v == null) {
            return i;
        } }).filter(function (v) { if (v != undefined)
            return true; });
        //console.log('free: ', freeIndex);
        if (freeIndex.length >= 1) {
            var index_1 = freeIndex[this.randomGen(freeIndex.length - 1)];
            setTimeout(function () {
                _this.array[index_1] = _this.randomGen(1) == 0 ? 2 : 4;
                _this.animate(index_1, 'appear');
            }, 100);
        }
    };
    GameFieldComponent.prototype.randomGen = function (max) {
        var temp = Math.floor(Math.random() * Math.floor(max + 1));
        //console.log(temp);
        return temp;
    };
    GameFieldComponent.prototype.getColour = function (val) {
        return this.numberClass[val] ? this.numberClass[val] : '';
    };
    GameFieldComponent.prototype.animate = function (index, type) {
        var _this = this;
        this.classArray[index] = type;
        setTimeout(function () { _this.classArray[index] = ''; }, 30);
    };
    GameFieldComponent.prototype.gameControl = function (event) {
        //console.log(event.key);
        if (event.key == 'ArrowRight') {
            this.direction = 'right';
            this.array = this.getArrFromChunks(this.move(this.getChunks()));
            this.appearRandomNumber();
        }
        else if (event.key == 'ArrowDown') {
            this.array = this.getArrFromChunks(this.turn(this.move(this.turn(this.getChunks(), 90)), -90));
            this.appearRandomNumber();
        }
        else if (event.key == 'ArrowLeft') {
            this.array = this.getArrFromChunks(this.turn(this.move(this.turn(this.getChunks(), 180)), 180));
            this.appearRandomNumber();
        }
        else if (event.key == 'ArrowUp') {
            this.array = this.getArrFromChunks(this.turn(this.move(this.turn(this.getChunks(), -90)), 90));
            this.appearRandomNumber();
        }
        //}
    };
    GameFieldComponent.prototype.move = function (chunks) {
        for (var i = 0; i < chunks.length; i++) {
            var freePlace = null;
            for (var j = chunks[i].length - 1; j >= 0; j--) {
                if (j != 3) {
                    //console.log('data: ', j, freePlace);
                    freePlace = makeMove(this, i, j, freePlace);
                }
                else
                    freePlace = 3;
            }
        }
        //return chunks[0].concat(chunks[1], chunks[2], chunks[3]);
        return chunks;
        function makeMove(self, i, j, freePlace) {
            if (chunks[i][freePlace] == null) {
                //move animation
                //self.moveAnimation(i, j, freePlace).then(()=> {
                chunks[i][freePlace] = chunks[i][j];
                chunks[i][j] = null;
                return freePlace;
                //});
            }
            else if (chunks[i][j] == null) {
                return freePlace;
            }
            else if (chunks[i][freePlace] == chunks[i][j]) {
                self.score += chunks[i][freePlace];
                chunks[i][freePlace] = chunks[i][freePlace] * 2;
                //move animation from j to freePlace, 
                //self.moveAnimation(i, j, freePlace).then(() => {
                //then animation of appering new number at freePlace
                //self.appearAnimation(i, freePlace).then(()=> {
                chunks[i][j] = null;
                return j;
                //});
                //});
            }
            else {
                if (freePlace - j == 1) {
                    return j;
                }
                else {
                    //animation here please (move from j to freePlace-1)
                    //self.moveAnimation(i, j, freePlace-1).then(()=>{
                    chunks[i][freePlace - 1] = chunks[i][j];
                    chunks[i][j] = null;
                    return freePlace - 1;
                    //});
                }
            }
        }
    };
    GameFieldComponent.prototype.getChunks = function () {
        var chunks = [[], [], [], []];
        chunks[0] = this.array.slice(0, 4);
        chunks[1] = this.array.slice(4, 8);
        chunks[2] = this.array.slice(8, 12);
        chunks[3] = this.array.slice(12, 16);
        return chunks;
    };
    GameFieldComponent.prototype.getArrFromChunks = function (chunks) {
        return chunks[0].concat(chunks[1], chunks[2], chunks[3]);
    };
    GameFieldComponent.prototype.turn = function (m, degree) {
        var n = m.slice();
        console.log('matrix', n);
        //console.log('original',m);
        if (degree == 90) {
            return n[0].map(function (column, index) { return (n.map(function (row) { return row[index]; })); }).reverse();
        }
        else if (degree == -90) {
            n = n.reverse();
            return n[0].map(function (column, index) { return (n.map(function (row) { return row[index]; })); });
        }
        else if (degree == 180) {
            // n = n.reverse();
            // return n[0].map((column, index) => (
            //   n.map(row => row[index])
            // )).reverse();
            n.reverse();
            n.forEach(function (element) {
                element.reverse();
            });
            return n;
        }
    };
    GameFieldComponent.prototype.moveAnimation = function (row, from, to) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.classArray[row * 4 + from] = "move-" + _this.direction + "-" + (to - from);
            setTimeout(function () {
                _this.classArray[row * 4 + from] = 'displayNone';
                setTimeout(function () {
                    _this.classArray[row * 4 + from] = '';
                    resolve;
                }, 300);
            }, 300);
        });
    };
    GameFieldComponent.prototype.appearAnimation = function (row, to) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.classArray[row * 4 + to] = 'appear';
            setTimeout(function () {
                _this.classArray[row * 4 + to] = 'displayNone';
                setTimeout(function () {
                    _this.classArray[row * 4 + to] = '';
                    resolve;
                });
            }, 300);
        });
    };
    GameFieldComponent.prototype.getScore = function () {
        return this.score;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('gameField'),
        __metadata("design:type", Object)
    ], GameFieldComponent.prototype, "gameField", void 0);
    GameFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game-field',
            template: __webpack_require__("../../../../../src/app/game/game-field/game-field.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game-field/game-field.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GameFieldComponent);
    return GameFieldComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_field_game_field_component__ = __webpack_require__("../../../../../src/app/game/game-field/game-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/game/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_2__game_field_game_field_component__["a" /* GameFieldComponent */] }
];
var GameRoutingModule = /** @class */ (function () {
    function GameRoutingModule() {
    }
    GameRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], GameRoutingModule);
    return GameRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_routing_module__ = __webpack_require__("../../../../../src/app/game/game-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_field_game_field_component__ = __webpack_require__("../../../../../src/app/game/game-field/game-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_component__ = __webpack_require__("../../../../../src/app/game/main/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GameModule = /** @class */ (function () {
    function GameModule() {
    }
    GameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__game_routing_module__["a" /* GameRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__game_field_game_field_component__["a" /* GameFieldComponent */], __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */]]
        })
    ], GameModule);
    return GameModule;
}());



/***/ }),

/***/ "../../../../../src/app/game/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome\">\r\n    <div>Welcome to 2048</div>\r\n    <button routerLink=\"game\">Start!</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/game/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome {\n  height: 100vh;\n  font-family: 'Oswald', sans-serif;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .welcome div {\n    margin-bottom: 50px;\n    font-size: 56px;\n    color: #776e65; }\n  .welcome button {\n    -webkit-transition: all 100ms;\n    transition: all 100ms;\n    border: none;\n    background: #776e65;\n    color: #fff;\n    width: 120px;\n    height: 60px;\n    font-size: 25px;\n    border-radius: 5px;\n    text-transform: uppercase; }\n  .welcome button:hover {\n      cursor: pointer;\n      background: #edcf72;\n      color: #776e65;\n      -webkit-box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286);\n              box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2381), inset 0 0 0 1px rgba(255, 255, 255, 0.14286); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/game/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ })

});
//# sourceMappingURL=game.module.chunk.js.map