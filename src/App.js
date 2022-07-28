import './App.css';
import Contacts from './components/contacts/Contacts';
import Form from './components/form/Form';
import { useState } from 'react';
import { addUser, editUser } from './utils/functions';
import { ToastContainer } from 'react-toastify';

const initialValues = { 
  username:"",
  phoneNumber: "",
  gender: ""
}

function App() {

  const [info, setInfo] = useState(initialValues);
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(info.id){
      editUser(info)
      setIsEditing(false)
    }else{
      addUser(info)
    }
    setInfo(initialValues)

  }

  const handleEdit = (id,username,phoneNumber,gender) => {
    setInfo({id,username,phoneNumber,gender})
    setIsEditing(true)
  }
  return (
    <div className="App">
      <Form info={info} setInfo={setInfo} handleSubmit={handleSubmit} isEditing={isEditing} />
      <Contacts handleEdit={handleEdit}/>
      <ToastContainer />
    </div>
  );
}

export default App;
