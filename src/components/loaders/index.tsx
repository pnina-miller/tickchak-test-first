import React, { useEffect } from "react";
import './style.scss'
import styled from "styled-components";

const Loader: React.FC = () => {
  return <div className="loader"></div>
};


const PercentageLoader = (props: any) => {

  useEffect(() => {

  }, [props.color])
  const CartContainer = styled.div`
  &:after {
    background: #${props.color}
    }
`;


  return <CartContainer className="progress" data-progress={props.percent/2}>
    <div className="progress__mask progress__mask--full">
      <div className="progress__fill"></div>
    </div>
    <div className="progress__mask">
      <div className="progress__fill"></div>
    </div>
  </CartContainer>
}
export { Loader, PercentageLoader };
