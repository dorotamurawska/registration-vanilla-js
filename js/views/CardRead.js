const CardRead = () => {
    return (`
    <section 
        class='container'>
        <h1>CardRead</h1>
        <input 
            placeholder='Card number' 
            required 
            maxlength="6"
            data-card-read-input>
        </input>
        <p 
            class='hide validation'>
            this must be a number
        </p>
        <button 
            class='save hide'>
            save
        </button>
    </section>
    <button 
        class='back' 
        data-link='/registration'>
        back
    </button>`)
}

export default CardRead