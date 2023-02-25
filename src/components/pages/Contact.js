import React from "react";

export default function Contact() {
    return (
        <div className="container-fluid">
            <div className="row m-4">
            <div className="col-1"></div>
                <div className="col-6">
                    <h2>Contact</h2>
                    <form>
                        <div className="form-group mb-3">
                            <label for="contactForm">Name:</label>
                            <input type="text" className="form-control" placeholder="Name"></input>
                            <div className="invalid-feedback">Please enter a name so we can respond</div>
                        </div>
                        <div className="form-group mb-3">
                            <label for="contactForm">Email:</label>
                            <input type="email" className="form-control" placeholder="email@mail.com"></input>
                            <div className="invalid-feedback">Please enter a valid email address</div>
                        </div>
                        <div className="form-group mb-5">
                            <label for="contactForm">Message:</label>
                            <textarea className="form-control" rows="5"></textarea>
                            <div className="invalid-feedback">Please enter a name so we can respond</div>
                        </div>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}