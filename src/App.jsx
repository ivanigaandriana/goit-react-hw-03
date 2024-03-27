// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SerchBox';
import ContactList from './components/ContactList/ContactList'
import users from "../users.json";
import './App.css'


function App() {
  

  return (
    <div>
      <h1 >Phonebook</h1>
     <div>
      <ContactForm/>
      <SearchBox/>
      <ContactList users={users}/>
     </div>
    </div>
  )
}

export default App
