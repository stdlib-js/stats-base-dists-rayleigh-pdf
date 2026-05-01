"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var q=i(function(j,o){
var a=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-exp/dist'),v=require('@stdlib/math-base-special-pow/dist'),f=require('@stdlib/constants-float64-pinf/dist');function F(r,e){var t,u;return a(r)||a(e)||e<0?NaN:e===0?r===0?f:0:r<0||r===f?0:(u=v(e,2),t=1/u,t*r*d(-v(r,2)/(2*u)))}o.exports=F
});var N=i(function(k,p){
var w=require('@stdlib/utils-constant-function/dist'),I=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,c=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-exp/dist'),s=require('@stdlib/math-base-special-pow/dist'),l=require('@stdlib/constants-float64-pinf/dist');function O(r){var e,t;if(c(r)||r<0)return w(NaN);if(r===0)return I(0);return t=s(r,2),e=1/t,u;function u(n){return c(n)?NaN:n<0||n===l?0:e*n*P(-s(n,2)/(2*t))}}p.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=q(),b=N();R(y,"factory",b);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
