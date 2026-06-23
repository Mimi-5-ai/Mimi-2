import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { contacts } from "../data/servicesData";

export default function Contact() {
  // دالة مخصصة لإرجاع الشعار الصحيح (واتساب أو تيك توك فقط)
  const getSvgIcon = (label) => {
    if (label.includes("واتساب")) {
      return (
        <svg viewBox="0 0 448 512" fill="white" height="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      );
    }
    
    // هنا شعار التيك توك الفيكتور الأصلي والواقعي 100%
    return (
      <svg viewBox="0 0 448 512" fill="white" height="1.4em" xmlns="http://www.w3.org/2000/svg">
        <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.66A173.74 173.74 0 1 1 151.44 175a171.43 171.43 0 0 1 40.12 4.9v81.91a100.17 100.17 0 1 0 42.66 82.59c0-1.8 0-3.53-.17-5.31V0h90.4a112.57 112.57 0 0 0 74.62 104.74v85.22A211.6 211.6 0 0 1 448 209.91z" />
      </svg>
    );
  };

  return (
    <StyledContactWrapper>
      <div className="contact-card">
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <span style={{ color: theme.green, fontSize: 13, fontWeight: 700 }}>ابدأ مشروعك</span>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginTop: 4, color: "#111827" }}>تواصل معي</h2>
          <div style={{ width: 32, height: 3, background: theme.green, margin: "8px auto", borderRadius: 2 }} />
        </div>

        <div className="rows-list">
          {contacts.map((item, index) => (
            <div key={index} className="contact-row">
              <div className="btn-container">
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="Btn">
                  <span className="svgContainer">
                    {getSvgIcon(item.label)}
                  </span>
                  <span className="BG" style={{ background: item.bg }} />
                </a>
              </div>

              <div className="text-container">
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ⚡ الزر التفاعلي الشغال بالملّي المتجه للواتساب مباشرة ⚡ */}
        <button 
          className="submit-btn"
          onClick={() => {
            const message = "";
            window.open(`https://wa.me/966595139906?text=${encodeURIComponent(message)}`, '_blank');
          }}
        >
          أرسل طلبك الآن
        </button>
      </div>
    </StyledContactWrapper>
  );
}

const StyledContactWrapper = styled.div`
  padding: 16px 0;
  direction: rtl;

  .contact-card {
    background: white;
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  }

  .rows-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }

  .contact-row {
    background: #f9fafb;
    border-radius: 16px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 14px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .label {
    font-size: 11px;
    color: #9ca3af;
    font-weight: 500;
  }

  .value {
    font-size: 14px;
    font-weight: 700;
    color: #1f2937;
    margin-top: 2px;
  }

  .Btn {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 10px;
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
    border-radius: 12px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.2);
    z-index: 2;
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 12px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.15);
    backdrop-filter: blur(4px);
  }

  .submit-btn {
    width: 100%;
    background: ${theme.greenMid || "#1e4d3a"};
    color: white;
    border: none;
    padding: 14px;
    border-radius: 14px;
    font-family: 'Cairo', sans-serif;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: opacity 0.2s;
  }
  .submit-btn:hover {
    opacity: 0.9;
  }
`;