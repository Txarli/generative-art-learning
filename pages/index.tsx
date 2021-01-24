import React from 'react';
import Head from 'next/head';
import { GlobalStyle } from '../ui/theme/GlobalStyle';
import styled from 'styled-components';
import { font } from '../ui/theme';

function Test() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Generative Art Notes | Aitor Urrutia</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌑</text></svg>"
        ></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
