'use strict';

import 'babel-polyfill';

import 'ts-helpers';

const testContext = (<{ context?: Function }>require)
  .context('./', true, /^(.(?!tests\.entry))*\.tsx?$/);

testContext('./index.ts');

testContext.keys().forEach(
  key => {
    if (/\.test\.tsx?$/.test(key)) {
      testContext(key);
    }
  });
