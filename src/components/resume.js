import React from 'react';

function Resume() {
  return (
<div >

<div class = "ml-2 d-flex flex-column align-items-center " >
	<h2 className="mb-3 mt-2">Resume</h2>	

	<h5 className ="mb-3">Download my resume <a href='https://drive.google.com/uc?export=download&id=1Fd0arp8CP_fqOVNr8cQ-CUGoACPA-OFw'>here!</a></h5>

	<h5  >Front-End Proficiencies</h5>
	<ul>
	<li>HTML</li>
	<li>CSS</li>
	<li>JavaScript</li>
	<li>jQuery</li>
	<li>responsive design</li>
	<li>React</li>
	<li>Bootstrap</li>
	</ul>

	<h5 >Back-End Proficiencies</h5>
	<ul>
	<li>APIs</li>
	<li>Node</li>
	<li>Express</li>
	<li>MySQL, Sequelize</li>
	<li>MongoDB, Mongoose</li>
	<li>REST</li>
	<li>GraphQL</li>
	</ul>
</div>

</div> 




  );
}

export default Resume;