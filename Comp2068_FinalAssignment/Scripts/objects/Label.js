/// <reference path="../constants.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
File: Label.ts
Author: Karan Sharma
Description: This class contains all the details to initialize the Label objects
Last Modified : March 19, 2015
*/
var objects;
(function (objects) {
    // LABEL Class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Label = (function (_super) {
        __extends(Label, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++
        function Label(x, y, labelText) {
            _super.call(this, labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
            this.x = x;
            this.y = y;
        }
        return Label;
    })(createjs.Text);
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map