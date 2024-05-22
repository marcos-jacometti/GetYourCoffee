const city = document.getElementById("city");
const address = document.getElementById("address");

export function getCep(){
    const cep = document.getElementById("code").value.replace(/\D/g, '');
    cepAddress(cep);
}

async function cepAddress(cep){
    const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json());
    getData(data);
}

function getData(data){
    city.value = data.localidade;
    address.value = data.logradouro;
}