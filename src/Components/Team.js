import React from "react";

function Team(props) {
  return (
    <div className="col mb-2">
      <div className="card text-center border-0">
        <img
          src={props.image}
          className="card-img-top rounded-circle img-thumbnail mx-auto"
          style={{ width: 10 + "rem" }}
          alt="User"
        />
        <div className="card-body">
          <p className="card-text font-weight-bold">{props.name}</p>
          <p className="card-text">{props.job}</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
