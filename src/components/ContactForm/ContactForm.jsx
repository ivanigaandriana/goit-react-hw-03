import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number:Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  });

const initialValues ={
    name:"",
    number:"",
};
const ContactForm = ()=>{
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};
    return(
<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
<Form >
    <div className={css.formList}>
<label className={css.formLabel} htmlFor={nameFieldId}>Name</label>
    <Field  className={css.formField} type="text" name="name" id={nameFieldId}/>
    <ErrorMessage name="name" as="span" />
    </div>
    <div  className={css.formList}>
    <label className={css.formLabel} htmlFor={numberFieldId}>Number</label>
    <Field className={css.formField} type="number" name="number" id={numberFieldId}/>
    <ErrorMessage name="number" as="span" />
    </div>
    
    <button type="submit">Add contact</button>
</Form>
</Formik>
    );
}
export default ContactForm;