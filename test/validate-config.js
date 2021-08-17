'use strict';

const eslint = require('eslint');
const test = require('tape');

test('load config in eslint to validate all rule syntax is correct', (t) => {
  const CLIEngine = eslint.CLIEngine;

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: '.eslintrc.js'
  });

  const code = '\'use strict\';\nconst foo = 1;\nconst bar = function () {};\nbar(foo);\n';

  t.equal(cli.executeOnText(code).errorCount, 0);
  t.end();
});
