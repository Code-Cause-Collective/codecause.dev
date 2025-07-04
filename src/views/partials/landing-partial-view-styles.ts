import { css } from 'lit';

export const landingPartialViewStyles = css`
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
  .container {
    display: flex;
    flex-direction: column;
    max-width: 66.666667%;
    margin: 0 auto;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
  }

  p {
    color: #dddde1;
  }

  a {
    color: var(--white);
    text-decoration: none;
    padding: 0.5em;
    padding-right: 1em;
    padding-left: 1em;
    border-radius: 20px;
    border: 1px solid #2e2e2e;
  }

  a:hover {
    border: 1px solid #555555;
  }

  a.community-cta {
    background-color: #7d3986;
  }

  a.learn-more {
    background-color: #212a39;
  }

  .cta-buttons {
    margin-top: 4rem;
  }

  #cta-section .container {
    margin-top: 150px;
  }

  .user-images {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-avatar {
    height: 2rem;
    width: 2rem;
    border-radius: 9999px;
    object-fit: cover;
  }

  @media only screen and (max-width: 640px) {
    h1 {
      font-size: 2.75rem;
    }
    a.discord {
      font-size: 0.9rem;
    }
  }

  @media (min-width: 1280px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
