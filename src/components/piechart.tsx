import React from 'react';
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
  PieChartTypes,
} from 'devextreme-react/pie-chart';
// import { areas } from "@/data/data";

const expenses = [
{
  country: 'Fodding',
  area: 12,
}, {
  country: 'Travel',
  area: 7,
}, {
  country: 'Shopping',
  area: 7,
}, {
  country: 'Other',
  area: 7,
}
]





function pointClickHandler(e: PieChartTypes.PointClickEvent) {
  toggleVisibility(e.target);
}

function legendClickHandler(e: PieChartTypes.LegendClickEvent) {
  const arg = e.target;
  const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];
  toggleVisibility(item);
}

function toggleVisibility(item :any) {
  item.isVisible() ? item.hide() : item.show();
}

function Piechart() {
  return (
    <PieChart
      id="pie"
      dataSource={expenses}
      palette="Bright"
      title="Area of Countries"
      onPointClick={pointClickHandler}
      onLegendClick={legendClickHandler}
    >
      <Series argumentField="country" valueField="area">
        <Label visible={true}>
          <Connector visible={true} width={1} />
        </Label>
      </Series>

      <Size width={500} />
      <Export enabled={true} />
    </PieChart>
  );
}

export default Piechart;
