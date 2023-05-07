import React from 'react';
import { Route } from 'react-router-dom';

export const generateRoutes = (routes) => {
  routes.map(({ path, element }) => <Route path={path} exact={React || false}>{element}</Route>);
};
