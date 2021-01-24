import { css } from 'styled-components';

/**
 * Inicializa estilos base
 * 1. Change from `box-sizing: content-box` so that `width` is not affected
 *    by `padding` or `border`.
 * 2. As a best practice, apply a default 'background-color'.
 * 3. Set an explicit initial text-align value so that we can later use the the 'inherit'
 *    value on things like '<th>' elements.
 * 4. Prevent adjustments of font size after orientation changes in IE on
 *    Windows Phone and in iOS.
 * 5. Setting @viewport causes scrollbars to overlap content in IE11 and Edge,
 *    so we force a non-overlapping, non-auto-hiding scrollbar to counteract.
 * 6. Change the default tap highlight to be completely transparent in iOS.
 * 7. Implement full height to let children control own height.
 */
export const reboot = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box; /* 1 */
  }
  html {
    -webkit-text-size-adjust: 100%; /* 4 */
    -ms-text-size-adjust: 100%; /* 4 */
    -ms-overflow-style: scrollbar; /* 5 */
    -webkit-tap-highlight-color: rgba(#000, 0); /* 6 */
    -webkit-tap-highlight-color: transparent;
  }
  body {
    min-height: 100vh;
  }
  -ms-viewport {
    width: device-width;
  }
  strong {
    font-weight: 700;
  }
`;
