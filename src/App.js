import './App.css';
import Contacts from './components/contacts/Contacts';
import Form from './components/form/Form';
import { useState } from 'react';

const initialValues = { 
  username:"",
  phoneNumber: "",
  gender: ""
}

function App() {

  const [info, setInfo] = useState(initialValues);
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} />
      <Contacts/>
    </div>
  );
}

export default App;
