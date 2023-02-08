import { useState, useContext } from "react"; //to track actual input inside of these inputs into form component.
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

import "./sign-up-form.styles.scss";

//initialize value for four values,which should be all empty strings,to generic size 'handleChange'
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); //useState to call form fields
  const { displayName, email, password, confirmPassword } = formFields; //destructure to use values somewhere inside of code
  // console.log(formFields);

  //signup form is hooked into the 'context' using 'use context',so,as long as 'user context' value change,rerun the function
  // const val = useContext(UserContext);
  // console.log("hit");

  //pull this off of 'use context' from 'user context'
  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

      //whenever a user signs up for the first time, going to have their user set inside of our user context.
      setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  //to take that input event whenever text changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-wrapper">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      {/* 'name' must same as the name of actual attribute from 'defaultFormFields' that updated.
        'value' inside of this input should be the value that passed.
    */}
      <form onSubmit={handleSubmit}>
        {/*<FormInput
          label="Display Name"
          inputOptions = {{ type:"text",
          required: true,
          onChange:handleChange,
          name:"displayName",
          value:displayName}}
      />*/}
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">
          {/*<Button buttonType="inverted" type="submit">*/}
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
