"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=t(function(j,f){
var v=require('@stdlib/math-base-special-gammainc/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),N=require('@stdlib/constants-float64-pinf/dist');function m(e,r,i){return u(e)||u(r)||u(i)||r<0||i<=0?NaN:r===0?e<0?0:1:e<=0?0:e===N?1:v(e*i,r)}f.exports=m
});var a=t(function(k,o){
var y=require('@stdlib/utils-constant-function/dist'),d=require('@stdlib/stats-base-dists-degenerate-cdf/dist').factory,g=require('@stdlib/math-base-special-gammainc/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/constants-float64-pinf/dist');function I(e,r){if(s(e)||s(r)||e<0||r<=0)return y(NaN);if(e===0)return d(0);return i;function i(n){return n<=0?0:n===F?1:g(n*r,e)}}o.exports=I
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),O=a();P(q,"factory",O);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
