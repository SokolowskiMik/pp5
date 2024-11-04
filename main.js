



function showForm() {
    document.getElementById('customer-list').style.display = "none";
    document.getElementById('customer-form').style.display = "block";
}

function showList() {
    document.getElementById('customer-list').style.display = "block";
    document.getElementById('customer-form').style.display = "none";

    let ul = document.getElementById('customer-list-data');
    ul.innerHTML = 'Lista klientow';
    for (let customer of customersList) {
        ul.innerHTML += `<li>${customer.nazwaFirmy} <button class="btn btn-primary" onclick=showCustomer('${customer.id}')>edytuj</button></li>`;
    }

}

var customersList = [];

function showCustomer(customerId) {
    showForm();
    let customer = customersList.find(c => c.id === customerId)
    if (customer) {
        addDataToForm(customer);
    } else {
        console.error('Customer not found');
    }
}

function saveData(event) {
    event.preventDefault();

    let clientData = {
        id: Math.floor(Math.random() * 10001),
        nazwaFirmy: document.getElementById('nazwaFirmy').value,
        nip: document.getElementById('nip').value,
        miasto: document.getElementById('miasto').value,
        ulica: document.getElementById('ulica').value,
        numerDomu: document.getElementById('numerDomu').value,
        numerMieszkania: document.getElementById('numerMieszkania').value,
        kodPocztowy: document.getElementById('kodPocztowy').value,
        uwagi: document.getElementById('uwagi').value,
        branza: document.getElementById('branza').value,
        aktywny: document.getElementById('aktywny').checked
    };

    console.log(clientData);
    customersList.push(clientData);
    showList()
    console.log(customersList);

    return false;
};

function getCustomer() {
    return {
        nazwaFirmy: "Przykładowa Firma",
        nip: "123-456-32-18",
        miasto: "Warszawa",
        ulica: "Przykładowa 1",
        numerDomu: "1",
        numerMieszkania: "2",
        kodPocztowy: "00-001",
        uwagi: "Brak uwag",
        branza: "1",
        aktywny: true
    }
}

function getEmptyCustomer() {
    return {
        nazwaFirmy: "",
        nip: "",
        miasto: "",
        ulica: "",
        numerDomu: "",
        numerMieszkania: "",
        kodPocztowy: "",
        uwagi: "",
        branza: "",
        aktywny: ""
    }
}

function addDataToForm(newCustomer) {
    document.getElementById('nazwaFirmy').value = newCustomer.nazwaFirmy;
    document.getElementById('nip').value = newCustomer.nip;
    document.getElementById('miasto').value = newCustomer.miasto;
    document.getElementById('ulica').value = newCustomer.ulica;
    document.getElementById('numerDomu').value = newCustomer.numerDomu;
    document.getElementById('numerMieszkania').value = newCustomer.numerMieszkania;
    document.getElementById('kodPocztowy').value = newCustomer.kodPocztowy;
    document.getElementById('uwagi').value = newCustomer.uwagi;
    document.getElementById('branza').value = newCustomer.branza;
    document.getElementById('aktywny').checked = newCustomer.aktywny;
}