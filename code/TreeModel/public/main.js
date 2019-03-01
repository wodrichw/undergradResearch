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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    max-width: 1080px;\n    margin: 0 auto !important;\n    float: none !important;\n}\n\nmat-card {\n    background: rgba(66,139,202, .7);\n    margin: 0 0 10px 0;\n    overflow: hidden;\n}\n\n.exclusionTreeCard {\n    height: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxubWF0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjYsMTM5LDIwMiwgLjcpO1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmV4Y2x1c2lvblRyZWVDYXJkIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n  <div style=\"text-align:center\">\n    <h1>\n      The Assemblers\n    </h1>\n    <h2>\n      Math Model\n    </h2>\n  </div>\n\n  <mat-card class=\"exclusionTreeCard\">\n    <mat-card-title>\n      Exclusion Tree\n    </mat-card-title>\n    <mat-card-content>\n      <app-d3-tree></app-d3-tree>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-title>\n      Node Details\n    </mat-card-title>\n    <mat-card-content>\n      <app-inspect-node></app-inspect-node>\n    </mat-card-content>\n  </mat-card>\n</div>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _d3_tree_d3_tree_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./d3-tree/d3-tree.component */ "./src/app/d3-tree/d3-tree.component.ts");
/* harmony import */ var _inspect_node_inspect_node_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inspect-node/inspect-node.component */ "./src/app/inspect-node/inspect-node.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _tree_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree.service */ "./src/app/tree.service.ts");
/* harmony import */ var _macro_macro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./macro/macro.component */ "./src/app/macro/macro.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _d3_tree_d3_tree_component__WEBPACK_IMPORTED_MODULE_9__["D3TreeComponent"],
                _inspect_node_inspect_node_component__WEBPACK_IMPORTED_MODULE_10__["InspectNodeComponent"],
                _macro_macro_component__WEBPACK_IMPORTED_MODULE_13__["MacroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
            ],
            providers: [_tree_service__WEBPACK_IMPORTED_MODULE_12__["TreeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/d3-tree/d3-tree.component.css":
/*!***********************************************!*\
  !*** ./src/app/d3-tree/d3-tree.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d3-chart {\n    width: 100%;\n    min-height:600px;\n  }\n  .node circle {\n    fill: #fff;\n    stroke: steelblue;\n    stroke-width: 0.2px;\n  }\n  .node text {\n    font: 10px sans-serif;\n  }\n  .link {\n    fill: none;\n    stroke: #ccc;\n    stroke-width: 0.5px;\n  }\n  .active {\n    stroke-width: 1px !important;\n  }\n  .selected text{\n    stroke-width: 2px !important;\n    fill: #0f0;\n  }\n  .ghostCircle.show{\n      display:block;\n  }\n  .ghostCircle.over{\n    fill: green !important;\n    stroke: steelblue;\n    stroke-width: 0.2px;\n  }\n  .ghostCircle, .active .ghostCircle{\n       display: none;\n  }\n  .templink {\n    fill: none;\n    stroke: red;\n    stroke-width: 3px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZDMtdHJlZS9kMy10cmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaO0VBRUE7TUFDSSxhQUFhO0VBQ2pCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjtFQUVBO09BQ0ssYUFBYTtFQUNsQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kMy10cmVlL2QzLXRyZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kMy1jaGFydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDo2MDBweDtcbiAgfVxuICAubm9kZSBjaXJjbGUge1xuICAgIGZpbGw6ICNmZmY7XG4gICAgc3Ryb2tlOiBzdGVlbGJsdWU7XG4gICAgc3Ryb2tlLXdpZHRoOiAwLjJweDtcbiAgfVxuICBcbiAgLm5vZGUgdGV4dCB7XG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAubGluayB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICNjY2M7XG4gICAgc3Ryb2tlLXdpZHRoOiAwLjVweDtcbiAgfVxuICBcbiAgLmFjdGl2ZSB7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VsZWN0ZWQgdGV4dHtcbiAgICBzdHJva2Utd2lkdGg6IDJweCAhaW1wb3J0YW50O1xuICAgIGZpbGw6ICMwZjA7XG4gIH1cbiAgXG4gIC5naG9zdENpcmNsZS5zaG93e1xuICAgICAgZGlzcGxheTpibG9jaztcbiAgfVxuICAuZ2hvc3RDaXJjbGUub3ZlcntcbiAgICBmaWxsOiBncmVlbiAhaW1wb3J0YW50O1xuICAgIHN0cm9rZTogc3RlZWxibHVlO1xuICAgIHN0cm9rZS13aWR0aDogMC4ycHg7XG4gIH1cbiAgXG4gIC5naG9zdENpcmNsZSwgLmFjdGl2ZSAuZ2hvc3RDaXJjbGV7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAudGVtcGxpbmsge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiByZWQ7XG4gICAgc3Ryb2tlLXdpZHRoOiAzcHg7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/d3-tree/d3-tree.component.ts":
/*!**********************************************!*\
  !*** ./src/app/d3-tree/d3-tree.component.ts ***!
  \**********************************************/
/*! exports provided: D3TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3TreeComponent", function() { return D3TreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tree_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree.model */ "./src/app/d3-tree/tree.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _tree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tree.service */ "./src/app/tree.service.ts");





var D3TreeComponent = /** @class */ (function () {
    function D3TreeComponent(ts) {
        var _this = this;
        this.ts = ts;
        this.expandNode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inspectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.treeModel = new _tree_model__WEBPACK_IMPORTED_MODULE_2__["TreeModel"]();
        this.expandTreeListener(function (d) { return _this.ts.expandNode(d); });
        this.inspectNodeListener(function (d) { return _this.ts.inspectNode(d); });
    }
    D3TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.getTree$().subscribe(function (t) {
            _this.treeModel.createTreeData(t);
            if (_this.treeData == null) {
                var element = _this.chartContainer.nativeElement;
                element.innerHTML = '';
                _this.treeModel.addSvgToContainer(_this.chartContainer);
                _this.treeModel.createLayout();
                _this.treeModel.update();
            }
            _this.treeModel.update();
            _this.treeModel.setInspectedNode();
            _this.treeData = t;
        });
    };
    D3TreeComponent.prototype.expandTreeListener = function (callable) {
        this.treeModel.expandTreeEvent = callable;
    };
    D3TreeComponent.prototype.inspectNodeListener = function (callable) {
        this.treeModel.inspectNodeEvent = callable;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], D3TreeComponent.prototype, "chartContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], D3TreeComponent.prototype, "tree$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], D3TreeComponent.prototype, "expandNode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], D3TreeComponent.prototype, "inspectNode", void 0);
    D3TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-d3-tree',
            template: "<div class=\"d3-chart\" #chart></div>",
            styles: [__webpack_require__(/*! ./d3-tree.component.css */ "./src/app/d3-tree/d3-tree.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tree_service__WEBPACK_IMPORTED_MODULE_4__["TreeService"]])
    ], D3TreeComponent);
    return D3TreeComponent;
}());



/***/ }),

