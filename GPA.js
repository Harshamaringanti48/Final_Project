// Focus on the first input box when page loads
window.onload = function() {
    document.getElementById('credit1').focus();
};

// Function to convert letter grade to grade points
function getGradePoints(grade) {
    grade = grade.toUpperCase();
    switch(grade) {
        case 'A':
            return 4.0;
        case 'B':
            return 3.0;
        case 'C':
            return 2.0;
        case 'D':
            return 1.0;
        case 'F':
            return 0.0;
        default:
            return -1; // Invalid grade
    }
}

// Function to calculate GPA
function calculateGPA() {
    let totalPoints = 0;
    let totalCredits = 0;
    let courseCount = 0;

    // Loop through all 5 courses
    for (let i = 1; i <= 5; i++) {
        const creditInput = document.getElementById('credit' + i).value.trim();
        const gradeInput = document.getElementById('grade' + i).value.trim();

        // Check if both credit and grade are provided
        if (creditInput && gradeInput) {
            const creditHours = parseFloat(creditInput);
            const gradePoints = getGradePoints(gradeInput);

            // Validate inputs
            if (isNaN(creditHours) || creditHours <= 0) {
                alert('Invalid credit hours for Course ' + i + '. Please enter a positive number.');
                return;
            }

            if (gradePoints === -1) {
                alert('Invalid grade entered for Course ' + i + '. Please use A, B, C, D, or F.');
                return;
            }

            // Add to totals
            totalPoints += gradePoints * creditHours;
            totalCredits += creditHours;
            courseCount++;
        }
    }

    // Check minimum requirement of 2 courses
    if (courseCount < 2) {
        alert('Please enter at least 2 courses with credit hours and grades.');
        return;
    }

    // Calculate GPA
    const gpa = totalPoints / totalCredits;

    // Display result with 2 decimal places
    document.getElementById('gpaResult').value = gpa.toFixed(2);
}

// Function to reset all input boxes
function resetForm() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('credit' + i).value = '';
        document.getElementById('grade' + i).value = '';
    }
    document.getElementById('gpaResult').value = '';
    document.getElementById('credit1').focus();
}