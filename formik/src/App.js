import { Formik } from "formik";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: "Nursel",
          lastName: "Özkan",
          email: "nurselcansuozkan@gmail.com",
          gender: "female",
          hobies: [],
          country: "turkey",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              onChange={handleChange}
              placeholder="Jane"
              value={values.firstName}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              onChange={handleChange}
              placeholder="Doe"
              value={values.lastName}
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <br />
            <br />

            <span>Male</span>
            <input
              id="gender"
              name="gender"
              value="male"
              type="radio"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>Female</span>
            <input
              id="gender"
              name="gender"
              value="female"
              type="radio"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Reading"
                onChange={handleChange}
              />
              Reading
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={handleChange}
              />
              Cinema
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Photografy"
                onChange={handleChange}
              />
              Photografy
            </div>

            <br />
            <br />

            <select name="country" onChange={handleChange} value={values.country}>
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="usa">USA</option>
            </select>
            <br />
            <br />

            <button type="submit">Submit</button>
            <br />
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
