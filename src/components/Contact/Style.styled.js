import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 0 20px;
border: 2px solid black;
border-radius: 10px;
background-color: green;
  box-shadow: 10px 5px 5px black;
  margin-bottom: 50px;
`;

export const Label = styled.label`
margin-top:10px;
  font-weight: 400;
  font-size: 40px;
  line-height: 1.25;
  color: orange;
`;

export const Input = styled.input`
  margin-top:10px;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.25;
  height: 50px;
  border-radius: 10px;
  padding: 10px;
   box-shadow: 10px 5px 5px black;
   margin-bottom: 20px;
`;

export const Button = styled.button`
  box-shadow: 10px 5px 5px black;
  margin: 15px auto 10px auto;
  padding:10px;
  width: 150px;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.25;
  background-color: orange;
  border:none;
  border-radius: 10px;
  cursor: pointer;
`;

export const Title = styled.h2`
 text-align: center;
 margin-bottom:10px;
`;

export const Div = styled.div`
background-color: gray;
padding: 80px 50px;
border-radius: 10px;
box-shadow: 10px 5px 5px black;
`
export const List = styled.li`
list-style: none;
text-align: center;`