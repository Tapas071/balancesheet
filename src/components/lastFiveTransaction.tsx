import * as React from "react"
import { useEffect, useState } from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
type arrayType = {
    location: string;
    amount: number;
    time: string;
    mode: string;
    type: string;
    };
    const PROD_URL = "http://65.0.87.86:3000/api/lastFiveTransaction";

export  function CarouselSpacing() {
    const [lastFiveTransaction, setLastFiveTransaction] = useState<arrayType[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(PROD_URL);
            const data = await res.json();
            setLastFiveTransaction(data.Details);
            }
            fetchData();
            // await for 2 sec
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            setLoading(false);
            
      }
    ,[])
    const CarosalItem = <>
            {lastFiveTransaction.map((transaction, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardHeader>
                                <CardTitle> {transaction.amount}</CardTitle>
                                <CardDescription>{transaction.type}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{transaction.location}</p>
                            </CardContent>
                            <CardFooter>
                                <p>
                                    {
                                    // make the date and time more readable
                                    // new Date(transaction.time).toLocaleDateString() 
                                    //  make it as 15th August 2021 12:30:00
                                    new Date(transaction.time).toLocaleDateString()
                                    + " " + new Date(transaction.time).toLocaleTimeString()
                                    }
                                </p>
                            </CardFooter>
                        </Card>
                    </div>
                </CarouselItem>
              ))}
            </>
  return (
    (loading) ? <div>Loading...</div> :
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
          {CarosalItem}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    
  )
}
