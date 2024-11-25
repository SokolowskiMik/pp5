class Customer {
    id: string = "";
    nazwaFirmy: string = "";
    nip: string = "";
    miasto: string = "";
    ulica: string = "";
    numerDomu: string = "";  
    numerMieszkania: string = "";
    kodPocztowy: string = "";
    uwagi: string = "";
    branza: string = "";
    aktywny: boolean = true;

    getData(){
        return `${this.nazwaFirmy} (${this.nip})`;
    }

    getAddress(){
        return `Miasto: ${this.miasto}, kod pocztowy: ${this.kodPocztowy}, numer mieszkania: ${this.numerMieszkania}`
    }
}


class Supplier extends Customer {
    accountNumber: string;
    invoices: string[] = [];

    constructor(accountNumber: string){
        super()
        this.accountNumber= accountNumber
    }
}
