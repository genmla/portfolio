import React from "react";
import Project from "./Project"
import cannyImg from "../../assets/images/canny-resize.jpg";
import cannyImgBlur from "../../assets/images/canny-resizeBlur.jpg";
import noteImg from "../../assets/images/noteTaker.jpg";
import noteImgBlur from "../../assets/images/noteTakerBlur.jpg";
import weatherImg from "../../assets/images/weatherDashboard-resize.jpg";
import weatherImgBlur from "../../assets/images/weatherDashboard-resizeBlur.jpg";
import techImg from "../../assets/images/techBlog-resize.jpg";
import techImgBlur from "../../assets/images/techBlog-resizeBlur.jpg";
import issImg from "../../assets/images/issTracker-resize.jpg";
import issImgBlur from "../../assets/images/issTracker-resizeBlur.jpg";
import workdayImg from "../../assets/images/workday-resize.jpg"
import workdayImgBlur from "../../assets/images/workday-resizeBlur.jpg"



export default function Portfolio() {

    const canny = {
        title: "C.A.N.N.Y.",
        description: "A crowd-sourced travel database where users post and comment on cheap and neat places in the area",
        img: `${cannyImg}`,
        imgBlur: `${cannyImgBlur}`,
        app: "https://canny.herokuapp.com/",
        github: "https://github.com/CannyCreators/canny",
        techs: "JavaScript, NoSQL, Sequelize, Express, HTML, BULMA, Node"
    };

    const techBlog = {
        title: "Tech Blog",
        description: "A WordPress-style blog where users can post, comment on, and delete simple blogs",
        img: `${techImg}`,
        imgBlur: `${techImgBlur}`,
        app: "https://shielded-scrubland-44984.herokuapp.com/",
        github: "https://github.com/genmla/nu-coding-challenge-14",
        techs: "JavaScript, NoSQL, Sequelize, Express, HTML, BULMA, Node"
    };

    const noteTaker = {
        title: "Note Taker",
        description: "A simple note taker app utilizing server-side database for writing, saving, and deleting notes",
        img: `${noteImg}`,
        imgBlur: `${noteImgBlur}`,
        app: "https://nu-coding-challenge-note-taker.herokuapp.com/",
        github: "https://github.com/genmla/nu-coding-challenge-11",
        techs: "JavaScript, Express, Node, HTML, Bootstrap"
    };

    const issTracker = {
        title: "I.S.S. Tracker News",
        description: "This app tracks the locaiton of the I.S.S. and retrives news articles from its location on earth",
        img: `${issImg}`,
        imgBlur: `${issImgBlur}`,
        app: "https://teamjustalright.github.io/iss-tracker/",
        github: "https://github.com/teamJustAlright/iss-tracker",
        techs: "JavaScript, JQuery, BULMA, APIs, HTML, Bootstrap"

    }

    const workdayCalendar = {
        title: "Work Day Calendar",
        description: "This is a simple application where users can schedule calendar items throughout the workday every hour",
        img: `${workdayImg}`,
        imgBlur: `${workdayImgBlur}`,
        app: "https://genmla.github.io/nu-coding-challenge-05/",
        github: "https://github.com/genmla/nu-coding-challenge-05",
        techs: "APIs, JavaScript, JQuery, Moment.js, HTML, CSS"
    }

    const weatherDashboard = {
        title: "Weather Dashboard",
        description: "This applicaiton uses a 3rd-party weather API for users to find a five-day forecast of their searched city",
        img: `${weatherImg}`,
        imgBlur: `${weatherImgBlur}`,
        app: "https://genmla.github.io/nu-coding-challenge-06/",
        github: "https://github.com/genmla/nu-coding-challenge-06",
        techs: "JavaScript, Express, APIs, HTML, Moment.js, Bootstrap"
    }

    return (
        <div className="container-fluid" id="portfolio">
            <div class="container text-center">
                <div className="row pt-4">
                    <div className="col-lg">
                        <h2>PORTFOLIO</h2>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-lg">
                        <br></br>
                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col">
                                <Project
                                    title={canny.title} description={canny.description} img={canny.img} imgBlur={canny.imgBlur} app={canny.app} github={canny.github} techs={canny.techs} />
                            </div>
                            <div class="col">
                                <Project
                                    title={noteTaker.title} description={noteTaker.description} img={noteTaker.img} imgBlur={noteTaker.imgBlur} app={noteTaker.app} github={noteTaker.github} techs={noteTaker.techs} />
                            </div>
                            <div class="col">
                                <Project
                                    title={techBlog.title} description={techBlog.description} img={techBlog.img} imgBlur={techBlog.imgBlur} app={techBlog.app} github={techBlog.github} techs={techBlog.techs} />
                            </div>
                            <div class="col">
                                <Project
                                    title={issTracker.title} description={issTracker.description} img={issTracker.img} imgBlur={issTracker.imgBlur} app={issTracker.app} github={issTracker.github} techs={issTracker.techs} />
                            </div>
                            <div class="col">
                                <Project
                                    title={weatherDashboard.title} description={weatherDashboard.description} img={weatherDashboard.img} imgBlur={weatherDashboard.imgBlur} app={weatherDashboard.app} github={weatherDashboard.github} techs={weatherDashboard.techs} />
                            </div>
                            <div class="col">
                                <Project
                                    title={workdayCalendar.title} description={workdayCalendar.description} img={workdayCalendar.img} imgBlur={workdayCalendar.imgBlur} app={workdayCalendar.app} github={workdayCalendar.github} techs={workdayCalendar.techs} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}