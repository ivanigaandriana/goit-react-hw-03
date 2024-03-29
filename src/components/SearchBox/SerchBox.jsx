// import { useState } from "react";
import css from "./SerchBox.module.css";
const SearchBox = ({value, onChange})=>{
    return(
        <div className={css.searchBoxContainer}>
            <p>Find contacts by name</p>
            <input className={css.formInput} type="text" value={value} onChange={onChange} placeholder="Search Contacts..."/>
            {/* <p>{inputValue}</p> */}
        </div>
    );
};
export default SearchBox;
