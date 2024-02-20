import {useState, useEffect} from "react";

import "./styles.css";

import List from "./List";
import Form from "./Form";
function Contacts(){

    const [contacts, setContacts] = useState([
        {
            fullname:"Nursel",
            phone_number:"12345"
        },
        {
            fullname:"Cansu",
            phone_number:"3454645"
        }
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
    return(
        <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;