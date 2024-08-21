// "use client"

// import * as React from "react"
// import { TrendingUp } from "lucide-react"
// import { Label, Pie, PieChart } from "recharts"
// import { useState, useEffect } from "react"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart"
// const colorArray = ["var(--color-chrome)","var(--color-edge)", "var(--color-safari)", "var(--color-firefox)" ]
// const type = ["Travel","Food","Shopping","Other"]


// export function Chart() {
//   let chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 190, fill: "var(--color-other)" },
// ]

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chromee",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig
// type arrayType = {
//     browser: string;
//     visitors: number;
//     fill: string;
// }
//     let chart_Values = [
//      { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   ]

// // const [chartDataa , setChartDataa ] = useState<arrayType>([]);
// const [TotalSpending, setTotalSpending] = useState<Number>(0)

// useEffect(()=>{
//   const fetchExpenseData = async ()=>{
//     const response = await fetch("http://localhost:3000/api/topicWiseExpense");
//     const data = await response.json();
//     console.log(data.ExpenseType);
//       const chart_Valuess = [
//      { browser: "TravelExpensesSum ", visitors:data.ExpenseType.TravelExpensesSum , fill: "var(--color-chrome)" },
//      { browser: "TotalFood ", visitors:data.ExpenseType.food , fill: "var(--color-edge)" },
//      { browser: "Total shopping ", visitors:data.ExpenseType.Shoppings , fill: "var(--color-safari)" },
//      { browser: "Total shopping ", visitors:data.ExpenseType.others, fill: "var(--color-edge)" },

//   ]
//   chart_Values .push({ browser: "TravelExpensesSum ", visitors:data.ExpenseType.TravelExpensesSum , fill: "var(--color-chrome)" })
//   // totalVisitors = data.ExpenseType.TotalExpensesSum;
//   setTotalSpending(data.ExpenseType.TotalExpensesSum);
//   }
//   fetchExpenseData();
// },[])
  
//   // const totalVisitors = React.useMemo(() => {
//   //   return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
//   // }, [])

//   return (
//     <Card className="flex flex-col">
//       <CardHeader className="items-center pb-0">
//         <CardTitle>Pie Chart - Donut with Text</CardTitle>
//         <CardDescription>January - June 2024</CardDescription>
//       </CardHeader>
//       <CardContent className="flex-1 pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[250px]"
//         >
//           <PieChart>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Pie
//               data={chart_Values}
//               dataKey="visitors"
//               nameKey="browser"
//               innerRadius={60}
//               strokeWidth={5}
//             >
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         <tspan
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           className="fill-foreground text-3xl font-bold"
//                         >
//                           {TotalSpending.toLocaleString()}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 24}
//                           className="fill-muted-foreground"
//                         >
//                           Total Spending
//                         </tspan>
//                       </text>
//                     )
//                   }
//                 }}
//               />
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter className="flex-col gap-2 text-sm">
//         <div className="flex items-center gap-2 font-medium leading-none">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="leading-none text-muted-foreground">
//           Showing total visitors for the last 6 months
//         </div>
//       </CardFooter>
//     </Card>
//   )
// }


"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

type arrayType = {
  browser: string;
  visitors: number;
  fill: string;
};
const PROD_URL = "http://65.0.87.86:3000/api/topicWiseExpense";
const DEV_URL = "http://localhost:3000/api/topicWiseExpense";

export function Chart() {
  const [chart_Values, setChartValues] = useState<arrayType[]>([]);
  const [TotalSpending, setTotalSpending] = useState<number>(0);

  useEffect(() => {
    const fetchExpenseData = async () => {
      const response = await fetch(PROD_URL);
      const data = await response.json();
      console.log(data.ExpenseType);

      const chart_Valuess = [
        {
          browser: "TravelExpensesSum",
          visitors: data.ExpenseType.TravelExpensesSum,
          fill: "var(--color-chrome)",
        },
        {
          browser: "TotalFood",
          visitors: data.ExpenseType.Food,
          fill: "var(--color-edge)",
        },
        {
          browser: "TotalShopping",
          visitors: data.ExpenseType.Shoppings,
          fill: "var(--color-safari)",
        },
        {
          browser: "OtherExpenses",
          visitors: data.ExpenseType.Other,
          fill: "var(--color-firefox)",
        },
      ];

      setChartValues(chart_Valuess); // Update the state with the fetched data
      setTotalSpending(data.ExpenseType.TotalExpensesSum); // Update total spending
    };
    fetchExpenseData();
  }, []);
  
const thisMonth = "August";
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
            <CardTitle>Pie Chart of BalanceSheet</CardTitle>
        <CardDescription>{thisMonth}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chart_Values}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {TotalSpending.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Spending
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total spending for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  );
}
