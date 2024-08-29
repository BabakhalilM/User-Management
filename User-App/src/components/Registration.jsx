import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from './api';
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  VStack,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';

const Register = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
//   const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', { firstname,lastname, email, password });
      console.log(response);
      toast({
        title: 'Registration successful!',
        description: "You can now log in.",
        status: 'success',
        duration: 2000,
        isClosable: true,
      });

      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');

    //   setTimeout(() => {
    //     navigate('/login');
    //   }, 1000);
    } catch (err) {
      toast({
        title: 'Registration failed.',
        description: "Please try again.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      console.error(err);
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="green">Add user</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)' />
        <ModalContent>
          <ModalHeader>Add User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl id="name" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </FormControl>

                  <FormControl id="name" isRequired>
                    <FormLabel> Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </FormControl>

                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormControl>

                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormControl>

                  <Button type="submit" colorScheme="green">Register</Button>
                  <Button onClick={onClose} margin={"auto"} colorScheme='red'>Cancel Registration</Button>
                </VStack>
              </form>
              <br />
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
