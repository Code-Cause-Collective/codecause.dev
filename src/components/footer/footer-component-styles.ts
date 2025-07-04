import { css } from 'lit';

export const footerComponentStyles = css`
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10vh;
    flex-wrap: wrap;
  }

  .footer-text {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: #acacac;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #4b7ce6;
  }

  a:hover {
    text-decoration: underline;
  }

  .github-icon {
    filter: brightness(0) invert(1);
    width: 24px;
    height: 24px;
  }

  .icon {
    width: 20px;
    height: 20px;
    display: block;
  }

  @media only screen and (max-width: 640px) {
    .footer-text {
      font-size: 0.7rem;
    }
  }
`;
