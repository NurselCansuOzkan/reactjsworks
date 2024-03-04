import { useEffect, useState } from "react";

const initialValues = { name: "", checked: "" };
function Form({ items, addItem }) {
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  }, [items]);

  //form inputu
  const onChangeInputAdd = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //form submit - listeye ekleme
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.name === "") {
      return false;
    }

    addItem([...items, form]);
    console.log(form);
  };

  const handleChangeCheckAll = () => {
    console.log("The all checkbox was toggled");
  };
  const handleChangeCheck = (key) => (e) => {
    addItem((current) =>
      current.map((item) => ({
        ...item,
        checked: item.name === key ? e.target.checked : item.checked,
      }))
    );
  };

  const onDelete = (key) => () => {
    addItem((current) => current.filter((_item) => _item.name !== key));
  };

  const onClearCompleted = () => {
    addItem((current) => current.filter(_item => _item.checked !== true));
  }

  const onFilterActive = (e) => {
    addItem((items)=>items.filter(_item =>_item.checked === false));
  }
  const onFilterCompleted = (e) => {
    addItem((items)=>items.filter(_item =>_item.checked === true));
  }
  const onFilterAll = (e) => {
    addItem([...items]);
  }
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmit}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              onChange={onChangeInputAdd}
              value={form.name}
              name="name"
              autoFocus
            />
          </form>
        </header>

        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={handleChangeCheckAll}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {items.map((item, i) => (
              <li key={i} className={item.checked ? "completed" : ""}>
                <div className="view">
                  <input
                    className="toggle"
                    name="checked"
                    type="checkbox"
                    onChange={handleChangeCheck(item.name)}
                  />
                  <label>{item.name}</label>
                  <button
                    className="destroy"
                    onClick={onDelete(item.name)}
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{items.length}</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" onClick={onFilterAll} className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/" onClick={onFilterActive}>Active</a>
            </li>
            <li>
              <a href="#/" onClick={onFilterCompleted}>Completed</a>
            </li>
          </ul>

          <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default Form;
