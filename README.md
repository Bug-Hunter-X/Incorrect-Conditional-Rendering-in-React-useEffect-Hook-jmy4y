# Incorrect Conditional Rendering in React useEffect Hook

This repository demonstrates a common error in React's `useEffect` hook: incorrect conditional rendering logic within the effect callback.

The `bug.js` file contains the flawed code.  The component attempts to log a message only when the count is greater than 0; however, this approach leads to unnecessary re-renders and potentially unexpected behavior.

The corrected code is provided in `bugSolution.js`. The solution showcases how to properly handle conditional logic within the useEffect hook to avoid performance issues and unexpected behavior.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `npm install` to install the necessary packages.
4. Run `npm start` to start the development server.
5. Observe the console output as you click the increment button. The log message is repeatedly printed.

## How to fix the bug

Refer to `bugSolution.js` for the corrected code. The key is to move conditional rendering logic *outside* the `useEffect` hook, leaving the effect responsible for side-effects. This approach adheres to the intended purpose of the `useEffect` hook: managing side effects, not conditional rendering.