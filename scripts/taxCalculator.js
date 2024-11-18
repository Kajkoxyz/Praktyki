function calculateNetIncome() {
    const grossIncome = parseFloat(document.getElementById("grossIncome").value);
    const taxRate = 0.23; 
    const netIncome = grossIncome * (1 - taxRate);
    document.getElementById("netIncome").innerText = netIncome.toFixed(2);
}
