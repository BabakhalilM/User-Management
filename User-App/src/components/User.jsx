import React, { useEffect, useState } from 'react';
import axios from './api';
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Input } from '@chakra-ui/react';

const FetchingData = () => {
  const [emp, setEmp] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [deleteUsers, setDeleteUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("/users");
        setEmp(response.data.usersData);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    }
    getData();
  }, []);

  const handleEdit = (employee) => {
    setEditRow(employee._id);
  };
  const handleChange = (e, _id, field) => {
    setEmp(emp.map(employee =>
      employee._id === _id ? { ...employee, [field]: e.target.value } : employee
    ));
  };

  const handleSave = async (_id) => {
    try {
      const updatedEmployee = emp.find(employee => employee._id === _id);
      const responce=await axios.put('/edituser', updatedEmployee);
      console.log(response);
      setEditRow(null);
    } catch (err) {
      console.log("Error saving data", err);
    }
  };

  const handleCancel = () => {
    setEditRow(null);
  };

  const handleDelete = async (_id) => {
    try {
        console.log( "delete id sending",_id);
      const response=await axios.delete(`/deleteuser/:${_id}`);
        console.log(response);
      setEmp(emp.filter(employee => employee._id !== _id));
    } catch (err) {
      console.log("Error deleting data", err);
    }
  };

  const handleDeleteUsers = async () => {
    try {
      const response=await axios.post('/deleteusers', { deleteUsers });
      console.log(response);
      setEmp(emp.filter(employee => !deleteUsers.includes(employee._id)));
      setDeleteUsers([]);
    } catch (err) {
      console.log("Error deleting multiple users", err);
    }
  };

  const selectChange = (_id) => {
    setDeleteUsers(prevState =>
      prevState.includes(_id) ? prevState.filter(id => id !== _id) : [...prevState, _id]
    );
  };

  return (
    <Box p={4}>
        {deleteUsers.length > 0 && (
        <Button onClick={handleDeleteUsers} colorScheme="red" mt={4}>
          Delete Selected Users
        </Button>
      )}
      <TableContainer>
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>Select</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {emp.map((employee,index) => (
              <Tr key={employee._id}>
                <Td> <span style={{margin:"10px",fontWeight:"bold"}} >{index}</span>
                  <input
                    type="checkbox"
                    onChange={() => selectChange(employee._id)}
                    isChecked={deleteUsers.includes(employee._id)}
                  />
                </Td>
                <Td>
                  {editRow === employee._id ? (
                    <Input
                      type="text"
                      value={employee.firstname}
                      onChange={(e) => handleChange(e, employee._id, 'firstname')}
                    />
                  ) : (
                    employee.firstname
                  )}
                </Td>
                <Td>
                  {editRow === employee._id ? (
                    <Input
                      type="text"
                      value={employee.lastname}
                      onChange={(e) => handleChange(e, employee._id, 'lastname')}
                    />
                  ) : (
                    employee.lastname
                  )}
                </Td>
                <Td>
                  {editRow === employee._id ? (
                    <Input
                      type="email"
                      value={employee.email}
                      onChange={(e) => handleChange(e, employee._id, 'email')}
                    />
                  ) : (
                    employee.email
                  )}
                </Td>
                <Td>
                  {editRow === employee._id ? (
                    <>
                      <Button onClick={() => handleSave(employee._id)} colorScheme="blue" mr={2}>
                        Save
                      </Button>
                      <Button onClick={handleCancel} colorScheme="red">
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => handleEdit(employee)} colorScheme="green" mr={2}>
                        Edit
                      </Button>
                      <Button onClick={() => handleDelete(employee._id)} colorScheme="red">
                        Delete
                      </Button>
                    </>
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      
    </Box>
  );
};

export default FetchingData;
