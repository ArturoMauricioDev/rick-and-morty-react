import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Footer from '../components/Footer'

export default function Characters() {
    const [data, setData] = useState({
        results: []
    })
    const [hasError, setError] = useState(false)
    const fetchCharacter = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character?page=1')
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
            <Header />
            <Card items={data.results} />
            <Footer />

        </div>
    )
}
