import React from "react";
import img from '../../assets/images/About3.jpg'

export default function About() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-md">
                    <img className="img-fluid rounded" src={img} alt="Genevieve Mladenka at Chain-O-Lakes State Park"></img>
                </div>
                <div className="card col-md pt-5">
                    <div className="card-body" id="about-card">
                        <h2 className="card-title pt-3">About</h2>
                        <h6 className="card-subtitle mt-3 mb-2 text-muted">Bakckground</h6>
                        <p className="card-text">I grew up in what was once a town outside but is now a sub-burb of Austin, Texas. My Texas roots are stubborn enough to follow me to Chicago, where I work in higher education as an admissions adviser. I have years of experience in managing communicaitons for my department, and I am looking to leverage my full-stack web development skills after gradauting from the comprehensive Northwestern University 6-month bootcamp program.</p>
                        <h6 className="card-subtitle mt-3 mb-2 text-muted">Education</h6>
                        <p className="card-text">Certificate in Full-Stack Web Development from Northwestern Univeristy
                            <br></br>
                            Master of Arts in Humanities from the University of Chicago
                            <br></br>
                            Bachelor of Arts in English from the University of Texas at Austin</p>
                        <h6 className="card-subtitle mt-3 mb-2 text-muted">Hobbies</h6>
                        <p className="card-text">Camping, wood-working, gardening, painting, ice cream-making, exploring</p>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}