const city = document.getElementById("city");
const street = document.getElementById("street");

export function getCep(){
    const codeElement = document.getElementById("code");
    if(codeElement) {
        const cep = codeElement.value.replace(/\D/g, '');
        cepAddress(cep);
    }
}

async function cepAddress(cep){
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        getData(data);
    } catch (error) {
        console.error(error);
    }
}

function getData(data){
    if(city && street) {
        city.value = data.localidade || '';
        street.value = data.logradouro || '';
    }
}