import React from 'react';
import './welcome.css';
import ArchitectState from "../directory-lists/archetecture-state";
import CreateApplicationComponent from "../dialogues/create-application-component";

const Welcome = () => {
  console.log('Welcome');
  return(
    <div>
      <CreateApplicationComponent/>
    </div>
  );
};

export default Welcome;
