const { CreditCardPayment, PayPalPayment, BankTransferPayment } = require('./payment');

class PaymentFactory {
    static createPayment(method, amount, detail) {
        switch (method) {
            case 'credit':
                return new CreditCardPayment(amount, detail);
            case 'paypal':
                return new PayPalPayment(amount, detail);
            case 'bank':
                return new BankTransferPayment(amount, detail);
            default:
                throw new Error('Invalid payment method');
        }
    }
}

module.exports = PaymentFactory;