/***/ "./src/app/d3-tree/tree.model.ts":
/*!***************************************!*\
  !*** ./src/app/d3-tree/tree.model.ts ***!
  \***************************************/
/*! exports provided: TreeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeModel", function() { return TreeModel; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var TreeModel = /** @class */ (function () {
    function TreeModel() {
        this.margin = { top: 200, bottom: 90, left: 100, right: 90 };
        this.nodeRadius = 14;
        this.columnWidth = 80;
        this.columnFontScale = 1;
        this.mouseDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    TreeModel.prototype.addSvgToContainer = function (chartContainer) {
        this.element = chartContainer.nativeElement;
        this.width = this.element.offsetWidth - this.margin.left - this.margin.right;
        this.height = this.element.offsetHeight - this.margin.top - this.margin.bottom;
        this.svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this.element).append('svg')
            .attr('width', this.element.offsetWidth)
            .attr('height', this.element.offsetHeight)
            .append('g')
            .attr('transform', 'translate('
            + this.margin.left + ',' + this.margin.top + ')');
        this.setZoomBehaviour();
    };
    TreeModel.prototype.setZoomBehaviour = function () {
        var zoom = d3__WEBPACK_IMPORTED_MODULE_0__["zoom"]()
            .on('zoom', zoomed);
        var svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('svg');
        var t = d3__WEBPACK_IMPORTED_MODULE_0__["zoomIdentity"].translate(this.margin.left, this.margin.top);
        svg.call(zoom.transform, t);
        svg.call(zoom);
        function zoomed() {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g').attr('transform', d3__WEBPACK_IMPORTED_MODULE_0__["event"].transform);
            var columnFontScale = this.__zoom.k < 1 ? 1 / this.__zoom.k : 1;
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('text.column').style('font-size', 15 * columnFontScale);
        }
    };
    TreeModel.prototype.createLayout = function () {
        this.treeLayout = d3__WEBPACK_IMPORTED_MODULE_0__["tree"]()
            .size([this.height, this.width])
            .nodeSize([2, 2])
            .separation(function (a, b) { return a.parent === b.parent ? 20 : 40; });
    };
    TreeModel.prototype.createTreeData = function (treeData) {
        this.root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](treeData);
        this.root.x0 = this.height / 2;
        this.root.y0 = 0;
    };
    TreeModel.prototype.update = function () {
        var prevTreeData = this.treeData;
        this.treeData = this.treeLayout(this.root);
        this.setColumns(this.treeData);
        this.setNodes(this.treeData);
        this.setLinks(this.treeData);
        this.setNodes(this.treeData);
    };
    TreeModel.prototype.setColumns = function (treeData) {
        this.svg.selectAll('text.column').remove();
        var nodes = treeData.descendants();
        var depth = 0;
        var top = 0;
        nodes.forEach(function (n) {
            depth = Math.max(n.depth, depth);
            top = Math.min(n.x, top);
        });
        for (var i = 0; i <= depth; i++) {
            this.svg.append('text')
                .attr('class', 'column')
                .attr('y', top - 30)
                .attr('x', i * this.columnWidth)
                .text(String(i + 2))
                .style('font-size', 15 * this.columnFontScale);
        }
    };
    TreeModel.prototype.setNodes = function (treeData) {
        var _this = this;
        var nodes = treeData.descendants();
        var treeModel = this;
        nodes.forEach(function (d, i) {
            d.y = d.depth * _this.columnWidth;
            d.data.id = i;
        });
        var node = this.svg.selectAll('g.node')
            .data(nodes, function (d) { return d.id; });
        var nodeEnter = node.enter().append('g')
            .attr('class', 'node');
        nodeEnter.append('text')
            .attr('dx', -19)
            .attr('dy', 5)
            .attr('text-anchor', 'end')
            .text(function (d) { return d.data.name; });
        nodeEnter.append('circle')
            .attr('r', this.nodeRadius)
            .style('fill', '#4c516d')
            .attr('class', function (d) { return 'circle' + d.data.id; });
        nodeEnter.merge(node)
            .attr('transform', function (d) { return 'translate(' + d.y + ',' + d.x + ')'; });
        node.exit().remove();
        // Color inspected node
        if (this.nodeInspected != null) {
            d3__WEBPACK_IMPORTED_MODULE_0__["select"]('circle.circle' + this.nodeInspected.id)
                .style('fill', '#d9534f')
                .attr('r', this.nodeRadius);
        }
        var holdStart = function (d) {
            _this.mouseDown$.next(true);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(22)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.mouseDown$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(80))
                .subscribe(function (t) {
                if (t === 10) {
                    _this.iNode = d;
                    _this.setInspectedNode();
                }
                else {
                    d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('circle.circle' + d.data.id)
                        .attr('r', _this.nodeRadius + t * 2);
                }
            }, null, function () {
                d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('circle')
                    .attr('r', _this.nodeRadius);
            });
        };
        var holdEnd = function (d) {
            if (_this.nodeInspected != null && _this.nodeInspected.mouseDown === true) {
                _this.mouseDown$.next(false);
                _this.nodeInspected.mouseDown = false;
                treeModel.update();
                return;
            }
            _this.mouseDown$.next(false);
            if (d.children) {
                d._children = d.children;
                d.children = null;
            }
            else if (d._children) {
                d.children = d._children;
                d._children = null;
            }
            else {
                _this.expandTreeEvent(d);
            }
            treeModel.update();
            d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('circle')
                .attr('r', _this.nodeRadius);
        };
        nodeEnter
            .on('contextmenu', function () { return d3__WEBPACK_IMPORTED_MODULE_0__["event"].preventDefault(); })
            .on('mousedown', holdStart)
            .on('touchstart', holdStart)
            .on('click', holdEnd);
    };
    TreeModel.prototype.setLinks = function (treeData) {
        // adds the links between the nodes
        this.svg.selectAll('line').remove();
        this.svg.selectAll('path.link')
            .data(treeData.descendants().slice(1))
            .enter().append('line')
            .attr('x1', function (d) { return d.y; })
            .attr('x2', function (d) { return d.parent.y; })
            .attr('y1', function (d) { return d.x; })
            .attr('y2', function (d) { return d.parent.x; })
            .attr('stroke-width', 1)
            .attr('stroke', 'grey');
    };
    TreeModel.prototype.setInspectedNode = function (path) {
        // initialize inspected node to root
        if (this.iNode == null) {
            this.iNode = this.treeData.descendants()[0];
        }
        // Callback node inspected
        this.inspectNodeEvent(this.iNode);
        d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('circle')
            .style('fill', '#4c516d');
        d3__WEBPACK_IMPORTED_MODULE_0__["select"]('circle.circle' + this.iNode.data.id)
            .style('fill', '#d9534f')
            .attr('r', this.nodeRadius);
        this.nodeInspected = { mouseDown: true, id: this.iNode.data.id };
        this.mouseDown$.next(false);
    };
    // events
    TreeModel.prototype.expandTreeEvent = function (node) { };
    TreeModel.prototype.inspectNodeEvent = function (node) { };
    return TreeModel;
}());



