import { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import endPoints from '@services/api';
const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    const response = await fetch(endPoints.auth.login, options).then((res) => res.json());
    const { access_token } = response;
    if (access_token) {
      Cookie.set('token', access_token, { expires: 5 });

      const options = {
        method: 'GET',
        headers: {
          authorization: `Bearer ${access_token}`,
        },
      };

      const data = await fetch(endPoints.auth.profile, options).then((res) => res.json());
      setUser(data);
    }
  };

  return {
    user,
    signIn,
  };
}
