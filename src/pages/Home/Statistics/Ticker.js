import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styled from 'styled-components'

const Counter = styled.h3`
  font-size: 4rem;
  color: white;
  font-weight: 700;
  margin-bottom: 0;
  @media (max-width: 576px) {
    font-size: 3.2rem;
  }
`

const Ticker = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <Counter ref={countUpRef}/>
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default Ticker;