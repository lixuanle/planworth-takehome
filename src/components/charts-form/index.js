import { Link } from "react-router-dom";
import styled from "styled-components";

const ChartForm = ({ inputRows, numRows, sameLength, setNumRows }) => {
  return (
    <ChartsForm onSubmit={e => e.preventDefault()}>
      {inputRows}
      <ButtonsContainer>
        <FormButton onClick={() => setNumRows(numRows+1)}>
          +
        </FormButton>
        {sameLength ? 
          <ChartsLink to="/charts">
            <FormButton>
              To Charts
            </FormButton>
          </ChartsLink> :
          <FormButton>
            Column entry lengths are not the same.
          </FormButton>
        }
      </ButtonsContainer>
    </ChartsForm>
  )
}

export default ChartForm;

const ChartsForm = styled.form`
  margin: 0 auto;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  justify-content: space-between;
  width: 100%
`

const FormButton = styled.button`
  margin: 5px auto;
  width: 100%;
`

const ChartsLink = styled(Link)`
  text-align: center;
  width: 100%;
`
