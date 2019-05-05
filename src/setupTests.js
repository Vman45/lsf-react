// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
import 'jest-dom/extend-expect';

// Overriding data-testid: https://testing-library.com/docs/dom-testing-library/api-queries#overriding-data-testid
import { configure } from 'react-testing-library';
configure({ testIdAttribute: 'data-e2e' });
