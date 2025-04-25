document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const unitRadios = document.querySelectorAll('input[name="unit"]');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const heightUnit = document.getElementById('height-unit');
    const weightUnit = document.getElementById('weight-unit');
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const resultContainer = document.getElementById('result-container');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const bmiIndicator = document.getElementById('bmi-indicator');

    // Add event listeners
    unitRadios.forEach(radio => {
        radio.addEventListener('change', updateUnitLabels);
    });

    calculateBtn.addEventListener('click', calculateBMI);
    resetBtn.addEventListener('click', resetCalculator);

    // Update unit labels based on selected unit system
    function updateUnitLabels() {
        const isMetric = document.querySelector('input[name="unit"]:checked').value === 'metric';
        
        heightUnit.textContent = isMetric ? 'cm' : 'in';
        weightUnit.textContent = isMetric ? 'kg' : 'lb';
    }

    // Calculate BMI
    function calculateBMI() {
        // Get input values
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        
        // Validate inputs
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight values.');
            return;
        }
        
        // Get selected unit system
        const isMetric = document.querySelector('input[name="unit"]:checked').value === 'metric';
        
        // Calculate BMI based on unit system
        let bmi;
        if (isMetric) {
            // Convert height from cm to m
            const heightInMeters = height / 100;
            bmi = weight / (heightInMeters * heightInMeters);
        } else {
            // Imperial formula: 703 × weight (lb) / [height (in)]^2
            bmi = 703 * weight / (height * height);
        }
        
        // Round to 1 decimal place
        bmi = Math.round(bmi * 10) / 10;
        
        // Display result
        displayResult(bmi);
    }

    // Display BMI result and category
    function displayResult(bmi) {
        // Show result container
        resultContainer.classList.add('active');
        resultContainer.style.display = 'block';
        
        // Update BMI value
        bmiValue.textContent = bmi;
        
        // Determine BMI category and set colors
        let category, color, indicatorPosition;
        
        if (bmi < 18.5) {
            category = 'Underweight';
            color = '#3498db'; // Blue
            indicatorPosition = (bmi / 18.5) * 25; // Position within underweight segment
        } else if (bmi < 25) {
            category = 'Normal weight';
            color = '#2ecc71'; // Green
            indicatorPosition = 25 + ((bmi - 18.5) / 6.5) * 25; // Position within normal segment
        } else if (bmi < 30) {
            category = 'Overweight';
            color = '#f39c12'; // Orange
            indicatorPosition = 50 + ((bmi - 25) / 5) * 25; // Position within overweight segment
        } else {
            category = 'Obesity';
            color = '#e74c3c'; // Red
            // Cap the indicator position at 95% to keep it visible
            indicatorPosition = Math.min(75 + ((bmi - 30) / 10) * 25, 95);
        }
        
        // Update category text and color
        bmiCategory.textContent = category;
        bmiCategory.style.color = color;
        
        // Update indicator position
        bmiIndicator.style.left = `${indicatorPosition}%`;
    }

    // Reset calculator
    function resetCalculator() {
        heightInput.value = '';
        weightInput.value = '';
        resultContainer.style.display = 'none';
        resultContainer.classList.remove('active');
        bmiValue.textContent = '--';
        bmiCategory.textContent = '--';
        bmiCategory.style.color = '#333';
    }

    // Initialize unit labels
    updateUnitLabels();
});