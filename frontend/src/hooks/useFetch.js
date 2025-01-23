import { useEffect, useState } from "react";
import axios from "axios";

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
    baseURL: "http://localhost:7000/api",
});

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
                console.error("Error fetching data:", error);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const FetchAgain = async () => {
        setLoading(true);
        try {
            const res = await axiosInstance.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
            console.error("Error during FetchAgain:", err);
        }
        setLoading(false);
    };

    return { data, loading, error, FetchAgain };
};

export default useFetch;
