import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({users})=>{
    return(
        <ul className={css.contactList}>
            {users.map(user =>(
                <li key= {user.id} className={css.contactListItem}>
                    <Contact 
                    name={user.name}
                    number={user.number}/>
                </li>
            ))}
        </ul>
    );
};
export default ContactList;