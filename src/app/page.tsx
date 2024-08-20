"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import MoneyManagementForm from "@/components/MoneyManagementForm";
import Footer from "@/components/Footer";
import { Chart } from "@/components/piechart";
import { Carousel } from "@/components/ui/carousel";
import { CarouselSpacing } from "@/components/lastFiveTransaction";
// import Piechart from "@/components/piechart";


const Home = () => {

  const [totalExpense , setTotalExpense] = useState<Number>(0); 
  const [totalFoodExpense, setTotalFoodExpense] = useState<Number>(0);
  const [totalTravelExpense, setTotalTravelExpense] = useState<Number>(0);
  const [totalShoppingExpense, setTotalShoppingExpense] = useState<Number>(0);
  const [totalOthersExpense, setTotalOthersExpense] = useState<Number>(0);


  
  return (
    <>
      <div className=" flex flex-col">
        <Navbar />
        {/* <Content /> */}
        <div className=" mx-auto">
          <MoneyManagementForm />
        </div>
          <Chart/>
          <div className="mx-auto mt-10">

          <CarouselSpacing/>
          </div>
        
          
        <Footer />
      </div>
    </>
  );
};

export default Home;
