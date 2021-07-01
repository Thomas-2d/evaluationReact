import Search from "./Search"
import Results from "./Results"
import series from './shows.json'
import SerieList from "./SerieList"
import React, {useState} from "react"



export default function App(props){
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    })
    // const [word, setWord] = useState("")

    //const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885"
    

   

    const search = (e) => {
        if (e.key === "Enter"){
            let newList = []

           
            newList = series.filter(serie => serie.title.includes(state.s))
            
            console.log(newList)
            let results = newList

            setState(prevState => {
                return {...prevState, results : results}
            })


        } else {}
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
        <SerieList series = { series } />
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
