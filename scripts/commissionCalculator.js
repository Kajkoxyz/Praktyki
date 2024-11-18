function calculateCommission() {
    const saleAmount = parseFloat(document.getElementById("saleAmount").value);
    const commissionRate = parseFloat(document.getElementById("commissionRate").value) / 100;
    const commission = saleAmount * commissionRate;
    document.getElementById("commissionResult").innerText = commission.toFixed(2);
}
