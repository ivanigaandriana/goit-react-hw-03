import { useState } from "react";
import css from "./SerchBox.module.css";
const SearchBox = ()=>{
    const [inputValue, setInputValue] = useState("");
    const handleChange =(evt)=>{
        setInputValue(evt.target.value);
    };
    return(
        <div className={css.searchBoxContainer}>
            <p>Find contacts by name</p>
            <input className={css.formInput} type="text" value={inputValue} onChange={handleChange}/>
            {/* <p>{inputValue}</p> */}
        </div>
    )
}
export default SearchBox;