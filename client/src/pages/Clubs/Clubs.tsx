import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Box } from '@chakra-ui/react';
import { getClubs } from '../../api/apiCalls';

const Clubs = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    getClubs(sessionStorage.token).then((data: any) => {
      setClubs(data);
    });
  }, []);
  console.log(clubs);

  return (
    <Box>Render clubs</Box>
  );
};

export default Clubs;
