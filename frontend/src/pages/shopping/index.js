import React, { useEffect, useState } from "react";
import LoadingScreen from "../../components/specific/loadingScreen";
import MainScreen from "./mainScreen";

export default function ShoppingCard(){
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return(
        <>
            {loading ? <LoadingScreen /> : <MainScreen />}
        </>
    );
}