/***/ }),

/***/ "./src/app/exclusionTree.ts":
/*!**********************************!*\
  !*** ./src/app/exclusionTree.ts ***!
  \**********************************/
/*! exports provided: ExclusionTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclusionTree", function() { return ExclusionTree; });
var ExclusionTree = /** @class */ (function () {
    function ExclusionTree() {
        this.root = { name: '11', children: [{ name: '000', children: null }, { name: '101', children: null }] };
    }
    ExclusionTree.prototype.expandTree = function (d3Node) {
        var exclusions = this.getExclusions(d3Node);
        // find node to expand
        var n = this.root;
        for (var _i = 0, _a = exclusions.slice(1); _i < _a.length; _i++) {
            var e = _a[_i];
            if (n.children[0].name === e) {
                n = n.children[0];
            }
            else if (n.children[1].name === e) {
                n = n.children[1];
            }
        }
        // get children of d3Node
        var cNames = this.findExclusionChildren(exclusions);
        var len = n.name.length;
        // place in filler nodes between exclusions
        while (len < cNames[0].length - 1) {
            n.children = [{ name: '', children: null }];
            n = n.children[0];
            len++;
        }
        n.children = [{ name: cNames[0], children: null }, { name: cNames[1], children: null }];
    };
    ExclusionTree.prototype.getExclusions = function (n) {
        if (n == null) {
            return [];
        }
        var e = this.getExclusions(n.parent);
        e.push(n.data.name);
        return e;
    };
    // Finds the next larges pair of palindrome
    // such that all palindrome in exclusions
    // are not subwords in either palindromes in the pair
    ExclusionTree.prototype.findExclusionChildren = function (exclusions) {
        var pallens = ['', '0', '1'];
        var children = null;
        var excIdx = 0;
        while (children === null) {
            for (var i = 0; i < pallens.length; i++) {
                // pop the smallest element of p
                var p = pallens.shift();
                var valid0p0 = true;
                var valid1p1 = true;
                // get index of exclusions such that all subsequent are smaller than p
                while (excIdx < exclusions.length && p.length >= exclusions[excIdx].length - 2) {
                    excIdx++;
                }
                // test 0p0 and 1p1 with all exclusions smaller than 0p0 and 1p1
                for (var j = 0; j < excIdx; j++) {
                    // check the right of 0p0 and see if equal to exclusions[j]
                    if (('0' + p + '0').slice(-exclusions[j].length) === exclusions[j]) {
                        valid0p0 = false;
                    }
                    // check the right of 1p1and see if equal to exclusions[j]
                    if (('1' + p + '1').slice(-exclusions[j].length) === exclusions[j]) {
                        valid1p1 = false;
                    }
                }
                if (valid0p0 && valid1p1 && exclusions[exclusions.length - 1].length < p.length + 2) {
                    children = ['0' + p + '0', '1' + p + '1'];
                    break;
                }
                else if (valid0p0 && valid1p1) {
                    pallens.push('0' + p + '0');
                    pallens.push('1' + p + '1');
                }
                else if (valid0p0) {
                    pallens.push('0' + p + '0');
                }
                else if (valid1p1) {
                    pallens.push('1' + p + '1');
                }
            }
        }
        return children;
    };
    return ExclusionTree;
}());



