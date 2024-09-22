const PaymentFactory = require('./paymentFactory');

try {
    const creditPayment = PaymentFactory.createPayment('credit', 100, '4111111111111111');
    const paypalPayment = PaymentFactory.createPayment('paypal', 150, 'user@example.com');
    const bankPayment = PaymentFactory.createPayment('bank', 200, '123456789');

    console.log(creditPayment.processPayment());  // Output: Processing credit card payment of $100 with card number ending in 1111
    console.log(paypalPayment.processPayment());  // Output: Processing PayPal payment of $150 for user@example.com
    console.log(bankPayment.processPayment());    // Output: Processing bank transfer payment of $200 from account 123456789
} catch (error) {
    console.error(error.message);
}