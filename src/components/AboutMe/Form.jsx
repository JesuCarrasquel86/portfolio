import React from 'react'
import { useForm } from '../../hooks/useForm/useForm'

export const Form = () => {

    const [values, handleInputChange, reset] = useForm({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = values

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        reset()
    }

    return (
        <div className="form">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-xs-12 text-center">
                        <h2 className="title">Let's Talk</h2>
                        <hr className="line" />
                    </div>
                    <div className="col-md-1 col-xs-12" />
                    <div className="col-md-10 col-sm-12 col-xs-12 text-center">
                        <form id="form" onSubmit={handleSubmit}>
                            <input type="text" className="text" name="name" value={name} placeholder="NAME" required onChange={handleInputChange} /><br />
                            <input type="text" className="email" name="email" value={email} placeholder="EMAIL" required onChange={handleInputChange} /><br />
                            <textarea className="msg" name="message" value={message} placeholder="MESSAGE" required onChange={handleInputChange} />
                            <button className="btn" type='submit'>SEND MESSAGE</button>
                        </form>
                    </div>
                    <div className="col-md-1 col-xs-12" />
                </div>
            </div>
        </div>
    )
}
