import React from 'react';
import styled from 'styled-components';

const TikTokButton = ({ href }) => {
  return (
    <StyledWrapper>
      <a href={href} target="_blank" rel="noopener noreferrer" className="Btn">
        <span className="svgContainer">
          {/* شعار التيك توك الرسمي الفيكتور */}
          <svg viewBox="0 0 448 512" fill="white" height="1.4em" xmlns="http://www.w3.org/2000/svg">
            <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.66A173.74 173.74 0 1 1 151.44 175a171.43 171.43 0 0 1 40.12 4.9v81.91a100.17 100.17 0 1 0 42.66 82.59c0-1.8 0-3.53-.17-5.31V0h90.4a112.57 112.57 0 0 0 74.62 104.74v85.22A211.6 211.6 0 0 1 448 209.91z" />
          </svg>
        </span>
        <span className="BG" />
      </a>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(0px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #010101; /* لون التيك توك الأسود الفخم */
    z-index: -1;
    border-radius: 10px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
    backdrop-filter: blur(4px);
  }
`;

export default TikTokButton;