// src/widgets/layout/DashboardNavbar.jsx
import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  Bars3Icon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";
import {
  signOutAdminStart,
  signOutAdminSuccess,
  signOutAdminFailure,
} from '@/features/adminSlice';
import { addNotification, removeNotification, clearNotifications } from '@/features/nfcSlice';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

export function DashboardNavbar() {
  const dispatch = useDispatch();
  const [controller] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const { currentAdmin } = useSelector((state) => state.admin);
  const { nfc, newItemAdded } = useSelector((state) => state.nfcSlice);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on('newOrder', async (data) => {
      const order = data.order;
  
      if (!order.user) {
        console.error("order.user is undefined or null");
        return;
      }
  
      const userId = order.user;
  
      try {
        const res = await fetch(`/api/user/${userId}`, {
          method: 'GET',
        });
        const userData = await res.json();
    
        const timestamp = new Date().toISOString();

        dispatch(addNotification({ ...order, user: userData.username, timestamp ,orderId:order._id,ordertype:order.type}));
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    });
    
    return () => {
      socket.off('newOrder');
    };
  }, [dispatch]);

  const handleSignOut = async () => {
    try {
      dispatch(signOutAdminStart());

      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutAdminSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signOutAdminFailure(error.message));
    }
  };

  const handleRemoveNotification = (index) => {
    
    dispatch(removeNotification(index));
    
  };

  const handleClearNotifications = () => {
    console.log("handleClearNotifications called");
    dispatch(clearNotifications());
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };
  const handleNotificationClick = (type,orderId) => {
    if(type==='paint'){
      navigate(`/dashboard/paint-wall-orders/${orderId}`);
    }else{
      navigate(`/dashboard/plan-orders/${orderId}`);
    }
    
  };


  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>
        <div className="flex items-center">
          <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          {currentAdmin ? (
            <Menu>
              <MenuHandler>
                <Button variant="text" className="p-0">
                  <Avatar
                    className="rounded-full h-8 w-8 object-cover"
                    src={currentAdmin.avatar}
                    alt="profile"
                  />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem>
                  <UserCircleIcon className="h-5 w-5 mr-2" />
                  <Link to='/dashboard/profile'>Profile</Link>
                </MenuItem>
                <MenuItem>
                  <Cog6ToothIcon className="h-5 w-5 mr-2" />
                  <Link to='/dashboard/settings'>Settings</Link>
                </MenuItem>
                <MenuItem onClick={handleSignOut}>
                  <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link to="/auth/sign-in">
              <div>
                <Button
                  variant="text"
                  color="blue-gray"
                  className="hidden items-center gap-1 px-4 xl:flex normal-case"
                >
                  <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                  Sign In
                </Button>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  className="grid xl:hidden"
                >
                  <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                </IconButton>
              </div>
            </Link>
          )}
          <Menu >
            <MenuHandler >
            <IconButton 
            
            variant="text" 
            color="blue-gray"
             >
              <BellIcon className="h-5 w-5 text-blue-gray-500 relative" onClick={handleClearNotifications}/>
              {newItemAdded && (
                <span className="bg-green-500 rounded-full h-2.5 w-2.5 absolute top-0 right-0"></span>
              )}
            </IconButton>

            </MenuHandler>
            <MenuList className="w-max border-0">
              {nfc.map((notification, index) => (
                <MenuItem key={index} className="flex items-center gap-3" onClick={() => handleNotificationClick(notification.ordertype,notification.orderId)}>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="mb-1 font-normal"
                    >
                      <strong>New <span className=' capitalize'>{notification.ordertype}</span> order added</strong> from {notification.user}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center gap-1 text-xs font-normal opacity-60"
                    >
                      <ClockIcon className="h-3.5 w-3.5" /> {formatDate(notification.timestamp)}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => handleRemoveNotification(index)}
                    variant="text"
                    color="blue-gray"
                  >
                    <XMarkIcon className="h-5 w-5 text-blue-gray-500" />
                  </IconButton>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
