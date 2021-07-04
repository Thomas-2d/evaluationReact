export default function DeleteSerieBtn(props) {
    const {id} = props
    
   function deleteSerie(id) {
    
        fetch(`http://localhost:4000/rest/shows/`+ id,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    })
    .then(() => {
        fetch('http://localhost:4000/rest/shows')
            .then(response => response.json())
            .then(console.log(id))
    })
    }

    return(
        <button onClick={()=>deleteSerie(id)} >Delete</button>
    )
}