# IT313 Mobile Programming - Laboratory 2: Enrollment ELigibility Checker

## Problem Description
This project is a list of enrollee records that contains the prelim, midterm, and final grades. It shows if they area "PASSING" or on "Probation".

## Approach/ES6+ features used
- **let / const**: Block-scoped variable declarations.
- **Arrow Functions**: Makes functions and callbacks shorter and easier to read.
- **ES Modules (`import` / `export`)**: Keeps math functions in `gradeUtils.js` and imports them into `main.js` so the code stays organized.
- **Promises & `async` / `await`**: Mimics waiting for student data from a server without freezing.
- **`try` / `catch`**: Catches errors if the data fails to load so the script doesn't crash.
- **Destructuring**: Pulls out properties like `name` and grades directly instead of typing `student.name` every time.
- **`.map()`**: Goes through the raw student list to make a new list with calculated averages and passing status.
- **`.filter()`**: Picks out only the students who passed.
- **`.reduce()`**: Adds up all the student averages so we can get the class average.
- **Template literals**: Uses backticks and `${}` to print the report neatly with clean spacing and rounded numbers.

## How to Run the project
1. Ensure to have the Node.js installed.
2. Open vscode or your terminal. In your vscode(with the project folder open) or on your terminal(ensure you are inside the directory/project folder). 
3. Run the script:
    node main.js
