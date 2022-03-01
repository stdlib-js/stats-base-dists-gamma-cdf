<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Gamma][gamma-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [gamma][gamma-distribution] random variable is

<!-- <equation class="equation" label="eq:gamma_cdf" align="center" raw="F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}" alt="Cumulative distribution function for a Gamma distribution."> -->

<div class="equation" align="center" data-raw-text="F(x;\alpha,\beta) = \int_0^x f(u;\alpha,\beta)\,du= \frac{\gamma(\alpha, \beta x)}{\Gamma(\alpha)}" data-equation="eq:gamma_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gamma/cdf/docs/img/equation_gamma_cdf.svg" alt="Cumulative distribution function for a Gamma distribution.">
    <br>
</div>

<!-- </equation> -->

where `alpha` is the shape parameter and `beta` is the rate parameter of the distribution. `gamma` is the lower [incomplete gamma function][@stdlib/math/base/special/gammainc].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-gamma-cdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats-base-dists-gamma-cdf' );
```

#### cdf( x, alpha, beta )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = cdf( 2.0, 1.0, 1.0 );
// returns ~0.865

y = cdf( 2.0, 3.0, 1.0 );
// returns ~0.323

y = cdf( -1.0, 2.0, 2.0 );
// returns 0.0

y = cdf( -Infinity, 4.0, 2.0 );
// returns 0.0

y = cdf( +Infinity, 4.0, 2.0 );
// returns 1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0, 0.5 );
// returns NaN
```

If provided `alpha = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( 2.0, 0.0, 2.0 );
// returns 1.0

y = cdf( -2.0, 0.0, 2.0 );
// returns 0.0

y = cdf( 0.0, 0.0, 2.0 );
// returns 1.0
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.5, -1.0 );
// returns NaN
```

#### cdf.factory( alpha, beta )

Returns a function for evaluating the [cumulative distribution function][cdf] for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mycdf = cdf.factory( 0.5, 0.1 );

var y = mycdf( 12.0 );
// returns ~0.879

y = mycdf( 8.0 );
// returns ~0.794
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var cdf = require( '@stdlib/stats-base-dists-gamma-cdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 3.0;
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = cdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, F(x;α,β): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-gamma-cdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-gamma-cdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-gamma-cdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-gamma-cdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-gamma-cdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-gamma-cdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-gamma-cdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-gamma-cdf/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-gamma-cdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-gamma-cdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-gamma-cdf/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-gamma-cdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

[@stdlib/math/base/special/gammainc]: https://github.com/stdlib-js/math-base-special-gammainc

</section>

<!-- /.links -->
