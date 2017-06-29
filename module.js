(function(){
    !window.Bdbrowser && (window.Bdbrowser = {});
    var moduleSet = {};
    var notinitSet = {};
    function define(key,module,isRun){
        if(notinitSet[key]){
            throw "[widget define error] "+key+" has alrealy been named";
        }
        notinitSet[key] = module;
        if(isRun){
            moduleSet[key] = notinitSet[key](require);
        }
    }

    function require(key){
        if(moduleSet[key]){
            return moduleSet[key];
        }
        else{
            if(!notinitSet[key]){
                throw "You haven't a module called "+key;
            }

            if(notinitSet[key].call){
                moduleSet[key] = notinitSet[key](require);
            }
            else{
                moduleSet[key] = notinitSet[key];
            }
            return moduleSet[key];
        }
    }
    window.define = define;
    Bdbrowser.define = define;
    Bdbrowser.require = require;
})();
