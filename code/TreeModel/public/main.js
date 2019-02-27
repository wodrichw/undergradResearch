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

module.exports = "\n<div class=\"wrapper\">\n  <div style=\"text-align:center\">\n    <h1>\n      The Assemblers\n    </h1>\n    <h2>\n      Math Model\n    </h2>\n  </div>\n\n  <mat-card class=\"exclusionTreeCard\">\n    <mat-card-title>\n      Exclusion Tree\n    </mat-card-title>\n    <mat-card-content>\n      <app-d3-tree\n        on-hold=\"hold()\"\n        [(tree$)]=\"tree$\"\n        (expandNode)=\"expandNode($event)\"\n        (inspectNode)=\"inspectNode($event)\">\n      </app-d3-tree>\n    </mat-card-content>\n  </mat-card>\n\n  <mat-card>\n    <mat-card-title>\n      Node Details\n    </mat-card-title>\n    <mat-card-content>\n      <app-word-list\n        [(d3node)]=\"iNode$\"\n      ></app-word-list>\n    </mat-card-content>\n  </mat-card>\n</div>"

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
/* harmony import */ var _exclusionTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exclusionTree */ "./src/app/exclusionTree.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TreeModel';
        this.treeSubj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.iNodeSubj = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tree = new _exclusionTree__WEBPACK_IMPORTED_MODULE_2__["ExclusionTree"]();
        this.tree$ = this.treeSubj.asObservable();
        this.iNode$ = this.iNodeSubj.asObservable();
        // Delayed so that tree.root is passed correctly to d3-component
        setTimeout(function () { return _this.treeSubj.next(_this.tree.root); }, 0);
    };
    AppComponent.prototype.expandNode = function (d3node) {
        if (d3node.data.children == null) {
            this.tree.expandTree(d3node);
            this.treeSubj.next(this.tree.root);
        }
    };
    AppComponent.prototype.inspectNode = function (d3Node) {
        this.iNodeSubj.next(d3Node);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _d3_tree_d3_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./d3-tree/d3-tree.component */ "./src/app/d3-tree/d3-tree.component.ts");
/* harmony import */ var _word_list_word_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./word-list/word-list.component */ "./src/app/word-list/word-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _d3_tree_d3_tree_component__WEBPACK_IMPORTED_MODULE_6__["D3TreeComponent"],
                _word_list_word_list_component__WEBPACK_IMPORTED_MODULE_7__["WordListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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




var D3TreeComponent = /** @class */ (function () {
    function D3TreeComponent() {
        var _this = this;
        this.expandNode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inspectNode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.treeModel = new _tree_model__WEBPACK_IMPORTED_MODULE_2__["TreeModel"]();
        this.expandTreeListener(function (d) { return _this.expandNode.emit(d); });
        this.inspectNodeListener(function (d) { return _this.inspectNode.emit(d); });
    }
    D3TreeComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.tree$.subscribe(function (t) {
            _this.treeModel.createTreeData(t);
            if (_this.treeData == null) {
                var element = _this.chartContainer.nativeElement;
                element.innerHTML = '';
                _this.treeModel.addSvgToContainer(_this.chartContainer);
                _this.treeModel.createLayout();
            }
            _this.treeModel.update();
            _this.treeData = t;
        });
    };
    D3TreeComponent.prototype.expandTreeListener = function (callable) {
        this.treeModel.expandTree = callable;
    };
    D3TreeComponent.prototype.inspectNodeListener = function (callable) {
        this.treeModel.inspectNode = callable;
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
            // .translateExtent([[-500, -1000], [200000, 10000]])
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
        var zoom = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('g').property('transform').baseVal[1].matrix.a;
        var columnFontScale = zoom < 1 ? 1 / zoom : 1;
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
                .style('font-size', 15 * columnFontScale);
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
                    // Callback node inspected
                    _this.inspectNode(d);
                    d3__WEBPACK_IMPORTED_MODULE_0__["selectAll"]('circle')
                        .style('fill', '#4c516d');
                    d3__WEBPACK_IMPORTED_MODULE_0__["select"]('circle.circle' + d.data.id)
                        .style('fill', '#d9534f')
                        .attr('r', _this.nodeRadius);
                    _this.nodeInspected = { mouseDown: true, id: d.data.id };
                    _this.mouseDown$.next(false);
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
                _this.expandTree(d);
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
    TreeModel.prototype.click = function (d) {
    };
    // events
    TreeModel.prototype.expandTree = function (node) { };
    TreeModel.prototype.inspectNode = function (node) { };
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

/***/ "./src/app/word-list/word-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/word-list/word-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n    padding: 0;\n    list-style-type: none;\n}\n.row {\n    display: flex;\n    flex-direction: row\n}\n.square {\n    width: 20px;\n    height: 20px;\n    border: 1px solid black;\n    margin: 1px 1px 1px 1px;\n    text-align: center\n}\n.fill0 {\n    color: black;\n    background-color: white;\n}\n.fill1 {\n    color: white;\n    background-color: black\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZC1saXN0L3dvcmQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QjtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3dvcmQtbGlzdC93b3JkLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvd1xufVxuLnNxdWFyZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbjogMXB4IDFweCAxcHggMXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuLmZpbGwwIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uZmlsbDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFja1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/word-list/word-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/word-list/word-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"exclusions.length > 0\">\n  <h3>\n    Exclusions\n  </h3>\n  <ul>\n    <li *ngFor=\"let e of exclusions\" class=\"row\">\n      <div *ngFor=\"let c of e.split('')\" [ngClass]=\"['fill' + c, 'square']\">\n        {{c}}\n      </div>\n    </li>\n  </ul>\n</div>\n<div *ngIf=\"wordList.length > 0\">\n  <h3>\n    Word List\n  </h3>\n  <ul >\n    <li *ngFor=\"let word of wordList\" class=\"row\">\n      <div *ngFor=\"let c of word.split('')\" [ngClass]=\"['fill' + c, 'square']\">\n        {{c}}\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/word-list/word-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/word-list/word-list.component.ts ***!
  \**************************************************/
/*! exports provided: WordListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordListComponent", function() { return WordListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _exclusionTree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exclusionTree */ "./src/app/exclusionTree.ts");




var WordListComponent = /** @class */ (function () {
    function WordListComponent() {
        this.et = new _exclusionTree__WEBPACK_IMPORTED_MODULE_3__["ExclusionTree"]();
        this.exclusions = [];
        this.wordList = [];
    }
    WordListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.d3node.subscribe(function (n) {
            console.log(n);
            _this.exclusions = _this.et.getExclusions(n);
            _this.wordLen = n.depth + 2;
            _this.wordList = [];
            _this.makeWordList();
        });
    };
    WordListComponent.prototype.makeWordList = function () {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], WordListComponent.prototype, "d3node", void 0);
    WordListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-word-list',
            template: __webpack_require__(/*! ./word-list.component.html */ "./src/app/word-list/word-list.component.html"),
            styles: [__webpack_require__(/*! ./word-list.component.css */ "./src/app/word-list/word-list.component.css")]
        })
    ], WordListComponent);
    return WordListComponent;
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