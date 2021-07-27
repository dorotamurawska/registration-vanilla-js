const Registration = () => {
    return (`
    <section class='container'>
        <h1>Registration</h1>
        <input 
            class='registration-input' 
            data-nickname-input 
            maxlength="10"
            placeholder='nickname' 
            required>
        </input>
        <p>enter your nickname</p>
        <button 
            class='next' 
            data-link='/card-read' 
            disabled>
            next
        </button>
    </section>`);
}

export default Registration
