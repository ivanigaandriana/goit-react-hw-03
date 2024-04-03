import css from "./Contact.module.css";
// import {contacts}from "../contacts.json";
function Contact({ id, name, number, onDeleteContact }) {
   const handleDelete = () => {
     onDeleteContact(id);
   };
 
   return (
     <div className={css.contactContainer}>
       <div className={css.contactItem}>
         <span>{name}</span> 
         <span>{number}</span>
       </div>
       <button onClick={handleDelete}>Delete</button>
     </div>
   );
 }
 
 export default Contact;