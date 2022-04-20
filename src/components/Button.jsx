import styled from "styled-components";

const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.type === "primary" ? "dodgerblue" : "white"};
  color: ${(props) => {
      if(props.type === 'primary') return "white";
      if(props.type === 'link') return "blue";
  }};
  border: ${props => {
      if(!props.type){
          return "1px solid lightgrey";
      }
      if(props.type === 'dashed') return "1px dashed lightgrey";
      else{
          return "none";
      }
  }};

  &:hover{
    background-color: ${props => {
        if(props.type === 'primary') return "#4136c2"; 
        return "#d5dfe0";
    }};
    text-decoration :${props => props.type==="link" ? "underline":"none"} ;
  }
`;

export default Button;