/***/ }),

/***/ "./src/app/inspect-node/inspect-node.component.css":
/*!*********************************************************!*\
  !*** ./src/app/inspect-node/inspect-node.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    max-height: 80vh;\n    overflow: auto;\n}\n\nul {\n    padding: 0;\n    list-style-type: none;\n}\n\n.row {\n    display: flex;\n    flex-direction: row\n}\n\n.square {\n    width: 20px;\n    height: 20px;\n    border: 1px solid black;\n    margin: 1px 1px 1px 1px;\n    text-align: center\n}\n\n.fill0 {\n    color: black;\n    background-color: white;\n}\n\n.fill1 {\n    color: white;\n    background-color: black\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zcGVjdC1ub2RlL2luc3BlY3Qtbm9kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkI7QUFDSjs7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxZQUFZO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2luc3BlY3Qtbm9kZS9pbnNwZWN0LW5vZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvd1xufVxuLnNxdWFyZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbjogMXB4IDFweCAxcHggMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuLmZpbGwwIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZmlsbDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/inspect-node/inspect-node.component.html":
/*!**********************************************************!*\
  !*** ./src/app/inspect-node/inspect-node.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"exclusions.length > 0\" class=\"container\">\n  <h3>\n    Exclusions\n  </h3>\n  <ul>\n    <li *ngFor=\"let e of exclusions\" class=\"row\">\n      <div *ngFor=\"let c of e.split('')\" [ngClass]=\"['fill' + c, 'square']\">\n        {{c}}\n      </div>\n    </li>\n  </ul>\n</div>\n<div *ngIf=\"wordList.length > 0\">\n  <h3>\n    Word List\n  </h3>\n  <ul class=\"container\">\n    <li *ngFor=\"let word of wordList\" class=\"row\">\n      <div *ngFor=\"let c of word.split('')\" [ngClass]=\"['fill' + c, 'square']\">\n        {{c}}\n      </div>\n    </li>\n  </ul>\n</div>\n\n<app-macro *ngIf=\"wordList.length\"></app-macro>\n"

/***/ }),

