// import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";


const ContactForm = ({onAddContact})=>{
    const initialValues = {
        name: '',
        number: ''
    };
 const handleSubmit = (values, {resetForm}) => {
		
        onAddContact(values.name, values.number);
        resetForm();
	};
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number:Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
      });
    
    
    
    return(
<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
<Form >
    <div className={css.formList}>
<label className={css.formLabel} >Name</label>
{/* htmlFor={nameFieldId} */}
    <Field  className={css.formField} type="text" name="name"  /> 
    {/* id={nameFieldId} */}
    <ErrorMessage name="name" component='p' className={css.formikMes} />
    </div>
    <div  className={css.formList}>
    <label className={css.formLabel} >Number</label>
    {/* htmlFor={numberFieldId} */}
    <Field className={css.formField} type="number" name="number" />
    {/* id={numberFieldId} */}
    <ErrorMessage name="number" component='p' className={css.formikMes} />
    </div>
    
    <button type="submit">Add contact</button>
</Form>
</Formik>
    );
}
export default ContactForm;