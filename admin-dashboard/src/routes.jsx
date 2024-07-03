import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  ServerStackIcon,
  RectangleStackIcon,
  QueueListIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn } from "@/pages/auth";
import UsersPage from "./pages/crud/users";
import ListingPage from "./pages/crud/listings";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "users",
        path: "/users",
        element: <UsersPage />,
      },
      {
        icon: <QueueListIcon {...icon} />,
        name: "Listings",
        path: "/listings",
        element: <ListingPage />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      
    ],
  },
];

export default routes;
