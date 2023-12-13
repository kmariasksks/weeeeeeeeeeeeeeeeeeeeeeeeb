import styled from "styled-components";

export const FiltersAll = styled.div`
display: flex;
margin-bottom: 40px;
`;

export const LabelPrice = styled.label`
height: 30px;
width: 272px;
border: 2px solid #82BBB5;
border-radius: 15px;
padding: 5px 0px 15px 10px;
font-size: 19px;
font-family: "Poppins-Medium";
margin-left: 50px;
margin-right: 20px;
&:hover {
  border-color: #7A7A7A;
  box-shadow: 2px 3px 5px #bbbbbb;
`;

export const LabelType = styled.label`
height: 30px;
width: 261px;
border: 2px solid #82BBB5;
border-radius: 15px;
padding: 5px 0px 15px 10px;
font-size: 19px;
font-family: "Poppins-Medium";
margin-right: 20px;
&:hover {
  border-color: #7A7A7A;
  box-shadow: 2px 3px 5px #bbbbbb;
`;

export const LabelMaterial = styled.label`
height: 30px;
width: 261px;
border: 2px solid #82BBB5;
border-radius: 15px;
padding: 5px 0px 15px 10px;
font-size: 19px;
font-family: "Poppins-Medium";
margin-right: 45px;
&:hover {
  border-color: #7A7A7A;
  box-shadow: 2px 3px 5px #bbbbbb;
`;

export const ApplyButton = styled.button`
  background-color: #7A7A7A;
  color: #fff;
  font-size: 20px;
  padding: 10px 40px;
  border: none;
  cursor: pointer;
  border-radius: 16px;
  font-family: "Poppins-Medium";
  margin-left: 25px;
  &:hover {
    background-color: #625f5f;
    box-shadow: 2px 3px 5px #bbbbbb;
`;

export const Labels = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
  border: 1px solid #d6d6d6;
  border-radius: 12px;
  padding: 0 1.2vw;
  border: 2px solid #7A7A7A;
  border-radius: 15px;
  font-family: "Poppins-Medium";

  input {
    padding: 0;
    padding-left: 5px;
    border: 1px solid #7A7A7A;
    border-radius: 4px;
    margin-left: 10px;
    width: 200px;
    height: 26px;
    font-family: "Poppins-Regural";
    font-size:16px;
    &:hover {
      box-shadow: 2px 3px 5px #bbbbbb;
  }
`;
