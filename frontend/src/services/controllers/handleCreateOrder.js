import axios from "axios";

export const handleCreateOrder = async () => {
    try {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const code = document.getElementById("code").value;
        const city = document.getElementById("city").value;
        const street = document.getElementById("street").value;

        const response = await axios.post("http://localhost:3000/orders/createOrder", {
            name,
            phone,
            code,
            city,
            street
        });

        console.log(response.data);

        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("code").value = "";
        document.getElementById("city").value = "";
        document.getElementById("street").value = "";
    } catch (error) {
        console.error("Error creating order:", error);
    }
};