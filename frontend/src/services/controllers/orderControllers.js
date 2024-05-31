import axios from "axios";

export const handleCreateOrder = async () => {
    try {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const code = document.getElementById("code").value;
        const city = document.getElementById("city").value;
        const street = document.getElementById("street").value;

        const response = await axios.post("http://localhost:3000/createOrder", {
            name: name,
            phone: phone,
            code: code,
            city: city,
            street: street
        });

        console.log(response.data); // Get the data base answer

        // Clean the inputs values after send to db
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("code").value = "";
        document.getElementById("city").value = "";
        document.getElementById("street").value = "";
    } catch (error) {
        console.error(error);
    }
};