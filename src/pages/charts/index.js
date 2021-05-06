import { Link } from "react-router-dom";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from "styled-components";

import CustomTooltip from "../../components/custom-tooltip";

const ChartsPage = ({ xDataArray, yDataArray }) => {
  
  let data = [];
  for (let index in xDataArray) {
    data.push({ x: xDataArray[index], y: yDataArray[index]})
  }

  return (
    <ChartsContainer>
      <ChartHeader>Planworth Takehome Scatter Chart</ChartHeader>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          width={500}
          height={200}
          margin={{
            top: 20,
            right: 65,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" />
          <YAxis type="number" dataKey="y" />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
      <Link to="/">
        <button style={{ width: "100%", padding: "10px" }}>
          Return to columns page.
        </button>
      </Link>
    </ChartsContainer>
  )
}

export default ChartsPage;

const ChartsContainer = styled.div`
  height: 500px;
  width: 90%;
  margin: 0 auto;
`

const ChartHeader = styled.h1`
  text-align: center;
`