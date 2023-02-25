import React from "react";
import file from "../../assets/files/Resume.pdf"

export default function Resume() {
    return (
        <div className="container-fluid">
            <div className="row m-4">
                <div className="col-1"></div>
                <div className="col-md">
                    <div className="row">
                        <h2>Resume</h2>
                        <div className="col-md mt-3 mb-3">
                            <h4>Front-End Proficiencies</h4>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">React</li>
                                <li class="list-group-item">Javascript</li>
                                <li class="list-group-item">JQuery</li>
                                <li class="list-group-item">HTML</li>
                                <li class="list-group-item">CSS</li>
                                <li class="list-group-item">Bootstrap</li>
                                <li class="list-group-item">BULMA</li>
                                <li class="list-group-item">responsive design</li>
                            </ul>
                        </div>
                        <div className="col-md mt-3">
                            <h4>Back-End Proficiencies</h4>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">APIs</li>
                                <li class="list-group-item">Node</li>
                                <li class="list-group-item">Express</li>
                                <li class="list-group-item">MySQL, Sequelize</li>
                                <li class="list-group-item">MongoDB, Mongoose</li>
                                <li class="list-group-item">REST</li>
                                <li class="list-group-item">GraphQL</li>
                            </ul>
                        </div>
                        <div className="col-md mt-3 mb-3">
                            <h4>Developer Tools</h4>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Progressive Web Applications</li>
                                <li class="list-group-item">Webpack</li>
                                <li class="list-group-item">MERN</li>
                                <li class="list-group-item">Insomnia</li>
                                <li class="list-group-item">Apollo</li>
                                <li class="list-group-item">Git</li>
                            </ul>
                        </div>
                        <h6><a href={file} download>Download Genevieve's resume</a></h6>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}