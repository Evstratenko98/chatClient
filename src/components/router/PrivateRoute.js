import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { GetUserAction, ResetAction } from '../../redux/actions/user';
import AuthLink from './authLink';

const PrivateRoute = (props) => {
  const { token } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(GetUserAction({ token }));

    return () => {
      dispatch(ResetAction());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (token) return <Route {...props} />;

  return <AuthLink />;
};

export default PrivateRoute;
