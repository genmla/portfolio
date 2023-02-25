import React from "react";

export default function Contact() {
    return (
        <div className="container">
            <div className="row">
                <h2>Contact</h2>
            </div>
            <div className="row">
                <form>
                    <div className="form-group">
                        <label for="contactForm">Name:</label>
                        <input type="text" className="form-control" placeholder="Name"></input>
                        <div className="invalid-feedback">Please enter a name so we can respond</div>
                    </div>
                    <div className="form-group">
                        <label for="contactForm">Email:</label>
                        <input type="email" className="form-control" placeholder="email@mail.com"></input>
                        <div className="invalid-feedback">Please enter a valid email address</div>
                    </div>
                    <div className="form-group">
                        <label for="contactForm">Message:</label>
                        <textarea className="form-control" rows="3"></textarea>
                        <div className="invalid-feedback">Please enter a name so we can respond</div>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
            </div>
        </div>
    )
}