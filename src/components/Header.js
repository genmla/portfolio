import React from "react";
import Navigation from "./Navigation";

//setting props to use in the Portfolio container
export default function Header(props) {
    //props called the same as variables in Portfolio container so useState for page rendering can work
    const { currentPage, handlePageChange } = props;

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="p-3">
                    <h1>
                        Genevieve Mladenka
                    </h1>
                </div>
                <div>
                    <Navigation
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}