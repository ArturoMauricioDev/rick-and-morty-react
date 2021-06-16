import React, { useEffect, useState } from 'react'
import CardEpisode from '../components/CardEpisode'



export default function Episode() {
    const [data, setData] = useState({
        results: []
    })
    const [hasError, setError] = useState(false)
    const fetchCharacter = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/episode?page=1')
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

            <CardEpisode items={data.results} />


        </div>
    )
}
