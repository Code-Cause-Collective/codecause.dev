import { css } from 'lit';

export const headerComponentStyles = css`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    height: 1.8rem;
    width: auto;
    align-items: center;
    margin-right: 0.25rem;
  }

  .app-title {
    font-size: 1.125rem;
    font-weight: 500;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;
  }

  .nav-links a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
  }

  a:hover {
    color: #4b7ce6;
  }

  @media (max-width: 768px) {
  }
`;
