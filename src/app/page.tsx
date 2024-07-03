"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import MoneyManagementForm from "@/components/MoneyManagementForm";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col">
        <Navbar />
        {/* <Content /> */}
        <div className=" mx-auto">
          <MoneyManagementForm />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
