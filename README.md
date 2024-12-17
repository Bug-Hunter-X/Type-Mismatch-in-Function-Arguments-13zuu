# Type Mismatch in Function Arguments

This repository demonstrates a common error in TypeScript: type mismatches in function arguments.

The `bug.ts` file contains the erroneous code, where a function expecting two numbers is called with a number and a string.  The `bugSolution.ts` file shows how to correct this error using type guards or by changing the function to accept either numbers or strings.

## How to reproduce

1. Clone the repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc).
3. Observe the type error reported by the compiler.