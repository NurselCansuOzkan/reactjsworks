import { useFormik } from "formik";
import validations from "./validations";

function Signup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values, null, 2));
      console.log(formik.values);
    },
    validationSchema: validations,
  });
  console.log(formik.errors);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="error">{formik.errors.email}</div>
        )}
        <br />
        <br />
        <label>Password</label>
        <input
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <div className="error">{formik.errors.password}</div>
        )}

        <br />
        <br />
        <label>Password Confirm</label>
        <input
          name="passwordConfirm"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.passwordConfirm && formik.touched.passwordConfirm &&(
          <div className="error">{formik.errors.passwordConfirm}</div>
        )}

        <button type="submit">Submit</button>
        <br />
        <br />
        <code>{JSON.stringify(formik.values)}</code>
      </form>
    </div>
  );
}

export default Signup;
