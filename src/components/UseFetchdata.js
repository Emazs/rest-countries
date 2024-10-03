import { useEffect, useState } from "react"

export const UseFetchdata = (URL_COUNTRYS, nameCountry) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(URL_COUNTRYS)
            .then(res => res.json())
            .then(datas => setData(datas))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [nameCountry])

    return { data, error ,loading }
}
