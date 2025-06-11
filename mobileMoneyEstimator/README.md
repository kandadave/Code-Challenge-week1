Transaction Fee Estimator
This simple JavaScript application helps you estimate the transaction fee for sending money, applying a specific percentage rate with defined minimum and maximum limits. It's designed for quick, on-the-fly calculations directly in your web browser.

How It Works
The estimateTransactionFee() function calculates the fee based on the following rules:

Percentage Fee: A base rate of 1.5% of the amount you intend to send.

Minimum Fee: The fee will always be at least KES 10. If 1.5% of the amount is less than KES 10, it defaults to KES 10.

Maximum Fee: The fee will never exceed KES 70. If 1.5% of the amount is greater than KES 70, it caps at KES 70.

When the web page loads, a prompt will appear asking you for the amount you wish to send in Kenyan Shillings (KES). The function then calculates the applicable fee, sums it with your original amount to get the total debited amount, and displays all details in your browser's developer console.

How to Use
To use this estimator:

Open in Browser: Open the saved .html file using any modern web browser (Chrome, Firefox, Edge, etc.).

Enter Amount: As soon as the page loads, a prompt dialog box will appear. Enter the amount you wish to send (e.g., 500 for KES 500) and click "OK".

View Results: Open your browser's developer console (usually by pressing F12 on Windows/Linux or Cmd + Option + J on Mac) and navigate to the "Console" tab. The calculated transaction fee and total amount will be displayed there.