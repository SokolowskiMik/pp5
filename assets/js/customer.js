"use strict";
class Customer {
    constructor() {
        this.id = "";
        this.nazwaFirmy = "";
        this.nip = "";
        this.miasto = "";
        this.ulica = " ";
        this.thisnumerDomu = "";
        this.numerMieszkania = "";
        this.kodPocztowy = "";
        this.uwagi = "";
        this.branza = "";
        this.aktywny = true;
    }
    getData() {
        return `${this.nazwaFirmy} (${this.nip})`;
    }
    getAddress() {
        return `Miasto: ${this.miasto}, kod pocztowy: ${this.kodPocztowy}, numer mieszkania: ${this.numerMieszkania}`;
    }
}
class Supplier extends Customer {
    constructor() {
        super();
        this.invoices = [];
        this.accountNumber = accountNumber;
    }
}
