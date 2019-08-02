import React from 'react';

const ApplicationComponentFull = () => {
  return(
    <div>
	  <nav className="nav nav-tabs" id="nav-tab" role="tablist">
		<a className="nav-item nav-link active"
		   id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
		   aria-controls="nav-home" aria-selected="true">General</a>
		<a className="nav-item nav-link"
		   id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
		   aria-controls="nav-profile" aria-selected="false">Functions</a>
		<a className="nav-item nav-link"
		   id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
		   aria-controls="nav-contact" aria-selected="false">Contact</a>
	  </nav>
	  <div className="tab-content" id="nav-tabContent">
		<div className="tab-pane fade show active" id="nav-home" role="tabpanel"
			 aria-labelledby="nav-home-tab">
		  
		</div>
		<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
		
		</div>
		<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
		
		</div>
	  </div>
	</div>
  );
};

export default ApplicationComponentFull;