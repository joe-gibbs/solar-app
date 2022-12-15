import React from "react";
import { Group } from "@visx/group";
import { BarGroup } from "@visx/shape";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { timeParse, timeFormat } from "d3-time-format";

export type BarGroupProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};

type CityName = "before" | "after";

const blue = "#9caff6";
export const green = "#495057";
const purple = "#9caff6";
export const background = "#e7eaed";

interface PowerDataChart {
  date: string;
  before: string;
  after: string;
}

const data: {
  date: string;
  before: string;
  after: string;
}[] = [
  {
    date: "2022-01-01",
    before: "110",
    after: "76",
  },
  {
    date: "2022-02-01",
    before: "98",
    after: "78",
  },
  {
    date: "2022-03-01",
    before: "74",
    after: "61",
  },
  {
    date: "2022-04-01",
    before: "70",
    after: "45",
  },
  {
    date: "2022-05-01",
    before: "83",
    after: "58",
  },
  {
    date: "2022-06-01",
    before: "90",
    after: "78",
  },
  {
    date: "2022-07-01",
    before: "97",
    after: "60",
  },
  {
    date: "2022-08-01",
    before: "121",
    after: "82",
  },
  {
    date: "2022-09-01",
    before: "87",
    after: "66",
  },
  {
    date: "2022-10-01",
    before: "65",
    after: "50",
  },
  {
    date: "2022-11-01",
    before: "57",
    after: "45",
  },
  {
    date: "2022-12-01",
    before: "89",
    after: "70",
  },
];
const keys = Object.keys(data[0]).filter((d) => d !== "date") as CityName[];
const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };

const parseDate = timeParse("%Y-%m-%d");
const format = timeFormat("%b");
const formatDate = (date: string) => format(parseDate(date) as Date);

// accessors
const getDate = (d: PowerDataChart) => d.date;

// scales
const dateScale = scaleBand<string>({
  domain: data.map(getDate),
  padding: 0.2,
});

const cityScale = scaleBand<string>({
  domain: keys,
  padding: 0.1,
});

const tempScale = scaleLinear<number>({
  domain: [
    0,
    Math.max(
      ...data.map((d) => Math.max(...keys.map((key) => Number(d[key]))))
    ),
  ],
});
const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [blue, green, purple],
});

export const BarChart = ({
  width,
  height,
  events = false,
  margin = defaultMargin,
}: BarGroupProps) => {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // update scale output dimensions
  dateScale.rangeRound([0, xMax]);
  cityScale.rangeRound([0, dateScale.bandwidth()]);
  tempScale.range([yMax, 0]);

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={background}
        rx={14}
      />
      <AxisLeft
        stroke={green}
        tickStroke={green}
        hideAxisLine
        hideTicks
        tickLabelProps={() => ({
          fill: green,
          fontSize: 11,
          textAnchor: "middle",
        })}
        top={margin.top}
        tickFormat={(v) => "$" + v}
        scale={tempScale}
        left={20}
      />
      <Group top={margin.top} left={margin.left}>
        <BarGroup
          data={data}
          keys={keys}
          height={yMax}
          x0={getDate}
          x0Scale={dateScale}
          x1Scale={cityScale}
          yScale={tempScale}
          color={colorScale}
        >
          {(barGroups) =>
            barGroups.map((barGroup) => (
              <Group
                key={`bar-group-${barGroup.index}-${barGroup.x0}`}
                left={barGroup.x0}
              >
                {barGroup.bars.map((bar) => (
                  <rect
                    key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={bar.color}
                    rx={4}
                    onClick={() => {
                      if (!events) return;
                      const { key, value } = bar;
                      alert(JSON.stringify({ key, value }));
                    }}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroup>
      </Group>
      <AxisBottom
        top={yMax + margin.top}
        tickFormat={formatDate}
        scale={dateScale}
        stroke={green}
        tickStroke={green}
        hideAxisLine
        tickLabelProps={() => ({
          fill: green,
          fontSize: 11,
          textAnchor: "middle",
        })}
      />
    </svg>
  );
};
