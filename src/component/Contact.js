import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // Пеш аз фиристодан санҷед, ки ҳама майдонҳо пур шудаанд
        if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
            setErrorMessage('Пожалуйста, заполните все поля');
            return;
        }

        try {

            const response = await axios.post('http://localhost:5000/contact', formData);
            if (response.status === 201) {
                setSuccessMessage('Сообщение успешно отправлено!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
            }
        } catch (error) {
            console.log('Error details:', error); // Лог кардани хато
            setErrorMessage('Error sending message. Please try again.');
        }
    };

    return (
        <div className="container mt-5 p-5" style={{ backgroundColor: '#212529', borderRadius: '10px' }}>
            <h1 className="text-center text-white">Contact With Us</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Write your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    style={{ backgroundColor: '#2e2e2e', color: '#fff', border: 'none', padding: '15px' }}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    style={{ backgroundColor: '#2e2e2e', color: '#fff', border: 'none', padding: '15px' }}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    style={{ backgroundColor: '#2e2e2e', color: '#fff', border: 'none', padding: '15px' }}
                                />
                            </div>
                            <div className="col-md-6">
                                <select
                                    name="service"
                                    className="form-select"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                    style={{ backgroundColor: '#2e2e2e', color: '#fff', border: 'none', padding: '15px' }}
                                >
                                    <option value="" hidden>Select a service</option>
                                    <option value="Consulting">Consulting</option>
                                    <option value="Development">Development</option>
                                    <option value="Support">Support</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleInputChange}
                                style={{ backgroundColor: '#2e2e2e', color: '#fff', border: 'none', padding: '15px' }}
                            ></textarea>
                        </div>

                        {/* Паёми хатогӣ ё муваффақият */}
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}

                        <button
                            type="submit"
                            className="btn btn-warning w-100 text-uppercase"
                            style={{ padding: '15px', fontWeight: 'bold' }}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

