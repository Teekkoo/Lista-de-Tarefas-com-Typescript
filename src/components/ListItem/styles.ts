import { type } from "os";
import styled from "styled-components";

type ContainerProps = {
  done: boolean
}

export const Container = styled.div(({done}: ContainerProps)=>(
  `display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  align-items: center;
  position: relative;

  input{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  label{
    color: #CCC;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }

  button{
    padding: 10px 15px;
    background-color:#17181F;
    border: none;
    border-radius: 10px;
    color #fff;
    position: absolute;
    right: 5%;
    cursor:pointer; 
  }
`
))