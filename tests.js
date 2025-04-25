// Simple test suite for BMI calculator
// To run these tests, include this file in the HTML and check the console for results

function runTests() {
    console.log('Running BMI Calculator Tests...');
    
    // Test BMI calculation in metric units
    testMetricBMI();
    
    // Test BMI calculation in imperial units
    testImperialBMI();
    
    // Test BMI category determination
    testBMICategories();
    
    console.log('All tests completed!');
}

function testMetricBMI() {
    console.log('Testing Metric BMI Calculation:');
    
    // Test case 1: Height = 170 cm, Weight = 70 kg
    // Expected BMI = 70 / (1.7 * 1.7) = 24.22
    const bmi1 = calculateMetricBMI(170, 70);
    assertApproximatelyEqual(bmi1, 24.2, 'Metric BMI calculation for 170cm, 70kg');
    
    // Test case 2: Height = 150 cm, Weight = 50 kg
    // Expected BMI = 50 / (1.5 * 1.5) = 22.22
    const bmi2 = calculateMetricBMI(150, 50);
    assertApproximatelyEqual(bmi2, 22.2, 'Metric BMI calculation for 150cm, 50kg');
    
    // Test case 3: Height = 190 cm, Weight = 100 kg
    // Expected BMI = 100 / (1.9 * 1.9) = 27.70
    const bmi3 = calculateMetricBMI(190, 100);
    assertApproximatelyEqual(bmi3, 27.7, 'Metric BMI calculation for 190cm, 100kg');
}

function testImperialBMI() {
    console.log('Testing Imperial BMI Calculation:');
    
    // Test case 1: Height = 70 inches, Weight = 160 pounds
    // Expected BMI = 703 * 160 / (70 * 70) = 22.96
    const bmi1 = calculateImperialBMI(70, 160);
    assertApproximatelyEqual(bmi1, 23.0, 'Imperial BMI calculation for 70in, 160lb');
    
    // Test case 2: Height = 60 inches, Weight = 120 pounds
    // Expected BMI = 703 * 120 / (60 * 60) = 23.43
    const bmi2 = calculateImperialBMI(60, 120);
    assertApproximatelyEqual(bmi2, 23.4, 'Imperial BMI calculation for 60in, 120lb');
    
    // Test case 3: Height = 75 inches, Weight = 220 pounds
    // Expected BMI = 703 * 220 / (75 * 75) = 27.51
    const bmi3 = calculateImperialBMI(75, 220);
    assertApproximatelyEqual(bmi3, 27.5, 'Imperial BMI calculation for 75in, 220lb');
}

function testBMICategories() {
    console.log('Testing BMI Category Determination:');
    
    // Test underweight category
    assertEqual(getBMICategory(16.5), 'Underweight', 'BMI 16.5 should be Underweight');
    assertEqual(getBMICategory(18.4), 'Underweight', 'BMI 18.4 should be Underweight');
    
    // Test normal weight category
    assertEqual(getBMICategory(18.5), 'Normal weight', 'BMI 18.5 should be Normal weight');
    assertEqual(getBMICategory(22.0), 'Normal weight', 'BMI 22.0 should be Normal weight');
    assertEqual(getBMICategory(24.9), 'Normal weight', 'BMI 24.9 should be Normal weight');
    
    // Test overweight category
    assertEqual(getBMICategory(25.0), 'Overweight', 'BMI 25.0 should be Overweight');
    assertEqual(getBMICategory(27.5), 'Overweight', 'BMI 27.5 should be Overweight');
    assertEqual(getBMICategory(29.9), 'Overweight', 'BMI 29.9 should be Overweight');
    
    // Test obesity category
    assertEqual(getBMICategory(30.0), 'Obesity', 'BMI 30.0 should be Obesity');
    assertEqual(getBMICategory(35.5), 'Obesity', 'BMI 35.5 should be Obesity');
}

// Helper functions for testing

// Calculate BMI using metric units
function calculateMetricBMI(heightCm, weightKg) {
    const heightM = heightCm / 100;
    return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}

// Calculate BMI using imperial units
function calculateImperialBMI(heightIn, weightLb) {
    return Math.round((703 * weightLb / (heightIn * heightIn)) * 10) / 10;
}

// Determine BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 25) {
        return 'Normal weight';
    } else if (bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

// Assert that two values are equal
function assertEqual(actual, expected, message) {
    if (actual === expected) {
        console.log(`✅ PASS: ${message}`);
    } else {
        console.error(`❌ FAIL: ${message} - Expected ${expected}, got ${actual}`);
    }
}

// Assert that two values are approximately equal (for floating point comparisons)
function assertApproximatelyEqual(actual, expected, message, tolerance = 0.1) {
    if (Math.abs(actual - expected) <= tolerance) {
        console.log(`✅ PASS: ${message}`);
    } else {
        console.error(`❌ FAIL: ${message} - Expected approximately ${expected}, got ${actual}`);
    }
}

// Run tests when this file is loaded
// Comment out the line below if you want to run tests manually
runTests();