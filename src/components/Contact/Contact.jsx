 import css from "./Contact.module.css"
 const Contact = ({name, number})=>{
    return(
        <div className={css.contactContainer}>
            <div className={css.contactContent}>
            <div>
                <a href=""></a>
                <div>{name}</div>
            </div>
            <div>
                <a href=""></a>
                <div>{number}</div>
                </div>
            </div>
            <button type="button">Delete</button>
        </div>
    )
 }
 export default Contact;