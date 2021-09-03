import { useState, createContext, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";
// this is the initial state, which we are going to replace with useState
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    // need to add an event listener so we can update the user
    // listens to "login" and runs the function if detected
    netlifyIdentity.on("login", (user) => {
      setUser(user);
      // closes the modal
      netlifyIdentity.close();
      console.log("login event");
    });
    // another e listener that makes the user go back to null when logged out
    netlifyIdentity.on("logout", () => {
      setUser(null);
      console.log("logout event");
    });

    /* on refresh will display wrong buttons since its in the useeffect we can hold off the button renders with a boolean variable, authReady, basically we add a event listen which listens on the init  */

    netlifyIdentity.on("init", (user) => {
      setUser(user);
      setAuthReady(true);
    });

    netlifyIdentity.init();

    // cleanup so we dont have dublicate event listeners when rerendered
    // will run whenever the component unmounts
    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
    // will return an obj of the user
  };

  const logout = () => {
    netlifyIdentity.logout();
    setUser(null);
  };

  const context = { user, login, logout, authReady };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
