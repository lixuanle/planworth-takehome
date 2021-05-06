const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name: xName, value: xValue } = payload[0];
    const { name: yName, value: yValue } = payload[1];
    return (
      <div>
        <p>{`${xName} : ${xValue}`}</p>
        <p>{`${yName} : ${yValue}`}</p>
      </div>
    );
  }

  return null;
}

export default CustomTooltip;