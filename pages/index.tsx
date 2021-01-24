import React from 'react';
import styled from 'styled-components';
import { font } from '../ui/theme';

function Test() {
  return (
    <>
      <Title>Generative art notes</Title>
      <ul>
        <li>
          <a href="/tiled">Tiled</a>
        </li>
        <li>
          <a href="/joy-division">Joy Division</a>
        </li>
        <li>
          <a href="/triangular-mesh">Triangular mesh</a>
        </li>
        <li>
          <a href="/cubic-disarray">Cubic disarray</a>
        </li>
        <li>
          <a href="/cubic-disarray-tingling">Cubic disarray tingling</a>
        </li>
        <li>
          <a href="/un-deux-trois">Un deux trois</a>
        </li>
        <li>
          <a href="/un-deux-trois-rotating">Un deux trois rotating</a>
        </li>
        <li>
          <a href="/circle-packing">Circle packing</a>
        </li>
        <li>
          <a href="/circle-packing-borning">Circle packing borning</a>
        </li>
      </ul>
    </>
  );
}

export default Test;

const Title = styled.h1`
  ${font.h1()}
`;
