import { useState } from "react";

function InputExample() {
  //   const [name, setName] = useState("");
  //   const [surname, setSurname] = useState("");

  //   const onChangeName = (event) => {
  //     setName(event.target.value);
  //   };

  //   const onChangeSurname = (event)=>{
  //     setSurname(event.target.value);
  //   }

  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (e) => {
    console.log(e.target.name);
    setForm({...form, [e.target.name]: e.target.value})
  };

  return (
    <div>
      Name <br />
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      <br />
      Surname <br />
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      {form.name} {form.surname}
    </div>
  );
}

export default InputExample;
