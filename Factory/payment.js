class Payment {
    constructor(amount) {
        this.amount = amount;
    }

    processPayment() {
        throw new Error('This method must be overridden!');
    }
}

class CreditCardPayment extends Payment {
    constructor(amount, cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    processPayment() {
        return `Processing credit card payment of $${this.amount} with card number ending in ${this.cardNumber.slice(-4)}`;
    }
}

class PayPalPayment extends Payment {
    constructor(amount, email) {
        super(amount);
        this.email = email;
    }

    processPayment() {
        return `Processing PayPal payment of $${this.amount} for ${this.email}`;
    }
}

class BankTransferPayment extends Payment {
    constructor(amount, accountNumber) {
        super(amount);
        this.accountNumber = accountNumber;
    }

    processPayment() {
        return `Processing bank transfer payment of $${this.amount} from account ${this.accountNumber}`;
    }
}

module.exports = { CreditCardPayment, PayPalPayment, BankTransferPayment };