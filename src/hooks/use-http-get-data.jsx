import { useEffect, useState } from "react";
import config from "../config.json"

function useHttpGetData(collection, id){
    const [entry, setEntry] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try{
                const {serverUrl} = config
                const response = await fetch(serverUrl + collection)
                if(response.status === 200){
                    const collection = await response.json()
                    const foundEntry = collection.find(data => data.id === id)
                    setEntry(foundEntry)
                }
            }
            catch(error){
                console.error(error)
            }
        }
        fetchData()
    }, [collection, id])

    return entry;
}

export default useHttpGetData;