/***/ "./src/app/inspect-node/inspect-node.component.ts":
/*!********************************************************!*\
  !*** ./src/app/inspect-node/inspect-node.component.ts ***!
  \********************************************************/
/*! exports provided: InspectNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectNodeComponent", function() { return InspectNodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tree_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tree.service */ "./src/app/tree.service.ts");



var InspectNodeComponent = /** @class */ (function () {
    function InspectNodeComponent(ts) {
        this.ts = ts;
        this.exclusions = [];
        this.wordList = [];
    }
    InspectNodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.getNode$().subscribe(function (n) {
            _this.exclusions = _this.ts.exTree.getExclusions(n);
            _this.wordLen = n.depth + 2;
            _this.wordList = [];
            _this.makeWordList();
        });
    };
    InspectNodeComponent.prototype.makeWordList = function () {
        var words = ['0', '1'];
        var excIdx = 0;
        while (words.length >= 1) {
            for (var i = 0; i < words.length; i++) {
                // pop the smallest element of words
                var w = words.shift();
                // get index of exclusions such that all subsequent are smaller than p
                while (excIdx < this.exclusions.length && w.length >= this.exclusions[excIdx].length - 1) {
                    excIdx++;
                }
                var validW0 = true;
                var validW1 = true;
                // test 0p0 and 1p1 with all exclusions smaller than 0p0 and 1p1
                for (var j = 0; j < excIdx; j++) {
                    // check the right of 0p0 and see if equal to exclusions[j]
                    if ((w + '0').slice(-this.exclusions[j].length) === this.exclusions[j]) {
                        validW0 = false;
                    }
                    // check the right of 1p1and see if equal to exclusions[j]
                    if ((w + '1').slice(-this.exclusions[j].length) === this.exclusions[j]) {
                        validW1 = false;
                    }
                }
                if (validW0 && w.length + 1 === this.wordLen) {
                    this.wordList.push(w + '0');
                }
                if (validW1 && w.length + 1 === this.wordLen) {
                    this.wordList.push(w + '1');
                }
                if (validW0 && w.length + 1 < this.wordLen) {
                    words.push(w + '0');
                }
                if (validW1 && w.length + 1 < this.wordLen) {
                    words.push(w + '1');
                }
            }
        }
    };
    InspectNodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inspect-node',
            template: __webpack_require__(/*! ./inspect-node.component.html */ "./src/app/inspect-node/inspect-node.component.html"),
            styles: [__webpack_require__(/*! ./inspect-node.component.css */ "./src/app/inspect-node/inspect-node.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tree_service__WEBPACK_IMPORTED_MODULE_2__["TreeService"]])
    ], InspectNodeComponent);
    return InspectNodeComponent;
}());



