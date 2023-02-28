import React from "react";
import file from "../../assets/files/Resume.pdf"

export default function Resume() {
    return (
        <div className="container-fluid" id="resume">
            <div class="container text-center">
                <div className="row pt-4">
                    <div className="col-lg">
                        <h2>RESUME</h2>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-md" id="list-container">
                        <div className="row">
                            <div className="col-md mt-3 mb-3">
                                <h4>Front-End Proficiencies</h4>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item" id="resumeList">React</li>
                                    <li class="list-group-item" id="resumeList">Javascript</li>
                                    <li class="list-group-item" id="resumeList">JQuery</li>
                                    <li class="list-group-item" id="resumeList">HTML</li>
                                    <li class="list-group-item" id="resumeList">CSS</li>
                                    <li class="list-group-item" id="resumeList">Bootstrap</li>
                                    <li class="list-group-item" id="resumeList">BULMA</li>
                                    <li class="list-group-item" id="resumeList">responsive design</li>
                                </ul>
                            </div>
                            <div className="col-md mt-3">
                                <h4>Back-End Proficiencies</h4>
                                <ul class="list-group list-group-flush" id="resumeList">
                                    <li class="list-group-item" id="resumeList">APIs</li>
                                    <li class="list-group-item" id="resumeList">Node</li>
                                    <li class="list-group-item" id="resumeList">Express</li>
                                    <li class="list-group-item" id="resumeList">MySQL, Sequelize</li>
                                    <li class="list-group-item" id="resumeList">MongoDB, Mongoose</li>
                                    <li class="list-group-item" id="resumeList">REST</li>
                                    <li class="list-group-item" id="resumeList">GraphQL</li>
                                </ul>
                            </div>
                            <div className="col-md mt-3 mb-3">
                                <h4>Developer Tools</h4>
                                <ul class="list-group list-group-flush" id="resumeList">
                                    <li class="list-group-item" id="resumeList">Progressive Web Applications</li>
                                    <li class="list-group-item" id="resumeList">Webpack</li>
                                    <li class="list-group-item" id="resumeList">MERN</li>
                                    <li class="list-group-item" id="resumeList">Insomnia</li>
                                    <li class="list-group-item" id="resumeList">Apollo</li>
                                    <li class="list-group-item" id="resumeList">Git</li>
                                </ul>
                            </div>
                            <h5><a href={file} download id="link">Download Genevieve's resume</a></h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}