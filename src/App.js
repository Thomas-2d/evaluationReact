import Search from "./Search"
import Results from "./Results"
import SerieList from "./SerieList"

import React, {useState, useEffect} from "react"



export default function App(props){
    const [state, setState] = useState({
        s: "",
        results: []
    })
    const [seriesData, setSeriesData] = useState([])
   

    useEffect(() => {
        fetch('http://localhost:4000/rest/shows')
            .then(response => response.json())
            .then(data => setSeriesData(data))
    }, [])

    const search = (e) => {
        if (e.key === "Enter"){
            fetch('http://localhost:4000/rest/shows')
            .then(response => response.json())
            .then(data => {
                setSeriesData(data)
                
                let newList = []

                newList = data.filter(serie => serie.title.includes(state.s))
            
                let results = newList

                setState(prevState => {
                    return {...prevState, results : results}
                })
            })
        }
    }

    const handleInput = (e) => {
        let s = e.target.value
       
        setState(prevState => {
            return { ...prevState, s: s}
        })
    }

    if (state.s === '') {
        return (
        <div>
        <Search handleInput = {handleInput} search = { search }/>
        {/* <SerieList series = { seriesData } /> */}
        </div>
        )
    } else {
        return(
            <div>
            <Search handleInput = {handleInput} search = { search }/>
            <Results results={state.results} />
            
            </div>
    )}

}
