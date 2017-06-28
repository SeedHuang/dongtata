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
最后输出的时间是`locationSet composite: 0.23193359375ms`;
并且这些时间是虽然计算复杂度和模块数量递增。

<img src="./imgs/modules2.png"/>

## module.js如何解决问题
```
Bdbdefine('TestModule', function moduleWrap(require){
    var a = require('A');
    var b = require('B');
    var result = {
        'name': 'HuangChunhua'
    };
    return result;
});
```
module.js的模块定义如上，requirejs的做法很像，但是又有所不同，在执行模块声明操作的时候，存储的结果并不是result，而是moduleWrap，只有通过,设置Bdbdefine的第二个参数，设置为true的时候，整个app才能开始运行。可以开脑洞的一点是，module.js支持分阶段执行。只有在Bdbdefine中执行require函数之后才能获得模块的最终实例。
```
Bdbdefine(function(require){
    var a = require('TestModule');
    alert(a.name);
}, true);
```
其中原理非常简单，执行函数声明是0.00Xms级别的，而执行函数则不可预计，所以可以dongtata的module.js可以比其他更快的执行就在于，他没有吧所有的模块里的逻辑都走一遍，只是执行了模块的函数声明而已。
<img src="./imgs/modules3.png"/>



## widget.js
> 小巧的view层

widget.js 的事件处理是借助于zepto的事件管理机制，住了这点外，widget本身所承载的代码和功能都非常简单（差一个jsx就变得高大尚）非常简单，或者说有些功能非常简陋，请尽量别使用zepto提供的其他功能，如`$('div > span')`,h5已经提供了足够好的`querySelector`与`querySelectorAll`，所以没有理由相信js的比原生功能还快是吧，就目前来说，zepto是widget最大的性能瓶颈。
但大家别灰心，widget仍然足够好到你可以使用他来完成view组建的操作。
要快，就要简单，直线永远是最近的，如果你硬要和我来谈“曲绕空间的话”，之后请私信我。
### 生命周期
复杂的生命周期是widget第一要避免的，我想声明的是reactjs的有很多声明钩子：
- 实例化：
    - getInitialState
    - componentWillMount
    - render
    - componentDidMount
- 更新
    - componentWillRecieveProps
    - shouldComponentUpdate
    - componentWillUpdate
    - render
    - componentDidUpdate
- 销毁
    - componentWillUnmount

但是实际上根据项目复杂程度来说，这些生命钩子并非都需要，举个简单的例子，一个简单的资讯页面

但是一个更加复杂的项目，比如视频网站，则更加需要一些生命周期的控制，所以复杂度这种东西都是由业务决定的，而底层组建是独立于业务的，所以写组建就应该简单。
