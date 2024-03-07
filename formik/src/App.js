import { useFormik} from "formik";
import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: 'Nursel',
      lastName: 'Özkan',
      email: 'nurselcansuozkan@gmail.com',
      gender: "female",
          hobies: [],
          country: "turkey",
    },
    onSubmit: values => {
      alert(JSON.stringify(formik.values, null, 2));
      console.log(formik.values);

    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              placeholder="Jane"
              value={formik.values.firstName}
            />
            <br />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              placeholder="Doe"
              value={formik.values.lastName}
            />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <br />
            <br />

            <span>Male</span>
            <input
              id="gender"
              name="gender"
              value="male"
              type="radio"
              onChange={formik.handleChange}
              checked={formik.values.gender === "male"}
            />
            <span>Female</span>
            <input
              id="gender"
              name="gender"
              value="female"
              type="radio"
              onChange={formik.handleChange}
              checked={formik.values.gender === "female"}
            />
            <br />
            <br />
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Reading"
                onChange={formik.handleChange}
              />
              Reading
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Cinema"
                onChange={formik.handleChange}
              />
              Cinema
            </div>
            <div>
              <input
                type="checkbox"
                name="hobies"
                value="Photografy"
                onChange={formik.handleChange}
              />
              Photografy
            </div>

            <br />
            <br />

            <select name="country" onChange={formik.handleChange} value={formik.values.country}>
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="usa">USA</option>
            </select>
            <br />
            <br />

            <button type="submit">Submit</button>
            <br />
            <br />
            <code>{JSON.stringify(formik.values)}</code>
          </form>
      
    
    </div>
  );
}

export default App;