/***/ }),

/***/ "./src/app/macro/macro.component.css":
/*!*******************************************!*\
  !*** ./src/app/macro/macro.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circ {\n    margin-left: 5px;\n}\n.circle {\n    margin-left: 5px;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    text-align: center;\n    color: black;\n}\n.macro-P {\n    background-color:#b967ff;\n}\n.macro-L {\n    background-color:#ee4035;\n}\n.macro-l {\n    background-color:#f37736;\n}\n.macro-R {\n    background-color:#fdfe02;\n}\n.macro-r {\n    background-color:#7bc043;\n}\n.macro-disp {\n    margin: 10px 0 10px 0;\n}\n.macro-cmd {\n    background-color: white;\n    margin: 0 0 0 10px;\n}\n.row {\n    display: flex;\n    flex-direction: row\n}\n.execute {\n    margin: 0 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFjcm8vbWFjcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbWFjcm8vbWFjcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY2lyYyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jaXJjbGUge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLm1hY3JvLVAge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2I5NjdmZjtcbn1cbi5tYWNyby1MIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZTQwMzU7XG59XG4ubWFjcm8tbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjM3NzM2O1xufVxuLm1hY3JvLVIge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkZmUwMjtcbn1cbi5tYWNyby1yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM3YmMwNDM7XG59XG4ubWFjcm8tZGlzcCB7XG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xufVxuXG4ubWFjcm8tY21kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvd1xufVxuXG4uZXhlY3V0ZSB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/macro/macro.component.html":
/*!********************************************!*\
  !*** ./src/app/macro/macro.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>\n    Node Traversal Macro\n  </h3>\n  <div>\n    <div *ngIf=\"macro.length\" class=\"execute\">\n      Execute: \n      <button mat-raised-button color=\"accent\" class=\"macro-cmd\" >\n        BACK\n      </button>\n      <button mat-raised-button color=\"accent\" class=\"macro-cmd\" >\n        NEXT\n      </button>\n    </div>\n    <div *ngIf=\"macro.length\" class=\"macro-disp row\">\n      My Macro:\n      <div *ngFor=\"let m of macro.split('')\" [ngClass]=\"['macro-'+m, 'circle']\">\n        {{m}}\n      </div>\n    </div>\n    <div>\n      <button mat-mini-fab class=\"macro-P btn-circ\" (click)=\"macroStringAdd('P')\">\n        P\n      </button>\n      <button mat-mini-fab class=\"macro-L btn-circ\" (click)=\"macroStringAdd('L')\">\n        L\n      </button>\n      <button mat-mini-fab class=\"macro-l btn-circ\" (click)=\"macroStringAdd('l')\">\n        l\n      </button>\n      <button mat-mini-fab class=\"macro-R btn-circ\" (click)=\"macroStringAdd('R')\">\n        R\n      </button>\n      <button mat-mini-fab class=\"macro-r btn-circ\" (click)=\"macroStringAdd('r')\">\n        r\n      </button>\n      <button mat-mini-fab class=\"btn-circ\" (click)=\"macroStringBack()\"><mat-icon svgIcon=\"back\"></mat-icon></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/macro/macro.component.ts":
/*!******************************************!*\
  !*** ./src/app/macro/macro.component.ts ***!
  \******************************************/
