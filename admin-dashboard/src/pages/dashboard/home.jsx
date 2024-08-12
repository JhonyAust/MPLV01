import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsChartsData,
} from "@/data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

export function Home() {
  const { listings, ordersPaintWall, ordersPlans } = useSelector((state) => state.usersPanel);
  const { users } = useSelector((state) => state.users);

  const statisticsCardsData = [
    {
      color: "gray",
      icon: BanknotesIcon,
      title: "Total Paint Orders",
      value: ordersPaintWall ? ordersPaintWall.length.toString() : 'Loading...',
      footer: {
        color: "text-green-500",
        value: "+5%",
        label: "than last week",
      },
    },
    {
      color: "gray",
      icon: BanknotesIcon,
      title: "Total Plan Orders",
      value: ordersPlans ? ordersPlans.length.toString() : 'Loading...',
      footer: {
        color: "text-green-500",
        value: "+5%",
        label: "than last week",
      },
    },
    {
      color: "gray",
      icon: UsersIcon,
      title: "Total Users",
      value: users ? users.length.toString() : 'Loading...',
      footer: {
        color: "text-green-500",
        value: "+3%",
        label: "than last month",
      },
    },
    {
      color: "gray",
      icon: UserPlusIcon,
      title: "New Clients",
      value: users ? users.length.toString() : 'Loading...',
      footer: {
        color: "text-red-500",
        value: "-2%",
        label: "than yesterday",
      },
    },
    {
      color: "gray",
      icon: ChartBarIcon,
      title: "Total Listings",
      value: listings ? listings.length.toString() : 'Loading...',
      footer: {
        color: "text-green-500",
        value: "+5%",
        label: "than yesterday",
      },
    },
  ];

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
