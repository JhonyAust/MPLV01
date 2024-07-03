import { useState } from "react";
import { BiChevronUp, BiChevronDown, BiBookOpen, BiUser, BiUserPlus, BiHomeAlt, BiWrench, BiMessageRoundedDots,  BiCommentDetail } from "react-icons/bi";
import { FaHandHoldingUsd, FaTruckMoving, FaPaintRoller, FaTools, FaFileSignature, FaFileContract, FaFileAlt, FaHandshake, FaFileInvoiceDollar, FaReceipt } from "react-icons/fa";

 const Menu = [
  {
    id: 1,
    menu: "MAcash Wallet",
    submenu: [
      { name: "Wallet Summary", icon: <BiBookOpen /> },
      { name: "RewardsNew", icon: <FaHandHoldingUsd /> }
    ]
  },
  {
    id: 2,
    menu: "Residential Plans",
    submenu: [
      { name: "For Owner", icon: <BiUser /> },
      { name: "For Sellers", icon: <BiUserPlus /> },
      { name: "For Tenants", icon: <BiUser /> },
      { name: "For Buyers", icon: <BiUserPlus /> }
    ]
  },
  {
    id: 3,
    menu: "Commercial Plans",
    submenu: [
      { name: "For Owner", icon: <BiUser /> },
      { name: "For Sellers", icon: <BiUserPlus /> },
      { name: "For Tenants", icon: <BiUser /> },
      { name: "For Buyers", icon: <BiUserPlus /> }
    ]
  },
  {
    id: 4,
    menu: "Home Services",
    submenu: [
      { name: "Packers and Movers", icon: <FaTruckMoving /> },
      { name: "Painting", icon: <FaPaintRoller /> },
      { name: "Cleaning", icon: <FaTools /> },
      { name: "Interiors", icon: <BiHomeAlt /> },
      { name: "Furniture", icon: <BiWrench /> }
    ]
  },
  {
    id: 5,
    menu: "NoBroker Pay",
    submenu: [
      { name: "Pay Your Rent", icon: <FaFileSignature /> },
      { name: "Deposit Payment", icon: <FaFileContract /> },
      { name: "Maintenance Payments", icon: <BiWrench /> },
      { name: "Bill Payments", icon: <FaFileAlt /> }
    ]
  },
  {
    id: 6,
    menu: "Legal Assistance & Loan",
    submenu: [
      { name: "Rental Agreement", icon: <FaFileContract /> },
      { name: "Police Intimation", icon: <BiMessageRoundedDots /> },
      { name: "Tenant Verification", icon: <BiBookOpen /> },
      { name: "Property Legal Assistance", icon: <FaHandshake /> },
      { name: "Home Loan", icon: <FaFileAlt /> },
      { name: "Home Deposit Loan", icon: <FaFileInvoiceDollar /> }
    ]
  },
  {
    id: 7,
    menu: "Utilities",
    submenu: [
      { name: "Know Your Rent", icon: <FaReceipt /> },
      { name: "Create Rent Receipts", icon: <FaReceipt /> },
      { name: "Click & Earn", icon: <FaHandHoldingUsd /> }
    ]
  },
  {
    id: 8,
    menu: "Help & Support",
    submenu: [
      { name: "Support Topics", icon: <BiMessageRoundedDots /> },
      { name: "Blog", icon: <BiBookOpen /> },
      { name: "Feedback", icon: <BiCommentDetail /> },
      { name: "About Us", icon: <BiCommentDetail /> },
      { name: "Chat With Us", icon: <BiMessageRoundedDots /> }
    ]
  }
];
export default Menu;

