document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    document.getElementById("displayStockId").textContent = urlParams.get("stockId");
    document.getElementById("displayMaker").textContent = urlParams.get("maker");
    document.getElementById("displayManufactureYear").textContent = urlParams.get("manufactureYear");
    document.getElementById("displayTransmission").textContent = urlParams.get("transmission");
    // Retrieve and display other fields similarly
});
