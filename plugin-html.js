"use strict";var defaultparams={renderedTag:"div",featureTagName:"feature",tagAttributeName:"tag",nameAttributeName:"name",variantAttributeName:"variant",dataAttributeName:"data",displayAttributeName:"display",defaultDisplay:"block"};function parseDataAttribute(a){try{return JSON.parse(a)}catch(t){return isNaN(parseFloat(a))?a:parseFloat(a)}}function htmlplugin(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};function n(t,a){var e=t.getAttribute(i.tagAttributeName)||i.renderedTag,r=Array.from(t.attributes),n="";r.forEach(function(t){n+=" ".concat(t.nodeName,'="').concat(t.nodeValue.replace(/"/g,"&quot;"),'"')});a=a?t.getAttribute(i.displayAttributeName)||i.defaultDisplay:"none";t.outerHTML="<".concat(e,'  style="display:').concat(a,'" _feature="true" ').concat(n,">").concat(t.innerHTML,"</").concat(e,">")}return i=Object.assign({},defaultparams,i),function(r){return window.document.querySelectorAll(i.featureTagName).forEach(function(t){n(t,!1)}),r.on("visibilityrule",function(e){var t="[_feature][".concat(i.nameAttributeName,'="').concat(e.name,'"]');e.variant&&(t+="[".concat(i.variantAttributeName,'="').concat(e.variant,'"]')),document.querySelectorAll(t).forEach(function(t){var a=parseDataAttribute(t.getAttribute(i.dataAttributeName));n(t,r.isVisible(e.name,e.variant,a))})}),{name:"htmlplugin"}}}"undefined"!=typeof window&&(window.htmlplugin=htmlplugin),"undefined"!=typeof module&&(module.exports=htmlplugin);