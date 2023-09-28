# Simple React Calculator

## Overview

The Simple React Calculator is a simple yet effective tool built using React and TypeScript, allowing users to perform calculations on a series of numbers, with options to enable or disable specific rows, toggle the sign of the numbers, and delete rows.

## Features

### Rows with Various Controls
- Each row contains a number input field, along with buttons for toggling the sign of the number (`+` or `-`) and enabling/disabling the row.
- The rows are dynamically generated and users can delete any row unless there's only one row left.
- Each row also has an option to be enabled or disabled. When a row is disabled, its value does not contribute to the total sum.

### Auto Scroll to New Rows
- The application automatically scrolls to newly added rows ensuring a seamless user experience.

### Persistent State
- The state of the rows is stored in the local storage. This feature ensures that the user's data is not lost even after refreshing the page, providing continuity and reliability.

### Sum Display
- The application calculates the sum of all enabled rows, which updates in real-time as the user modifies the values or toggles the state of the rows.

## Usage

### Adding and Deleting Rows
- Users can add new rows by clicking the 'Add Row' button.
- Each row can be deleted individually, except when there's only one row left.

### Toggling Enable State
- Users can toggle the enable state of each row. Disabled rows are not included in the total sum.

### Changing Values
- Users can input numbers in each row to calculate the sum of all enabled rows. The sum updates in real-time as the values are changed.

### Toggling Sign
- Users can toggle the sign of each number using the `+` and `-` buttons, changing the impact of the number on the total sum.

### Resetting the Application
- The application can be reset by clicking the 'Reset' button, which reinitializes the application with a single row.

## Contributions

This project is not open for contributions and is for view only. Unauthorized copying, modification, or distribution of this project and the associated documentation files, via any medium, is strictly prohibited without the express permission of the author.

## License

Copyright (c) 2023 Hassan Ali

All Rights Reserved
