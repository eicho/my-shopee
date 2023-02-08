import "./button.styles.scss";

//default,inverted,google signin
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

//whatever inside text or h1 or p tags that put in button,be the 'children' inside button
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-wrapper ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
