(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [16],
  {
    /***/ "./node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js ***!
  \**********************************************************************/
      /*! exports provided: conf, language */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    brackets: [],\n    autoClosingPairs: [],\n    surroundingPairs: []\n};\nvar language = {\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    // defaultToken: 'invalid',\n    keywords: [],\n    typeKeywords: [],\n    tokenPostfix: '.csp',\n    operators: [],\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    tokenizer: {\n        root: [\n            [/child-src/, 'string.quote'],\n            [/connect-src/, 'string.quote'],\n            [/default-src/, 'string.quote'],\n            [/font-src/, 'string.quote'],\n            [/frame-src/, 'string.quote'],\n            [/img-src/, 'string.quote'],\n            [/manifest-src/, 'string.quote'],\n            [/media-src/, 'string.quote'],\n            [/object-src/, 'string.quote'],\n            [/script-src/, 'string.quote'],\n            [/style-src/, 'string.quote'],\n            [/worker-src/, 'string.quote'],\n            [/base-uri/, 'string.quote'],\n            [/plugin-types/, 'string.quote'],\n            [/sandbox/, 'string.quote'],\n            [/disown-opener/, 'string.quote'],\n            [/form-action/, 'string.quote'],\n            [/frame-ancestors/, 'string.quote'],\n            [/report-uri/, 'string.quote'],\n            [/report-to/, 'string.quote'],\n            [/upgrade-insecure-requests/, 'string.quote'],\n            [/block-all-mixed-content/, 'string.quote'],\n            [/require-sri-for/, 'string.quote'],\n            [/reflected-xss/, 'string.quote'],\n            [/referrer/, 'string.quote'],\n            [/policy-uri/, 'string.quote'],\n            [/'self'/, 'string.quote'],\n            [/'unsafe-inline'/, 'string.quote'],\n            [/'unsafe-eval'/, 'string.quote'],\n            [/'strict-dynamic'/, 'string.quote'],\n            [/'unsafe-hashed-attributes'/, 'string.quote']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/csp/csp.js?"
        );

        /***/
      }
  }
]);
