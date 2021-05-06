import { useEffect, useState } from "react";
import styled from "styled-components";

import ChartForm from "../../components/charts-form";

const DataPicker = ({ xDataArray, setXDataArray, yDataArray, setYDataArray}) => {

  const [numRows, setNumRows] = useState(1);
  const [sameLength, setSameLength] = useState(true);
  let inputRows = [];

  useEffect(() => {
    if (xDataArray.length > 0 && xDataArray.length >= yDataArray.length && xDataArray.length > numRows) {
      setNumRows(xDataArray.length)
    } else if (yDataArray.length > 0 && yDataArray.length >= xDataArray.length && yDataArray.length > numRows) {
      setNumRows(yDataArray.length)
    }
  }, [numRows, xDataArray, yDataArray])

  useEffect(() => {
    const filteredXDataArray = (xDataArray.filter(item => {
      if (!isNaN(item) || item !== undefined) {
        return item
      }
    }));
    const filteredYDataArray = (yDataArray.filter(item => {
      if (!isNaN(item) || item !== undefined) {
        return item
      }
    }));
    setSameLength(filteredXDataArray.length === filteredYDataArray.length);
  }, [xDataArray, yDataArray])

  const updateX = ({ target: { value }}, index) => {
    if (!isNaN(parseInt(value))) {
      let newArr = [...xDataArray];
      newArr[index] = parseInt(value);
      setXDataArray(newArr);
    }
  }

  const updateY = ({ target: { value }}, index) => {
    if (!isNaN(parseInt(value))) {
      let newArr = [...yDataArray];
      newArr[index] = parseInt(value);
      setYDataArray(newArr);
    }
  }
  
  for (let i=0;i<numRows;i++) {
    inputRows.push( 
      <InputContainer key={i}>
        <ColumnInputBox 
          type="number" 
          onChange={e => updateX(e,i)} 
          placeholder={!isNaN(xDataArray[i]) ? xDataArray[i] : null}
        />
        <ColumnInputBox 
          type="number" 
          onChange={e => updateY(e,i)} 
          placeholder={!isNaN(yDataArray[i]) ? yDataArray[i] : null}
        />
      </InputContainer>
    )
  }

  return (
    <FormContainer>
      <FormHeader>
        Columns Page
      </FormHeader>
      <HeaderContainer>
        <h3>
          X
        </h3>
        <h3>
          Y
        </h3>
      </HeaderContainer>
      <ChartForm 
        inputRows={inputRows}
        numRows={numRows}
        setNumRows={setNumRows}
        sameLength={sameLength}
      />
    </FormContainer>
  )
} 

export default DataPicker;

const FormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 500px;
  }
`

const FormHeader = styled.h1`
  text-align: center;
`

const HeaderContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`

const InputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
`

const ColumnInputBox = styled.input`
  margin: 5px;
  width: 100px;
  @media (min-width: 425px) {
    width: initial;
  }
`