import axios from "axios";
import { toast } from "react-toastify";

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

        toast.success("Order was created successfully!");
    } catch (error) {
        console.error("Error creating order:", error);
        toast.error("Failed to create order!");
    }
};