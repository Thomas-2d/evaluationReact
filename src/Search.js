

export default function Search({ handleInput, search}) {



    return(
        <section class="search">
           <input type="text" placeholder="Chercher une série" class="searchbox" 
            onChange={handleInput}
            onKeyPress={search}/>
        </section>
    )
}