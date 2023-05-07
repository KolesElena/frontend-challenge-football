import React, { useState, useEffect } from 'react';
import {
  Button, Input, Text, Box, FormControl, FormLabel, FormHelperText,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getLogin } from '../../api/apiCalls';

export const LogiN = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!email || !password) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, password]);

  const getToken = async () => {
    try {
      setLoading(true);
      await getLogin({
        email,
        password,
      }).then((data: any) => {
        if (data?.data?.token) {
          setLoading(false);
          sessionStorage.setItem("token", data?.data?.token)
          navigate('/clubs');
        }
      });
    } catch (err: any) {
      setLoading(false);
      return { err: err.message };
    }
  };

  const handleOnClick = async () => {
    getToken();
    if (email !== 'fake.user@fake.com') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <Box bg="gray.200" w="100%" p={4}>
      <Box p="10">
        <Box display="block" alignItems="center">
        <Text as="b">LOGIN</Text>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              bgColor="white"
              placeholder="example@mail.com"
              _placeholder={{ opacity: 1, color: 'gray.500' }}
              size="sm"
              mb="2"
              width="auto"
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {emailError && <FormHelperText color="red" mb="2">Email is incorrect</FormHelperText>}
            <FormLabel>Password</FormLabel>
            <Input
              bgColor="white"
              _placeholder={{ opacity: 1, color: 'gray.500' }}
              size="sm"
              mb="2"
              width="auto"
              type="text"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <Button colorScheme="telegram" isDisabled={disabled} isLoading={loading} onClick={handleOnClick}>Submit</Button>
        </Box>
      </Box>
    </Box>
  );
};
