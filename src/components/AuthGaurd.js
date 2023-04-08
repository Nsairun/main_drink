/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../api/auth';

export default function AuthGaurd(Component) {
  return function Gaurd(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
      getCurrentUser().then((res) => setUser(res));
    }, []);

    return <Component {...props} currentUser={user} />;
  };
}
