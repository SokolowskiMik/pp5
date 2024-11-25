class Customer {
    id = "";
    nazwaFirmy = "";
    nip = "";
    miasto =  "";
    ulica =  " ";
    thisnumerDomu =  "";
    numerMieszkania = "";
    kodPocztowy = "";
    uwagi = "";
    branza = "";
    aktywny = true;

    getData(){
        return `${this.nazwaFirmy} (${this.nip})`;
    }

    getAddress(){
        return `Miasto: ${this.miasto}, kod pocztowy: ${this.kodPocztowy}, numer mieszkania: ${this.numerMieszkania}`
    }
}


class Supplier extends Customer {
    constructor(){
        super();
        this.accountNumber = accountNumber;
    }

    invoices = [];
}