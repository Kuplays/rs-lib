import React from 'react';
import faker from 'faker';

const User = () => {
    return (
        <div>
            <div className="row p-2">
                <div className="col-md-3">
                    <img className="img-fluid img-thumbnail" src={faker.image.people()} alt="" />
                </div>
                <div className="col-md">
                    <h1>{faker.name.firstName()} {faker.name.lastName()}</h1>
                    <h4>{faker.name.jobTitle()}</h4>
                    <p>{faker.lorem.paragraph()}</p>
                </div>
            </div>
        </div>
    );
};

export default User;