"use strict";module.exports=function(){return function(e,n){return n.document.querySelectorAll("feature").forEach(function(e){e.style.display="none"}),e.on("visibilityrule",function(n){var e='feature[name="'+n.name+'"]';n.variant&&(e+='[variant="'+n.variant+'"]'),document.querySelectorAll(e).forEach(function(e){e.style.display=n.result?"block":none})}),{name:"htmlplugin"}}};