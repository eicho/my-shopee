import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { ReactComponent as ShopLogo } from "../../assets/shopee.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  //const { currentUser, setCurrentUser } = useContext(UserContext);
  // console.log(currentUser);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null); //if click sign out, reset the context.
  // };
  const { currentUser } = useContext(UserContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <ShopLogo className="logo" />
        </Link>
        <div className="nav-links-wrapper">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* If the current user does not exist,render 'sign in' link.
        when signin or signup the form,render 'sign out' link*/}
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
