import React from "react";
import teamMembers from "../../lib/team";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <section className="section ">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col">
            <h2 className="h1">The Team</h2>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
