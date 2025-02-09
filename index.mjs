// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammainc@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import{factory as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-cdf@v0.2.2-esm/index.mjs";function d(t,i,r){return e(t)||e(i)||e(r)||i<0||r<=0?NaN:0===i?t<0?0:1:t<=0?0:t===n?1:s(t*r,i)}function m(t,d){return e(t)||e(d)||t<0||d<=0?i(NaN):0===t?r(0):function(e){if(e<=0)return 0;if(e===n)return 1;return s(e*d,t)}}t(d,"factory",m);export{d as default,m as factory};
//# sourceMappingURL=index.mjs.map
