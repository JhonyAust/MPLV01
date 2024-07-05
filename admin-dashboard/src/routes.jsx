import {
  HomeIcon,
  UserCircleIcon,
  ServerStackIcon,
  QueueListIcon,
  UsersIcon,
  RectangleGroupIcon,
  ReceiptPercentIcon,
  ReceiptRefundIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn } from "@/pages/auth";
import UsersPage from "./pages/crud/users";
import ListingPage from "./pages/crud/listings";
import OrderPaintWall from "./pages/crud/orderPaintWall";


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
      {
        icon: < DocumentChartBarIcon {...icon} />,
        name: "Paint Wall Orders",
        path: "/paint-wall-orders",
        element: <OrderPaintWall />,
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
