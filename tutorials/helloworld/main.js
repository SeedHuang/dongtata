/**
* Hello World的主要入口
* @file main.js
* @author Seed Huang
*/
define("Main", function(require){
    console.timeEnd("time to main");
    console.time("time to display hello world");
    var HelloWorld = require("HelloWorld");
    var helloWorld = new HelloWorld();
    document.body.appendChild(helloWorld.el);
    console.timeEnd("time to display hello world");
}, true);
