function saveData(event) {
    event.preventDefault();

    const clientData = {
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
    return false;
};

function wstawDane() {
    document.getElementById('nazwaFirmy').value = "Przykładowa Firma";
    document.getElementById('nip').value = "123-456-32-18";
    document.getElementById('miasto').value = "Warszawa";
    document.getElementById('ulica').value = "Przykładowa 1";
    document.getElementById('numerDomu').value = "1";
    document.getElementById('numerMieszkania').value = "2";
    document.getElementById('kodPocztowy').value = "00-001";
    document.getElementById('uwagi').value = "Brak uwag";
    document.getElementById('branza').value = "1";
    document.getElementById('aktywny').checked = true;

    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.disabled = true;
    });
}