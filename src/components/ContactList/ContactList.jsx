
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
function ContactList({ contacts, onDeleteContact }) {
    return (
      <ul className={css.contactList}>
        {contacts.map(contact => (
           <li className={css.contactListItem} key={contact.id}>
           <Contact
             id={contact.id}
             name={contact.name}
             number={contact.number}
             onDeleteContact={onDeleteContact}
           />
         </li>
        ))}
      </ul>
    );
  }
  
  export default ContactList;