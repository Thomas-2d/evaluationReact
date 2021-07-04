import Search from "./Search"
import SerieList from "./SerieList"
import React, {useState, useEffect} from "react"



export default function App(props){
    const [state, setState] = useState({
        s: ""
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

                data = data.filter(serie => serie.title.toLowerCase().includes(state.s.toLowerCase()))
            
                setSeriesData(data)

                // setState(prevState => {
                //     return {...prevState, results : results}
                // })
            })
        }
    }

    const handleInput = (e) => {
        let s = e.target.value
       
        setState(prevState => {
            return { ...prevState, s: s}
        })
    }
    return (
    <div>
    <Search handleInput = {handleInput} search = { search }/>

    <SerieList series = { seriesData } />
    </div>
    )
}
