Bdbdefine("Bd:Widget", {
    "extend": function(options) {
        function Widget(opts) {
            var self = this;
            for(var field in opts){
                self[field] = opts[field];
            }
            if (!self.tagName)
                throw "[Comment Widget Error] Need tagName";
            self.el = document.createElement(self.tagName);
            self.className && (self.el.className = self.className);
            self.id && (self.el.id = self.id);
            if (self.events) {
                var keys = Object.keys(self.events);
                var keylength = keys.length;
                var i=0;
                while(i < keylength){
                    var field = keys[i];
                    var parts = field.split(" ");
                    var eventname = "";
                    var selectors = [];
                    switch (parts.length) {
                        case 0:
                            break;
                        case 1:
                            (function($el, eName,  func, context){
                                $el.on(eName, function(event){
                                    func.call(context, event);
                                });
                            })(self.$el, parts[0], self.events[field], self);
                            break;
                        default:
                            var eventName = parts.shift();
                            var eventSelector = parts.join(" ");
                            (function($el, eName, selector, func, context){
                                $el.on(eName, selector, function(event){
                                    func.call(context, event);
                                });
                            })(self.$el, eventName, eventSelector, self.events[field], self);
                            break;
                    }
                    i++;
                }

            }
            if (!self.create) {
                throw "[Comment Widget Error] Need create function";
            }
            self.create();
        };
        Widget.prototype = options;
        return Widget;
    }
});
