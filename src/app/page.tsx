// "use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import MoneyManagementForm from "@/components/MoneyManagementForm";
import Footer from "@/components/Footer";
import TypeOfExpensePieChart from "@/components/TypeOfExpensePieChart";
import DayWiseExpensesLineChart from "@/components/DayWiseExpensesLineChart";
import ModeOfPaymentPieChart from "@/components/ModeOfPaymentPieChart";
import PaymentsTable from "@/components/TransTable";
import AddMoneyFormWrapper from "@/components/AddMoneyFormWrapper";
import DownloadSpreadsheet from "@/components/DownloadSpreadsheet";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col">
        <Navbar />
        <div className=" mx-auto">
          <AddMoneyFormWrapper/>
          <PaymentsTable/>
          <TypeOfExpensePieChart/>
          <ModeOfPaymentPieChart/>
          <DayWiseExpensesLineChart/>
          <DownloadSpreadsheet/>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
