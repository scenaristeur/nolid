(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba32a"],{"35d6":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-container",[e("b-input-group",{attrs:{size:"sm",prepend:"Endpoint"}},[e("b-form-input",{model:{value:t.endpoint,callback:function(n){t.endpoint=n},expression:"endpoint"}})],1),e("b-input-group",{attrs:{size:"sm",prepend:"Dataset"}},[e("b-form-input",{model:{value:t.dataset,callback:function(n){t.dataset=n},expression:"dataset"}})],1),e("b-button",{attrs:{variant:"outline-primary"},on:{click:t.load}},[t._v("Load")])],1)},o=[],i={name:"Source",data:function(){return{endpoint:"http://localhost:3030",dataset:"pizza"}},methods:{load:function(){var t=this.endpoint+"/"+this.dataset;console.log(t),this.$store.dispatch("endpointTest",t)}}},s=i,p=e("2877"),r=Object(p["a"])(s,a,o,!1,null,null,null);n["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0ba32a.f7a56b2b.js.map