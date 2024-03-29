
import css from "./ContactList.module.css";
function ContactList({ contacts, onDeleteContact }) {
    return (
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li className={css.contactListItem} key={contact.id}>
            <div className={css.contactListItemCont}>
           <div> {contact.name} </div>
           <div> {contact.number} </div></div>
            <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ContactList;