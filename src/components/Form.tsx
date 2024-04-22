const Form = () => {
    return (
        <form>
            <div className='form-group'>
                <label htmlFor="name">Nom</label>
                <input type='text' name='name' placeholder='Bill Gates' />
            </div>
            <div className='form-group'>
                <label htmlFor="name">Adresse mail</label>
                <input type='email' name='email' placeholder='monadressemail@gmail.com' />
            </div>
            <div className='form-group'>
                <label htmlFor="message">
                    Message
                </label>
                <textarea name='message' placeholder="Une question ? Un projet ?" />
            </div>
            <button className="btn btn--primary-outline">Envoyer</button>
        </form>
    );
};

export default Form;