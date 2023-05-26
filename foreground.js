document.addEventListener('DOMContentLoaded', function() {
  // Get the input fields
  const sharesBoughtInputs = document.querySelectorAll('input[name^="txtSharesBought"]');
  const purchasePriceInputs = document.querySelectorAll('input[name^="txtPurchasePrice"]');
  const calculateButton = document.getElementById('calculateButton');
  
  // Function to calculate the average cost
  function calculateAverageCost() {
    let totalShares = 0;
    let totalCost = 0;document.addEventListener('DOMContentLoaded', function() {
      var calculateButton = document.getElementById('calculateButton');
      calculateButton.addEventListener('click', calculateAverage);
    
      function calculateAverage() {
        var totalShares = 0;
        var totalCost = 0;
    
        for (var i = 1; i <= 10; i++) {
          var sharesInput = document.getElementById('txtSharesBought' + i);
          var priceInput = document.getElementById('txtPurchasePrice' + i);
    
          if (sharesInput.value !== '' && priceInput.value !== '') {
            var shares = parseFloat(sharesInput.value);
            var price = parseFloat(priceInput.value);
    
            totalShares += shares;
            totalCost += shares * price;
          }
        }
    
        if (totalShares !== 0) {
          var average = totalCost / totalShares;
          document.getElementById('result').innerHTML = 'Average cost per share: $' + average.toFixed(2);
        } else {
          document.getElementById('result').innerHTML = 'Please enter values for at least one row.';
        }
      }
    });
    
  
    // Iterate over the input fields
    for (let i = 0; i < sharesBoughtInputs.length; i++) {
      const sharesBought = parseFloat(sharesBoughtInputs[i].value);
      const purchasePrice = parseFloat(purchasePriceInputs[i].value);
  
      // Check if both shares bought and purchase price are valid numbers
      if (!isNaN(sharesBought) && !isNaN(purchasePrice)) {
        totalShares += sharesBought;
        totalCost += sharesBought * purchasePrice;
      }
    }
  
    // Calculate the average cost
    const averageCost = totalCost / totalShares;
  
    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = isNaN(averageCost) ? 'Invalid input' : '$' + averageCost.toFixed(2);
  }
  
  // Add event listener to the calculate button
  calculateButton.addEventListener('click', calculateAverageCost);
});
