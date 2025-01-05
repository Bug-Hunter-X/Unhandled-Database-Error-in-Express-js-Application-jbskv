# Unhandled Database Error in Express.js Application

This repository demonstrates a common error in Express.js applications: unhandled errors during database queries. The application crashes silently without providing useful error messages.

The `bug.js` file contains the faulty code.  The `bugSolution.js` file shows how to properly handle the error using error handling middleware.

## Bug
The `bug.js` file shows how an unhandled database error can cause the Express app to crash without providing helpful information.

## Solution
The `bugSolution.js` shows how to solve the issue by implementing proper error handling middleware to catch and log database errors, preventing application crashes.