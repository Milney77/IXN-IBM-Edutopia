// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom/extend-expect';
require('@testing-library/jest-dom/extend-expect');

// 3rd party library still using a depreciated version react-dom/test-utils.
// This should force it to use the newer verison.
import { act } from 'react';  
global.act = act;