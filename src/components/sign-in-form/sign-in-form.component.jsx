import { useState } from "react"; //to track actual input inside of these inputs into form component.
// import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
// import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import Button from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";
import {
  // signInWithGooglePopup,
  //createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

// import "./sign-in-form.styles.scss";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

//initialize value for four values,which should be all empty strings,to generic size 'handleChange'
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields); //useState to call form fields
  const { email, password } = formFields; //destructure to use values somewhere inside of code
  // console.log(formFields);

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Google Method, taking this user object that we get back from the authentication and create a user document from this auth object.
  // const signInWithGoogle = async () => {
  //   // const { user } = await signInWithGooglePopup();
  //   // await createUserDocumentFromAuth(user);

  //   await signInWithGooglePopup();
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      //console.log(response); //result = get value of accessToken,uid (same like uid from firebase database)

      // setCurrentUser(user); //whenever 'user' value come back,to access it inside of navigation

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
        //console.log(error);
      }
    }
  };

  //to take that input event whenever text changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          {/* default 'button' are of type submit inside of forms.to prevent that,say that type of 'button' is just the button*/}
          {/* <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In With Google
          </Button>*/}
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
