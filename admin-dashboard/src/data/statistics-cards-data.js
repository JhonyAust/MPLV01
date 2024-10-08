import {
    BanknotesIcon,
    UserPlusIcon,
    UsersIcon,
    ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [{
        color: "gray",
        icon: BanknotesIcon,
        title: "Total Listing's Money",
        value: "$53k",
        footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last week",
        },
    },
    {
        color: "gray",
        icon: UsersIcon,
        title: "Total's Users",
        value: "200",
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
        value: "32",
        footer: {
            color: "text-red-500",
            value: "-2%",
            label: "than yesterday",
        },
    },
    {
        color: "gray",
        icon: ChartBarIcon,
        title: "Total Listing",
        value: "30",
        footer: {
            color: "text-green-500",
            value: "+5%",
            label: "than yesterday",
        },
    },
];

export default statisticsCardsData;