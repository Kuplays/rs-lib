import React from "react";

const AddBookPlaceholder = ({toggleAddForm, requestType}) => {
    return (
        <a className="text-decoration-none" href="#" onClick={() => {toggleAddForm(true); requestType("ADD")}}>
            <div className="col mb-2 mt-2">
            <div className="card shadow-lg">
                <div className="card-body">
                    <div className="row justify-content-center">
                        <i className="far fa-plus-square fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
        </a>
    );
}

export default AddBookPlaceholder;