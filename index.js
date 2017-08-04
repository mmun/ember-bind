/* eslint-env node */
"use strict";

module.exports = {
  name: "ember-bind",

  setupPreprocessorRegistry(type, registry) {
    registry.add("htmlbars-ast-plugin", {
      name: "bind",
      plugin: require("./lib/bind-transform"),
      baseDir: function() {
        return __dirname;
      }
    });
  }
};
