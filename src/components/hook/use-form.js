import React, {useState} from 'react';

const useForm = (callback) => {
  const [inputs, setInputs] = useState({});
  
  const handleInputChange = (event) => {
	event.persist();
	setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
	console.log(event, inputs);
  };
  return {
	handleInputChange,
	inputs
  };
};

export default useForm;
