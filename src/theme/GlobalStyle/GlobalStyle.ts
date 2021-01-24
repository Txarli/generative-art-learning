import { createGlobalStyle } from 'styled-components';
import { font } from '../theme';

import { reboot } from './reboot';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${reboot};

    body {
        ${font.base()};
    }
`;
