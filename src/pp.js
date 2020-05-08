exports.functor = function(monitor) {

    escodegen = monitor.require('escodegen');

    var module = {};

    module.pretty = escodegen.generate;

    return module;
};