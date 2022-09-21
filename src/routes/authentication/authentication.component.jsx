// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";

import SingInForm from "../../components/sign-in-form/sign-in-form.component";
import SingUpForm from "../../components/sign-up-form/sign-up-form.component";

import "./authentication.styles.scss";

// import {
//   // auth,
//   // signInWithGoogleRedirect,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);

  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup(); // диструктаризация с обьекта response
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      {/* <h2>Sign In</h2> */}
      {/* <button onClick={logGoogleUser}>Sign in with Google popup</button> */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
      </button> */}
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
