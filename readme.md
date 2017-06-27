# dongtata.js

dongtata名字起源于《海贼王》的咚塔塔小人组，寓意小而强大，主要提供的功能是模块管理和view编写，dongtata目前还依赖与zepto的Promise，Ajax，event功能，之后会实现该功能并且移除zepto；

## module.js
> 高效的模块管理

目前使用cmd，amd的模式都会遇到一个问题，初始运行时模块引用链很长以及需要执行一遍所有模块声明，造成主入口执行滞后
dongtata的module.js就是来解决这个两个问题：

### 模块引用链很长
模块之间相互依赖，导致import一个js，之后相应的引用都需要被加载一遍，AMD和CMD都会存在此问题；
CMD引用一个模块的时候，通常这样写：
```
// es5
var module1 = require('Module1');
var moduel2 = require('Module2');

// es6
import module3 from 'Module3';
import module4 from 'Module4';
```

es5 `require` 方式可以不在顶部开始加载
es6 `import` 只能放在顶部位置
但一般方式都是写在顶部，这样就会造成十分严重的引用链过长的问题


### 主入口执行滞后
通俗的来说就是：从开始加载js到运行到主入口时间过长，AMD因为只加载要运行的部分，所以就`执行所有模块声明，获得模块实例`此项问题没有CMD严重，但是依然存在问题；
所有的模块在真正运行到主函数之前都会执行声明获得export的实例，所以模块越多，执行时间越长。如果在声明部分执行一些耗时的逻辑，这样这个模块获得模块实例的时间更长，看一下以下的例子：
```
var chineseName = ['上海', '北京', '广州', '南京', '苏州'];
var enNames = ['ShangHai', 'BeiJin', 'GuangZhou', 'NanJin', 'SuZhou'];
var locationSet = {};
console.time("locationSet composite");
for (var i=0; i < enNames.length; i++) {
    locationSet[enNames[i]] = {
        'enName': enNames[i],
        'cnName': chineseName[i]
    }
}
console.timeEnd("locationSet composite");
module.exports = locationSet;
```


<img src="./imgs/modules2.png"/>


## widget.js
> 小巧的view层
