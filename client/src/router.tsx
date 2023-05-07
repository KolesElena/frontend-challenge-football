import React from 'react';
import { Route } from 'react-router-dom';
import { LogiN } from './loGin';
import Clubs from './Clubs';
import { generateRoutes } from './route';

export const Router = () => {
  const routes = [
    {
      path: '/login',
      element: <LogiN />,
    },
    {
      path: 'clubs',
      element: <Clubs />,
    },
  ];

  return (
    <>
      {generateRoutes(routes)}
    </>
  );
};
