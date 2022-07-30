import { Global, css } from '@emotion/react';

export const GlobalStyled = () => {
    return (
        <Global
            styles={css`
                body {
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
                        'Helvetica Neue', sans-serif;
                    color: #000;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                html {
                    box-sizing: border-box;
                    overflow-x: hidden;
                }
                img {
                    display: block;
                    max-width: 100%;
                    height: auto;
                }
                *,
                *::before,
                *::after {
                    padding: 0px;
                    margin: 0px;
                    box-sizing: border-box;
                }
                code {
                    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
                }
                .root {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                .icon-wallet {
                    width: 30px;
                    height: 25px;
                    margin-right: 15px;
                    z-index: 3;
                    @media (min-width: 768px) {
                        width: 40px;
                        height: 32px;
                    }
                }
                .icon-greetting {
                    width: 240px;
                    height: 250px;
                    margin-right: 15px;
                    z-index: 3;
                    @media (min-width: 1280px) {
                        width: 400px;
                        height: 450px;
                    }
                }
                .icon-ellipse-blue {
                    width: 618px;
                    height: 547px;
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    z-index: 1;
                    transform: rotate(16.86deg);
                    transform: translate(-5%, 5%);
                }
                .icon-ellipse-purp {
                    width: 618px;
                    height: 547px;
                    position: fixed;
                    right: 0;
                    top: 0;
                    z-index: 1;
                    transform: rotate(21.94deg);
                    transform: translate(15%, -15%);
                }
            `}
        />
    );
};
