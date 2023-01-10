import React from "react";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {!props.bio === null || props.bio === "" ? null : <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.gitHub}>github</a>
      <a href={props.linkedIn}>linkedin</a>
    </div>
  );
}

export default About;
