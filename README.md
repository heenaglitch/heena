# BMI Calculator

A single-page application (SPA) for calculating Body Mass Index (BMI).

## Features

- Calculate BMI using either Metric (cm, kg) or Imperial (in, lb) units
- Display BMI value and corresponding category (Underweight, Normal weight, Overweight, Obesity)
- Visual representation of BMI categories with a position indicator
- Responsive design for both desktop and mobile devices
- Reset functionality to clear inputs
- Tooltip with information about BMI and its categories

## How to Use

1. Open `index.html` in a web browser
2. Select your preferred unit system (Metric or Imperial)
3. Enter your height and weight in the input fields
4. Click the "Calculate BMI" button to see your results
5. Use the "Reset" button to clear the form and start over

## BMI Categories

- Underweight: BMI < 18.5
- Normal weight: 18.5 ≤ BMI < 24.9
- Overweight: 25 ≤ BMI < 29.9
- Obesity: BMI ≥ 30

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## File Structure

- `index.html` - The main HTML file containing the structure of the application
- `styles.css` - CSS file for styling the application
- `script.js` - JavaScript file containing the BMI calculation logic and UI interactions
- `tests.js` - JavaScript file containing unit tests for the BMI calculator functionality
- `test.html` - HTML file for running and viewing the test results

## Testing

To run the tests:
1. Open `test.html` in a web browser
2. Open the browser's developer console (F12 or right-click and select "Inspect")
3. Navigate to the "Console" tab to view the test results

The tests verify:
- BMI calculation using metric units (cm, kg)
- BMI calculation using imperial units (in, lb)
- Correct BMI category determination


