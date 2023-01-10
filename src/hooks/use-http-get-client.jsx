import { useEffect, useState } from "react";
import config from "../config.json"

function useHttpGetClient(router){
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const {serverUrl} = config
                const response = await fetch(serverUrl + router)
                if(response.status === 200){
                    const data = await response.json()
                    setData(data)
                }
            }
            catch(error){
                console.error(error)

            }
        }

        fetchData()

    }, [router])
    return data;
}

export default useHttpGetClient;