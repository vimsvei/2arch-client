import React, {useState} from 'react';
import {Card} from "../common";
import {ApplicationComponentGeneral} from "../application-component";

const CreateApplicationComponent = () => {
  const [value, setValue] = useState('');
  
  const onAction = () => {
    console.log('Click on Action button');
  };
  
  const onCancel = () => {
    console.log('Click on Cancel button');
  };
  
  return(
    <Card header="Application Component"
          subHeader="create"
          captionOnAction="Создать"
          onAction={onAction}
          onCancel={onCancel}
          form={<ApplicationComponentGeneral/>}/>
  );
};

export default CreateApplicationComponent;
