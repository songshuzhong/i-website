(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [6],
  {
    /***/ "./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js":
      /*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js ***!
  \************************************************************************************/
      /*! exports provided: conf, language */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/* harmony import */ var _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typescript/typescript.js */ \"./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js\");\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"conf\"];\nvar language = {\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    defaultToken: 'invalid',\n    tokenPostfix: '.js',\n    keywords: [\n        'break',\n        'case',\n        'catch',\n        'class',\n        'continue',\n        'const',\n        'constructor',\n        'debugger',\n        'default',\n        'delete',\n        'do',\n        'else',\n        'export',\n        'extends',\n        'false',\n        'finally',\n        'for',\n        'from',\n        'function',\n        'get',\n        'if',\n        'import',\n        'in',\n        'instanceof',\n        'let',\n        'new',\n        'null',\n        'return',\n        'set',\n        'super',\n        'switch',\n        'symbol',\n        'this',\n        'throw',\n        'true',\n        'try',\n        'typeof',\n        'undefined',\n        'var',\n        'void',\n        'while',\n        'with',\n        'yield',\n        'async',\n        'await',\n        'of'\n    ],\n    typeKeywords: [],\n    operators: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].operators,\n    symbols: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].symbols,\n    escapes: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].escapes,\n    digits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].digits,\n    octaldigits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].octaldigits,\n    binarydigits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].binarydigits,\n    hexdigits: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].hexdigits,\n    regexpctl: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].regexpctl,\n    regexpesc: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].regexpesc,\n    tokenizer: _typescript_typescript_js__WEBPACK_IMPORTED_MODULE_0__[\"language\"].tokenizer\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/javascript/javascript.js?"
        );

        /***/
      },

    /***/ "./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js":
      /*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js ***!
  \************************************************************************************/
      /*! exports provided: conf, language */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fillers/monaco-editor-core.js */ \"./node_modules/monaco-editor/esm/vs/basic-languages/fillers/monaco-editor-core.js\");\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    onEnterRules: [\n        {\n            // e.g. /** | */\n            beforeText: /^\\s*\\/\\*\\*(?!\\/)([^\\*]|\\*(?!\\/))*$/,\n            afterText: /^\\s*\\*\\/$/,\n            action: {\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.IndentOutdent,\n                appendText: ' * '\n            }\n        },\n        {\n            // e.g. /** ...|\n            beforeText: /^\\s*\\/\\*\\*(?!\\/)([^\\*]|\\*(?!\\/))*$/,\n            action: {\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.None,\n                appendText: ' * '\n            }\n        },\n        {\n            // e.g.  * ...|\n            beforeText: /^(\\t|(\\ \\ ))*\\ \\*(\\ ([^\\*]|\\*(?!\\/))*)?$/,\n            action: {\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.None,\n                appendText: '* '\n            }\n        },\n        {\n            // e.g.  */|\n            beforeText: /^(\\t|(\\ \\ ))*\\ \\*\\/\\s*$/,\n            action: {\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.None,\n                removeText: 1\n            }\n        }\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"', notIn: ['string'] },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\n        { open: '`', close: '`', notIn: ['string', 'comment'] },\n        { open: '/**', close: ' */', notIn: ['string'] }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp('^\\\\s*//\\\\s*#?region\\\\b'),\n            end: new RegExp('^\\\\s*//\\\\s*#?endregion\\\\b')\n        }\n    }\n};\nvar language = {\n    // Set defaultToken to invalid to see what you do not tokenize yet\n    defaultToken: 'invalid',\n    tokenPostfix: '.ts',\n    keywords: [\n        // Should match the keys of textToKeywordObj in\n        // https://github.com/microsoft/TypeScript/blob/master/src/compiler/scanner.ts\n        'abstract',\n        'any',\n        'as',\n        'asserts',\n        'bigint',\n        'boolean',\n        'break',\n        'case',\n        'catch',\n        'class',\n        'continue',\n        'const',\n        'constructor',\n        'debugger',\n        'declare',\n        'default',\n        'delete',\n        'do',\n        'else',\n        'enum',\n        'export',\n        'extends',\n        'false',\n        'finally',\n        'for',\n        'from',\n        'function',\n        'get',\n        'if',\n        'implements',\n        'import',\n        'in',\n        'infer',\n        'instanceof',\n        'interface',\n        'is',\n        'keyof',\n        'let',\n        'module',\n        'namespace',\n        'never',\n        'new',\n        'null',\n        'number',\n        'object',\n        'package',\n        'private',\n        'protected',\n        'public',\n        'override',\n        'readonly',\n        'require',\n        'global',\n        'return',\n        'set',\n        'static',\n        'string',\n        'super',\n        'switch',\n        'symbol',\n        'this',\n        'throw',\n        'true',\n        'try',\n        'type',\n        'typeof',\n        'undefined',\n        'unique',\n        'unknown',\n        'var',\n        'void',\n        'while',\n        'with',\n        'yield',\n        'async',\n        'await',\n        'of'\n    ],\n    operators: [\n        '<=',\n        '>=',\n        '==',\n        '!=',\n        '===',\n        '!==',\n        '=>',\n        '+',\n        '-',\n        '**',\n        '*',\n        '/',\n        '%',\n        '++',\n        '--',\n        '<<',\n        '</',\n        '>>',\n        '>>>',\n        '&',\n        '|',\n        '^',\n        '!',\n        '~',\n        '&&',\n        '||',\n        '??',\n        '?',\n        ':',\n        '=',\n        '+=',\n        '-=',\n        '*=',\n        '**=',\n        '/=',\n        '%=',\n        '<<=',\n        '>>=',\n        '>>>=',\n        '&=',\n        '|=',\n        '^=',\n        '@'\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    digits: /\\d+(_+\\d+)*/,\n    octaldigits: /[0-7]+(_+[0-7]+)*/,\n    binarydigits: /[0-1]+(_+[0-1]+)*/,\n    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\n    regexpctl: /[(){}\\[\\]\\$\\^|\\-*+?\\.]/,\n    regexpesc: /\\\\(?:[bBdDfnrstvwWn0\\\\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [[/[{}]/, 'delimiter.bracket'], { include: 'common' }],\n        common: [\n            // identifiers and keywords\n            [\n                /[a-z_$][\\w$]*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            [/[A-Z][\\w\\$]*/, 'type.identifier'],\n            // [/[A-Z][\\w\\$]*/, 'identifier'],\n            // whitespace\n            { include: '@whitespace' },\n            // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)\n            [\n                /\\/(?=([^\\\\\\/]|\\\\.)+\\/([dgimsuy]*)(\\s*)(\\.|;|,|\\)|\\]|\\}|$))/,\n                { token: 'regexp', bracket: '@open', next: '@regexp' }\n            ],\n            // delimiters and operators\n            [/[()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/!(?=([^=]|$))/, 'delimiter'],\n            [\n                /@symbols/,\n                {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }\n            ],\n            // numbers\n            [/(@digits)[eE]([\\-+]?(@digits))?/, 'number.float'],\n            [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?/, 'number.float'],\n            [/0[xX](@hexdigits)n?/, 'number.hex'],\n            [/0[oO]?(@octaldigits)n?/, 'number.octal'],\n            [/0[bB](@binarydigits)n?/, 'number.binary'],\n            [/(@digits)n?/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string_double'],\n            [/'/, 'string', '@string_single'],\n            [/`/, 'string', '@string_backtick']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@jsdoc'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment']\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        jsdoc: [\n            [/[^\\/*]+/, 'comment.doc'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/[\\/*]/, 'comment.doc']\n        ],\n        // We match regular expression quite precisely\n        regexp: [\n            [\n                /(\\{)(\\d+(?:,\\d*)?)(\\})/,\n                ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']\n            ],\n            [\n                /(\\[)(\\^?)(?=(?:[^\\]\\\\\\/]|\\\\.)+)/,\n                ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]\n            ],\n            [/(\\()(\\?:|\\?=|\\?!)/, ['regexp.escape.control', 'regexp.escape.control']],\n            [/[()]/, 'regexp.escape.control'],\n            [/@regexpctl/, 'regexp.escape.control'],\n            [/[^\\\\\\/]/, 'regexp'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/\\\\\\./, 'regexp.invalid'],\n            [\n                /(\\/)([dgimsuy]*)/,\n                [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']\n            ]\n        ],\n        regexrange: [\n            [/-/, 'regexp.escape.control'],\n            [/\\^/, 'regexp.invalid'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/[^\\]]/, 'regexp'],\n            [\n                /\\]/,\n                {\n                    token: 'regexp.escape.control',\n                    next: '@pop',\n                    bracket: '@close'\n                }\n            ]\n        ],\n        string_double: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string', '@pop']\n        ],\n        string_single: [\n            [/[^\\\\']+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/'/, 'string', '@pop']\n        ],\n        string_backtick: [\n            [/\\$\\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],\n            [/[^\\\\`$]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/`/, 'string', '@pop']\n        ],\n        bracketCounting: [\n            [/\\{/, 'delimiter.bracket', '@bracketCounting'],\n            [/\\}/, 'delimiter.bracket', '@pop'],\n            { include: 'common' }\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/typescript/typescript.js?"
        );

        /***/
      }
  }
]);
