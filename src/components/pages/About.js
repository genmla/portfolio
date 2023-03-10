import React from "react";
import img from '../../assets/images/About3.jpg'

export default function About() {
    return (
        <div className="container-fluid" id="about">
            <div class="container text-center">
                <div className="row pt-4">
                    <div className="col-lg">
                        <h2>ABOUT</h2>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-md">
                        <img className="img-fluid rounded" src={img} alt="Genevieve Mladenka at Chain-O-Lakes State Park" id="img"></img>
                    </div>
                    <div className="card col-md" id="card">
                        <div className="card-body" id="about-card">
                            <h4 className="card-title mb-2">Background</h4>
                            <p className="card-text">I grew up in what was once a town outside but is now a sub-burb of Austin, Texas. My Texas roots are stubborn enough to follow me to Chicago, where I work in higher education as an admissions adviser. I have years of experience in managing communications for my department, and I am looking to leverage my full-stack web development skills after graduating from the comprehensive Northwestern University 6-month bootcamp.</p>
                            <h4 className="card-title mt-3 mb-2">Education</h4>
                            <h6 className="card-subtitle mt-1 mb-1">Technical</h6>
                            <p className="card-text">Full-Stack Web Development, Northwestern University
                                <h6 className="card-subtitle mt-1 mb-1">Academic</h6>
                                M.A., Humanities, the University of Chicago
                                <br></br>
                                B.A., English, the University of Texas at Austin</p>
                            <h4 className="card-title mt-3 mb-2">Hobbies</h4>
                            <h6 className="card-subtitle mb-1">Activities</h6>
                            <p className="card-text">Camping, exploring, woodworking, gardening, painting, ice cream-making, folk music, archery</p>
                            <h6 className="card-subtitle mb-1">Instruments</h6>
                            <p className="card-text">Fiddle, Guitar, Ukulele, Mandolin, Banjo</p>
                            <h6 className="card-subtitle mb-1">Spoken Languages</h6>
                            <p className="card-text">French, Spanish, Czech</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}