/*! exports provided: MacroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MacroComponent", function() { return MacroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tree_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tree.service */ "./src/app/tree.service.ts");





var MacroComponent = /** @class */ (function () {
    function MacroComponent(ts, iconRegistry, sanitizer) {
        this.ts = ts;
        this.macro = '';
        iconRegistry.addSvgIcon('back', sanitizer.bypassSecurityTrustResourceUrl('assets/back.svg'));
        iconRegistry.addSvgIcon('next', sanitizer.bypassSecurityTrustResourceUrl('assets/next.svg'));
    }
    MacroComponent.prototype.macroStringAdd = function (char) {
        this.macro += char;
    };
    MacroComponent.prototype.macroStringBack = function () {
        this.macro = this.macro.slice(0, this.macro.length - 1);
    };
    MacroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-macro',
            template: __webpack_require__(/*! ./macro.component.html */ "./src/app/macro/macro.component.html"),
            styles: [__webpack_require__(/*! ./macro.component.css */ "./src/app/macro/macro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tree_service__WEBPACK_IMPORTED_MODULE_4__["TreeService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], MacroComponent);
    return MacroComponent;
}());



/***/ }),

/***/ "./src/app/tree.service.ts":
/*!*********************************!*\
  !*** ./src/app/tree.service.ts ***!
  \*********************************/
/*! exports provided: TreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeService", function() { return TreeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _exclusionTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exclusionTree */ "./src/app/exclusionTree.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var TreeService = /** @class */ (function () {
    function TreeService() {
        this.exTree = new _exclusionTree__WEBPACK_IMPORTED_MODULE_2__["ExclusionTree"]();
        this.treeSubj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.exTree.root);
        this.iNodeSubj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    TreeService.prototype.expandNode = function (d3node) {
        if (d3node.data.children == null) {
            this.exTree.expandTree(d3node);
            this.treeSubj.next(this.exTree.root);
        }
    };
    TreeService.prototype.inspectNode = function (d3Node) {
        this.iNodeSubj.next(d3Node);
    };
    TreeService.prototype.getNode$ = function () {
        return this.iNodeSubj.asObservable();
    };
    TreeService.prototype.getTree$ = function () {
        return this.treeSubj.asObservable();
    };
    TreeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TreeService);
    return TreeService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/william/Documents/school/research/code/TreeModel/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map