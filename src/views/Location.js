import React, { useEffect, useState } from 'react'
import CardLocation from '../components/CardLocation'



export default function Characters() {
    const [data, setData] = useState({
        results: []
    })
    const [hasError, setError] = useState(false)
    const fetchCharacter = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/location?page=1')
        response
            .json()
            .then(response => setData(response))
            .catch(error => setError(error))
    }
    useEffect(() => {
        fetchCharacter()
    })
    // debugger
    console.log(data.results)
    return (
        <div>

            <CardLocation items={data.results} />


        </div>
    )
}
