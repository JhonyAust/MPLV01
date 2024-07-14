import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardBody,
  Typography,
  Input,
  Spinner,
  Avatar,
} from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, addUser, deleteUser, setLoading, setError } from '../../features/usersSlice';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector(state => state.users);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '', avatar: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      dispatch(setLoading(true));
      try {
        const res = await fetch('/api/user/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(setError(data.message));
        } else {
          console.log("Users Array is:",data);
          dispatch(setUsers(data));
        }
        dispatch(setLoading(false));
      } catch (err) {
        dispatch(setError(err.message));
        dispatch(setLoading(false));
      }
    };

    fetchUsers();
  }, [dispatch]);

  const handleAddUser = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(setLoading(false));
        dispatch(setError(data.message));
        return;
      }
      dispatch(addUser(data.user));
      setNewUser({ username: '', email: '', password: '', avatar: '' });
      setIsModalOpen(false);
      dispatch(setLoading(false));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error.message));
    }
  };

  const handleDeleteUser = async (id) => {
    dispatch(setLoading(true));
    try {
      const res = await fetch(`/api/user/delete/${id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(setLoading(false));
        dispatch(setError(data.message));
        return;
      }
      dispatch(deleteUser(id));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError(err.message));
    }
  };

  // Calculate the users to be displayed on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  console.log("current users are:",currentUsers);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4">All Users</Typography>
        <Button onClick={() => setIsModalOpen(true)}>Add User</Button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="space-y-4">
            {currentUsers.map((user) => (
              
              <Card key={user._id} className="p-4 border-b border-gray-200">
                <CardBody className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar src={user.avatar} alt="avatar" className="w-12 h-12 mr-4" />
                    <div>
                      <Typography variant="h6" className="mb-1">
                        {user.username}
                      </Typography>
                      <Typography className="text-gray-600">
                        {user.email}
                      </Typography>
                    </div>
                  </div>
                  <Button variant="text" color="red" onClick={() => handleDeleteUser(user._id)}>
                    Delete
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <Button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Typography>
              Page {currentPage} of {totalPages}
            </Typography>
            <Button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
      <Dialog open={isModalOpen} handler={setIsModalOpen}>
        <DialogHeader>Add New User</DialogHeader>
        <DialogBody divider>
          <form onSubmit={handleAddUser}>
            <div className="mb-4">
              <Input
                label="Username"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                label="Password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <Input
                label="Avatar URL"
                value={newUser.avatar}
                onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })}
              />
            </div>
            <DialogFooter>
              <Button variant="text" color="blue" onClick={() => setIsModalOpen(false)} className="mr-2">
                Cancel
              </Button>
              <Button type="submit" color="blue" disabled={loading}>
                {loading ? 'Adding...' : 'Add User'}
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default UsersPage;
