import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base", //by default, base button
  google: "google-sign-in",
  inverted: "inverted",
};

//'getButton' take the button type string and return us back one of these three button components
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]); //return back from a special map object, and this map object will past the button type value.

//whatever inside text or h1 or p tags that put in button,be the 'children' inside button
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType); //calling 'getButton' and passing it the button type.
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
