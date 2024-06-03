// Function debounce to limit the frequency of calls to API
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Funcion to get the address using CEP
async function cepAddress(cep, callback) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
    }
}

// Function debounce applicated to find the address
const debouncedCepAddress = debounce(cepAddress, 300);

export function getCep() {
    const codeElement = document.getElementById("code");
    if (codeElement) {
        const cep = codeElement.value.replace(/\D/g, '');
        if (cep.length === 8) {
            debouncedCepAddress(cep, getData);
        }
    }
}

// Function to update the city and street
function getData(data) {
    const city = document.getElementById("city");
    const street = document.getElementById("street");

    if (city && street) {
        city.value = data.localidade || '';
        street.value = data.logradouro || '';
    }
}

// Event listener to the CEP
document.addEventListener("DOMContentLoaded", function() {
    const codeElement = document.getElementById("code");
    if (codeElement) {
        codeElement.addEventListener('input', getCep);
    }
});
