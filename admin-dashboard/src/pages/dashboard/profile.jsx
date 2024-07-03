import React, { useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
  Input,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { useSelector, useDispatch } from "react-redux";
import { updateAdminStart, updateAdminSuccess, updateAdminFailure } from "@/features/adminSlice"; // Import your update actions

export function Profile() {
  const { currentAdmin } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('app');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: currentAdmin ? currentAdmin.username : '',
    email: currentAdmin ? currentAdmin.email : '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateAdminStart());
      const res = await fetch(`/api/user/update/${currentAdmin._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateAdminFailure(data.message));
        return;
      }

      dispatch(updateAdminSuccess(data));
      setIsEditing(false);
    } catch (error) {
      dispatch(updateAdminFailure(error.message));
    }
  };

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              {currentAdmin ? (
                <img
                  className="rounded-full h-8 w-8 object-cover"
                  src={currentAdmin.avatar}
                  alt="profile"
                />
              ) : (
                <Avatar
                  src="/img/bruce-mars.jpeg"
                  alt="bruce-mars"
                  size="xl"
                  variant="rounded"
                  className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                />
              )}
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {currentAdmin ? currentAdmin.username : "Richard Davis"}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Admin
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value={activeTab}>
                <TabsHeader>
                  <Tab value="app" onClick={() => setActiveTab('app')}>
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab value="message" onClick={() => setActiveTab('message')}>
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab value="settings" onClick={() => setActiveTab('settings')}>
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          {activeTab === 'app' && (
            <div className="px-4 pb-4">
              <Typography variant="h6" color="blue-gray" className="mb-2">
                Projects
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-500"
              >
                Architects design houses
              </Typography>
              <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
                {projectsData.map(
                  ({ img, title, description, tag, route, members }) => (
                    <Card key={title} color="transparent" shadow={false}>
                      <CardHeader
                        floated={false}
                        color="gray"
                        className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                      >
                        <img
                          src={img}
                          alt={title}
                          className="h-full w-full object-cover"
                        />
                      </CardHeader>
                      <CardBody className="py-0 px-1">
                        <Typography
                          variant="small"
                          className="font-normal text-blue-gray-500"
                        >
                          {tag}
                        </Typography>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mt-1 mb-2"
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-normal text-blue-gray-500"
                        >
                          {description}
                        </Typography>
                      </CardBody>
                      <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                        <Link to={route}>
                          <Button variant="outlined" size="sm">
                            view project
                          </Button>
                        </Link>
                        <div>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </div>
                      </CardFooter>
                    </Card>
                  )
                )}
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="grid-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
              {isEditing ? (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Input
                      type="text"
                      label="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <Input
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" variant="gradient" color="blue">
                    Save Changes
                  </Button>
                  <Button
                    variant="text"
                    color="red"
                    onClick={() => setIsEditing(false)}
                    className="ml-4"
                  >
                    Cancel
                  </Button>
                </form>
              ) : (
                <ProfileInfoCard
                  title="Profile Information"
                  description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                  details={{
                    name: currentAdmin ? currentAdmin.username : "Alec M. Thompson",
                    email: currentAdmin ? currentAdmin.email : "alecthompson@mail.com",
                    location: "Bangladesh",
                    social: (
                      <div className="flex items-center gap-4">
                        <i className="fa-brands fa-facebook text-blue-700" />
                        <i className="fa-brands fa-twitter text-blue-400" />
                        <i className="fa-brands fa-instagram text-purple-500" />
                      </div>
                    ),
                  }}
                  action={
                    <Tooltip content="Edit Profile">
                      <PencilIcon
                        className="h-4 w-4 cursor-pointer text-blue-gray-500"
                        onClick={() => setIsEditing(true)}
                      />
                    </Tooltip>
                  }
                />
              )}
            </div>
          )}
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
