import React, {useState, useEffect} from 'react';
import {Input, TextArea} from "../common";
import {ArchitectState} from '../directory-lists';
import {useForm} from "../hook";

const ApplicationComponentGeneral = () => {
  const [name, setName] = useState('name-1');
  const [code, setCode] = useState('code-2');
  const [state, setState] = useState('state-3');
  
  const {inputs, handleInputChange} = useForm();
  
  console.log(inputs);
  
  return(
    <form>
	  <Input
		name="name"
		value={inputs.name}
		onChange={handleInputChange}
		caption="Наименование"
		placeholder="Введите наименование компонента"
	  />
	  <Input
		name="code"
		value={inputs.code}
		onChange={handleInputChange}
		caption="Код"
		placeholder="Введите код компонента"
	  />
	  <TextArea
		name="state"
		caption="Описание компонента"
	  />
	  <ArchitectState
		name="state"
		value={state}
		onChange={handleInputChange}
		caption="Текущее состояние"
		header="Выберите состояние компонента..."
	  />
	</form>
  );
};

export default ApplicationComponentGeneral;
