/**
* Hello world 组件
* @file helloworld.js
* @author Seed Huang
*/
console.time('loading module Hello World');
define("HelloWorld", function(require){
    console.time('init HelloWorld');
    var Widget = require("Bd:Widget");
    var widgetObj = {
        'tagName': 'div',
        'className': 'helloworld',
        'id': 'helloworld',
        'create': function () {
            this.el.innerHTML = 'Hello World';
        }
    };
    var HelloWorldWidget = Widget.extend(widgetObj);
    console.timeEnd('init HelloWorld');
    return HelloWorldWidget;
});
console.timeEnd('loading module Hello World');
