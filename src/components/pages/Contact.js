import React, { useState } from 'react';

const Contact = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');
    let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            default: return
            case 'username':
                if (value === "")
                    {setErrMessage('Error: Name cannot be blank.')
                }
                else {setErrMessage('')}
            return setUserName(value)
            case 'email':
                if (value === "")
                    {setErrMessage('Error: Email cannot be blank.')
                }
                else if (reg.test(value) === false)
                    {setErrMessage('Error: Not a valid email address.')
                }
                else {setErrMessage('')}
            return setEmail(value)
            case 'message':
                if (value === "")
                    {setErrMessage('Error: Message cannot be blank.')
                }
                else {setErrMessage('')}
            return setMessage(value)
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== "" && email !== "" && message !== "" && reg.test(email) === true){
            console.log(`${username}, ${email}, ${message}`);
        }
        else setErrMessage('Error: Please resolve issues.');

    }

    return (
        <div className='Contact'>
            <div className="ResumeTitle">Contact Me</div><br />
            <form>
                <label>Your Name:<br />
                    <input className='ContactForm'
                    type="text" 
                    name="username"
                    onChange={handleInputChange}
                    placeholder="First Last" />
                </label><br />
                <label>Your E-Mail Address:<br />
                <input className='ContactForm' 
                    type="email" 
                    name="email"
                    onChange={handleInputChange}
                    placeholder="name@email.com" />
                </label><br />
                <label>Message:<br />
                    <textarea className='ContactForm'
                        name="message"
                        onChange={handleInputChange}
                        placeholder="Enter Message Here..."
                    />
                </label><br />
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            <p className="Error">{errMessage}</p>
        </div>
    );
}

export default Contact;