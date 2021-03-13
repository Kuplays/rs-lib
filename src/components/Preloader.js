import React from "react";
import "../custom-css/PreloaderStyle.css";

const Preloader = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <i className="fa fa-cog fa-spin fa-10x fa-fw preloader-color"></i>
            </div>
            <div className="row justify-content-center preloader-color">
                <h1>Подождите, идет загрузка...</h1>
            </div>
        </div>
    );
}

export default Preloader;