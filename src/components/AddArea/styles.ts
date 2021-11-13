import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #555;
  padding: 10px;
  border-radius: 15px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  .image{
    margin-left: 10px;
  }

  input {
    border: none;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    width: 100%;
  
  }
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0;
  flex: 1;

  textarea{
    border: 1px solid white;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    width: 100%;
  }
`