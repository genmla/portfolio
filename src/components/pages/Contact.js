import { validateEmail } from "../../utils/helpers";
import React, { useState } from "react";
import img from "../../assets/images/Contact.jpg"

export default function Contact() {

    const [nameErrorClass, setNameErrorClass] = useState('invalid-feedback d-none');
    const [emailErrorClass, setEmailErrorClass] = useState('invalid-feedback d-none');
    const [messageErrorClass, setMessageErrorClass] = useState('invalid-feedback d-none');
    const [messageSubmitErrorClass, setMessageSubmitErrorClass] = useState('alert alert-danger d-none')
    const [messageEmptyErrorClass, setEmptySubmitErrorClass] = useState('alert alert-danger d-none')
    const [submitSuccessMessageClass, setSubmitMessageClass] = useState('alert alert-success d-none')

    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [messageValue, setMessageValue] = useState('')

    const handleOnBlur = (e) => {
        if (e.target.name === "name") {
            if (e.target.value === "") {
                setNameErrorClass('invalid-feedback d-block')
            }
            else {
                setNameErrorClass('invalid-feedback d-none')
                setNameValue(e.target.value)
            }
        }
        if (e.target.name === "email") {
            const emailValidate = validateEmail(e.target.value)
            if (!emailValidate) {
                setEmailErrorClass('invalid-feedback d-block')
            }
            else {
                setEmailErrorClass('invalid-feedback d-none')
                setEmailValue(e.target.value)
            }
        }
        if (e.target.name === "message") {
            if (e.target.value === "") {
                setMessageErrorClass('invalid-feedback d-block')
            }
            else {
                setMessageErrorClass('invalid-feedback d-none')
                setMessageValue(e.target.value)
            }
        }
    }

    const handleOnChange = (e) => {
        if (e.target.name === "name") {
            setNameValue(e.target.value)
        }
        if (e.target.name === "email") {
            setEmailValue(e.target.value)
        }
        if (e.target.name === "message") {
            setMessageValue(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nameErrorClass === "invalid-feedback d-block" || emailErrorClass === "invalid-feedback d-block" || messageErrorClass === "invalid-feedback d-block") {
            setMessageSubmitErrorClass('alert alert-danger d-block')
        }
        if (nameValue === "" || emailValue === "" || messageValue === "") {
            setEmptySubmitErrorClass('alert alert-danger d-block')
        }
        else {
            setNameValue("")
            setEmailValue("")
            setMessageValue("")
            setSubmitMessageClass('alert alert-success d-block')
        }
    }

    const blurSubmit = () => {
        setMessageSubmitErrorClass('alert alert-danger d-none')
        setSubmitMessageClass('alert alert-success d-none')
        setEmptySubmitErrorClass('alert alert-success d-none')
    }

    return (
        <div className="container-fluid">
            <div className="row m-4">
                <div className="col-1"></div>
                <div className="col-md">
                    <h2>Contact</h2>
                    <form id="conctactForm">
                        <div className="form-group mb-3">
                            <label for="contactForm">Name:</label>
                            <input type="text" className="form-control" placeholder="Name" name="name" value={nameValue} onChange={handleOnChange} onBlur={handleOnBlur}></input>
                            <div className={nameErrorClass} id="nameError" >
                                Name is required.
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <label for="contactForm">Email:</label>
                            <input type="email" className="form-control" placeholder="email@mail.com" name="email" value={emailValue} onChange={handleOnChange} onBlur={handleOnBlur}></input>
                            <div className={emailErrorClass} id="emailError">
                                Valid email is required.
                            </div>
                        </div>
                        <div className="form-group mb-5">
                            <label for="contactForm">Message:</label>
                            <textarea className="form-control" rows="5" name="message" value={messageValue} onChange={handleOnChange} onBlur={handleOnBlur}></textarea>
                            <div className={messageErrorClass} id="messageError">
                                Message is required.
                            </div>
                        </div>
                        <button type="submit" className="btn btn-secondary mb-3" onClick={handleSubmit} onBlur={blurSubmit}>Submit</button>
                        <div class={messageSubmitErrorClass} role="alert"> Please resolve the error messages above.
                        </div>
                        <div class={messageEmptyErrorClass} role="alert"> Please fill out all fields to submit the contact form.
                        </div>
                        <div class={submitSuccessMessageClass} role="alert"> Messaged submitted! Thanks for going out on a limb and reaching out! (Just kidding -- I'm going to respond. I just wanted the picture to make sense.)
                        </div>
                    </form>
                </div>
                <div className="col-md">
                    <img className="img-fluid rounded" src={img} alt="Genevieve at Starved Rock State Park"></img>
                </div>
            </div>
        </div>
    )
}