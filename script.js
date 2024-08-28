function calculateRequiredScore() {
    // Get input values
    const term1 = parseFloat(document.getElementById('term1').value);
    const term2 = parseFloat(document.getElementById('term2').value);
    const term3 = parseFloat(document.getElementById('term3').value);
    const target = parseFloat(document.getElementById('target').value);

    // Calculate the weighted contributions of the term scores
    const weightedTermScore = (term1 * 0.15) + (term2 * 0.15) + (term3 * 0.15);

    // Formula to calculate the required score for the end-of-year exam
    const requiredEndOfYearScore = (target - weightedTermScore) / 0.55;

    // Display the result
    const resultDiv = document.getElementById('result');
    if (requiredEndOfYearScore <= 100 && requiredEndOfYearScore >= 0) {
        resultDiv.innerHTML = `<p>You need to score at least ${requiredEndOfYearScore.toFixed(2)} in the end-of-year exam to achieve your target overall score.</p>`;
    } else {
        resultDiv.innerHTML = `<p>It's not possible to achieve this target with the current term scores.</p>`;
    }
}
