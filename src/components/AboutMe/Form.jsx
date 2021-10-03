import React, { useRef } from 'react';

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FormContact = () => {

    const form = useRef()

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
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                message: ''
                            }}
                            validate={(values) => {
                                let errors = {}

                                if (!values.name) {
                                    errors.name = 'Please insert a name'
                                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                                    errors.name = 'Name can only contain letters and spaces'
                                }

                                if (!values.email) {
                                    errors.email = 'Please insert a email'
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                    errors.email = 'Invalid email'
                                }

                                return errors
                            }}
                            onSubmit={(values, { resetForm }) => {
                                emailjs.sendForm('service_b07zacw', 'template_0qm1286', form.current, 'user_kLrcXkqPG3oaxYNlTppYX')
                                    .then(Swal.fire({
                                        title: 'Email Sent',
                                        icon: 'success',
                                    }))
                                resetForm()
                            }}
                        >
                            {({ errors }) => (
                                <Form
                                    ref={form}
                                >
                                    <div>
                                        <Field
                                            type="text"
                                            className="text"
                                            id="name"
                                            name="name"
                                            placeholder="NAME"
                                        />
                                        <ErrorMessage name='name' component={() => (<p>{errors.name}</p>)} />
                                    </div>

                                    <div>
                                        <Field
                                            type="text"
                                            className="email"
                                            id="email"
                                            name="email"
                                            placeholder="EMAIL"
                                        />
                                    </div>
                                    <ErrorMessage name='email' component={() => (<p>{errors.email}</p>)} />
                                    <div>
                                        <Field
                                            as='textarea'
                                            className="msg"
                                            id="message"
                                            name="message"
                                            placeholder="MESSAGE"
                                        />
                                    </div>

                                    <button className="btn" type='submit'>SEND MESSAGE</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col-md-1 col-xs-12" />
                </div>
            </div>
        </div>
    )
}
