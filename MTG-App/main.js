(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-dark bg-primary sticky-top\">\n  <a class=\"navbar-brand\" href=\"#\">Random MTG Cards</a>\n</div>\n<div class=\"container-fluid p-3 bg-light\"></div>\n<div class=\"container-fluid bg-light\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <app-mtgcard *ngFor=\"let card of cards\" [card]=\"card\" class=\"p-1 col-10 col-sm-6 col-md-4 col-lg-3\">\n      </app-mtgcard>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid bg-dark\">\n  <div class=\"row p-5\">\n    <div class=\"col-sm-6 text-light text-center\">\n      Made with <a href=\"https://angular.io/\">Angular</a>, \n      <a href=\"https://getbootstrap.com/\">Bootstrap 4</a>,\n      and the <a href=\"https://magicthegathering.io/\">Magic The Gathering API</a>\n    </div>\n    <div class=\"col-sm-6 text-light text-center\">\n      Made by Samuel Rider-Leck.\n      See my <a href=\"https://http://samuel-rider-leck.github.io\">website</a>.\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_mtgcard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/mtgcard.service */ "./src/app/services/mtgcard.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getCards()
            .subscribe(function (resp) { _this.cards = resp.cards; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_mtgcard_service__WEBPACK_IMPORTED_MODULE_2__["MTGCardService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mtgcard_service__WEBPACK_IMPORTED_MODULE_2__["MTGCardService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mtgcard_mtgcard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mtgcard/mtgcard.component */ "./src/app/mtgcard/mtgcard.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _mtgcard_mtgcard_component__WEBPACK_IMPORTED_MODULE_5__["MTGCardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/mtgcard.ts":
/*!************************************!*\
  !*** ./src/app/classes/mtgcard.ts ***!
  \************************************/
/*! exports provided: MTGCardResponse, MTGCard, ForeignMTGCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTGCardResponse", function() { return MTGCardResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTGCard", function() { return MTGCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForeignMTGCard", function() { return ForeignMTGCard; });
var MTGCardResponse = /** @class */ (function () {
    function MTGCardResponse() {
    }
    return MTGCardResponse;
}());

var MTGCard = /** @class */ (function () {
    function MTGCard() {
    }
    return MTGCard;
}());

var ForeignMTGCard = /** @class */ (function () {
    function ForeignMTGCard() {
    }
    return ForeignMTGCard;
}());



/***/ }),

/***/ "./src/app/mtgcard/mtgcard.component.css":
/*!***********************************************!*\
  !*** ./src/app/mtgcard/mtgcard.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL210Z2NhcmQvbXRnY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mtgcard/mtgcard.component.html":
/*!************************************************!*\
  !*** ./src/app/mtgcard/mtgcard.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img src={{imageUrl}} class=\"card-img-top\" alt=\"\"/>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{card.name}}</h5>\n    <p class=\"card-text\">{{card.flavor}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mtgcard/mtgcard.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mtgcard/mtgcard.component.ts ***!
  \**********************************************/
/*! exports provided: MTGCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTGCardComponent", function() { return MTGCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_mtgcard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/mtgcard */ "./src/app/classes/mtgcard.ts");



var MTGCardComponent = /** @class */ (function () {
    function MTGCardComponent() {
    }
    MTGCardComponent.prototype.ngOnInit = function () {
        this.imageUrl = this.card.imageUrl;
        if (!this.imageUrl) {
            for (var i = this.card.foreignNames.length; i > 0; i--) {
                this.imageUrl = this.card.foreignNames[0].imageUrl || this.imageUrl;
            }
            this.imageUrl = this.imageUrl || "assets/blank_card.jpg";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _classes_mtgcard__WEBPACK_IMPORTED_MODULE_2__["MTGCard"])
    ], MTGCardComponent.prototype, "card", void 0);
    MTGCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mtgcard',
            template: __webpack_require__(/*! ./mtgcard.component.html */ "./src/app/mtgcard/mtgcard.component.html"),
            styles: [__webpack_require__(/*! ./mtgcard.component.css */ "./src/app/mtgcard/mtgcard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MTGCardComponent);
    return MTGCardComponent;
}());



/***/ }),

/***/ "./src/app/services/mtgcard.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/mtgcard.service.ts ***!
  \*********************************************/
/*! exports provided: MTGCardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MTGCardService", function() { return MTGCardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MTGCardService = /** @class */ (function () {
    function MTGCardService(httpClient) {
        this.httpClient = httpClient;
        this.configURL = "https://api.magicthegathering.io/v1/cards?random=true";
    }
    MTGCardService.prototype.getCards = function () {
        return this.httpClient.get(this.configURL);
    };
    MTGCardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MTGCardService);
    return MTGCardService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Filly\Development\Projects\MTG-Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map