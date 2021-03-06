exports.functor = function(monitor) {

    var Label = monitor.require('label').Label;
    var Value = monitor.require('values').Value;

    var strings = [
        'index',
        'input',
        'value',
        'writable',
        'enumerable',
        'configurable',
        'get',
        'set',
        'print',
        'console',
        'alert',
        'log',
        'prototype',
        'constructor',
        'length',
        'arguments',
        'upg',
        'upgv',
        'upgf',
        'upgs',
        'getPrototypeOf',
        'getOwnPropertyDescriptor',
        'getOwnPropertyNames',
        'create',
        'defineProperty',
        'defineProperties',
        'seal',
        'freeze',
        'preventExtensions',
        'isSealed',
        'isFrozen',
        'isExtensible',
        'keys',
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'apply',
        'call',
        'bind',
        'NaN',
        'Infinity',
        'undefined',
        'eval',
        'parseInt',
        'parseFloat',
        'isNaN',
        'isFinite',
        'decodeURI',
        'decodeURIComponent',
        'encodeURI',
        'encodeURIComponent',
        'Object',
        'Function',
        'Array',
        'String',
        'Boolean',
        'Number',
        'Date',
        'RegExp',
        'Error',
        'EvalError',
        'RangeError',
        'ReferenceError',
        'SyntaxError',
        'TypeError',
        'URIError',
        'Math',
        'JSON',
        'parse',
        'stringify',
        'name',
        'message',
        'isArray',
        'concat',
        'join',
        'pop',
        'push',
        'reverse',
        'shift',
        'slice',
        'sort',
        'splice',
        'unshift',
        'indexOf',
        'lastIndexOf',
        'every',
        'some',
        'forEach',
        'map',
        'filter',
        'reduce',
        'reduceRight',
        'fromCharCode',
        'charAt',
        'charCodeAt',
        'localeCompare',
        'match',
        'replace',
        'search',
        'split',
        'substring',
        'substr',
        'toLowerCase',
        'toLocaleLowerCase',
        'toUpperCase',
        'toLocaleUpperCase',
        'trim',
        'MAX_VALUE',
        'MIN_VALUE',
        'NEGATIVE_INFINITY',
        'POSITIVE_INFINITY',
        'toFixed',
        'toExponential',
        'toPrecision',
        'E',
        'LN10',
        'LN2',
        'LOG2E',
        'LOG10E',
        'PI',
        'SQRT1_2',
        'SQRT2',
        'abs',
        'acos',
        'asin',
        'atan',
        'atan2',
        'ceil',
        'cos',
        'exp',
        'floor',
        'log',
        'max',
        'min',
        'pow',
        'random',
        'round',
        'sin',
        'sqrt',
        'tan',
        'toDateString',
        'toTimeString',
        'toLocaleDateString',
        'toLocaleTimeString',
        'getTime',
        'getFullYear',
        'getUTCFullYear',
        'getMonth',
        'getUTCMonth',
        'getDate',
        'getUTCDate',
        'getDay',
        'getUTCDay',
        'getHours',
        'getUTCHours',
        'getMinutes',
        'getUTCMinutes',
        'getSeconds',
        'getUTCSeconds',
        'getMilliseconds',
        'getUTCMilliseconds',
        'getTimezoneOffset',
        'setTime',
        'setMilliseconds',
        'setUTCMilliseconds',
        'setSeconds',
        'setUTCSeconds',
        'setMinutes',
        'setUTCMinutes',
        'setHours',
        'setUTCHours',
        'setDate',
        'setUTCDate',
        'setMonth',
        'setUTCMonth',
        'setFullYear',
        'setUTCFullYear',
        'toUTCString',
        'toISOString',
        'toJSON',
        'parse',
        'UTC',
        'now',
        'exec',
        'test',
        'source',
        'global',
        'ignoreCase',
        'multiline',
        'lastIndex'
    ];

    var module = {};

    for (var i = 0, len = strings.length; i < len; i++) {
        var str = strings[i];
        module[str] = new Value(str, Label.bot);
    }

    return module;
};