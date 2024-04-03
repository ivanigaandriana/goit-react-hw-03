import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SerchBox'
import initialContacts from '../contacts.json'
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    
    // Перевірка, чи є збережені контакти
    if (savedContacts  && savedContacts.length > 0) {
      // Якщо є, встановити їх як поточний стан контактів
      setContacts(savedContacts);
    } else {
      // Якщо немає збереже их контактів, встановити початкові контакти
      setContacts(initialContacts);
      localStorage.setItem('contacts', JSON.stringify(initialContacts)); 
    }
  }, []);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    };
    // Оновлюємо стан контактів і зберігаємо їх у локальному сховищі
    setContacts(prevContacts => [...prevContacts, newContact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact])); 
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  )

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onChange={e => setFilter(e.target.value)} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;