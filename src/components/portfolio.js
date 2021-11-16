import React from 'react';
import Project from './project'



function Portfolio() {

const projectInfo = [

{
name: "Sto Yo Code",
link: 'https://stoyocode.herokuapp.com/',
githubLink: 'https://github.com/Brendan838/Project_2',
image: "../assets/stoyo.png"
},
{
name: "Gifficult",
link: 'https://brendan838.github.io/groupProject_teamSoFetch/',
githubLink: 'https://github.com/Brendan838/groupProject_teamSoFetch',
image: "../assets/gifficult.png"
},
{
name: "Tech Blog",
link: 'https://techblog1031.herokuapp.com/',
githubLink: 'https://github.com/Brendan838/techBlog',
image: "../assets/techBlog.png"
},
{
name: "Employee Tracker",
link: 'https://github.com/Brendan838/employeeTracker',
githubLink: 'https://github.com/Brendan838/employeeTracker',
image: "../assets/employeeTracker.png"
},
{
name: "Weather App",
link: 'https://github.com/Brendan838/weather_app' ,
githubLink: 'https://brendan838.github.io/weather_app/',
image: "../assets/weatherApp.png"
},
{
name: "Team Profile Generator",
link: 'https://github.com/Brendan838/team_profile_generator',
githubLink: 'https://github.com/Brendan838/team_profile_generator',
image: "../assets/teamProfileGenerator.png"
}
]

  return (
<div class="container d-flex flex-column align-items-center justify-content-between portfolio-page" >
  <div class="row">
	<Project info = {projectInfo[0]}/>
  	<Project info = {projectInfo[1]}/>
  </div>
 
<div class="row">
	<Project info = {projectInfo[2]}/>
  	<Project info = {projectInfo[3]}/>
  </div>

<div class="row">
	<Project info = {projectInfo[4]}/>
  	<Project info = {projectInfo[5]}/>
  </div>

</div>


  );
}

export default Portfolio;