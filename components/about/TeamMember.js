import React from "react";

const TeamMember = ({ src, name, designation, bio }) => (
  <div className="col-md-4 col-sm-6">
    <div className="person">
      <img src={src} className="person__avi" alt="person avi" />
      <h4 className="person__name">{name}</h4>
      <span className="person__designation">{designation}</span>
      <p className="person__bio">{bio}</p>
    </div>
  </div>
);

export default TeamMember;
