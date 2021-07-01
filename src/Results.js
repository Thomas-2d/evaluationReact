import React from 'react'
import Result from './Result'


export default function Results({results}){
    return(
        <section >
            {results.map(result => (
                <Result result={result} />
            ))}

        </section>
    )
}