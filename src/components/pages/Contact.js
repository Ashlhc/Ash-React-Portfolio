import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Footer from '../Footer';
import '../../styles/Contact.css';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setComment(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Invalid Email');
            return;
        }

        if (comment === '') {
            setErrorMessage('Must add message');
            return;
        }

        setName('');
        setEmail('');
        setComment('');
    }

    return (

            <div className='contact'>
                <h2 className='message'>Send me a message here!</h2>
                <form className='form'>
                    <label>
                        First and Last Name:
                        <input value={name} name='name' onChange={handleInputChange} type='text' placeholder='name here'/>
                    </label>
                    <br />
                    <label>
                        Email:
                        <input value={email} name='email' onChange={handleInputChange} type='text' placeholder='email@email here'/>
                    </label>
                    <br />
                    <label>
                        Message:
                        <br/>
                        <textarea value={comment} name='comment' onChange={handleInputChange} type='text' placeholder='enter your message here'/>
                    </label>
                    <br/>
                    <button className='align-self-center' type='button' onClick={handleFormSubmit}>submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}

            <Footer />
            </div>

    )
}