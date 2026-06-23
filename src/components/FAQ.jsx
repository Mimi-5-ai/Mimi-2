import { useState } from "react";
import theme from "../styles/theme";
import { faqs } from "../data/servicesData";
import AnimSection from "./AnimSection";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <AnimSection style={{ paddingTop: 32 }}>
      <SectionHeader eyebrow="أسئلة شائعة" title="لديك سؤال؟" />
      {faqs.map((f, i) => (
        <div
          key={i}
          onClick={() => setOpenFaq(openFaq === i ? null : i)}
          style={{ background: "white", borderRadius: 14, padding: "16px 18px", marginBottom: 10, cursor: "pointer", boxShadow: "0 1px 6px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 14px rgba(45,106,79,0.1)"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.04)"; }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, fontSize: 14 }}>{f.q}</span>
            <span style={{ fontSize: 18, transition: "transform 0.25s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0)", color: theme.green }}>⌄</span>
          </div>
          {openFaq === i && (
            <p style={{ marginTop: 10, fontSize: 13, color: theme.gray, lineHeight: 1.7, borderTop: `1px solid ${theme.greenPale}`, paddingTop: 10 }}>
              {f.a}
            </p>
          )}
        </div>
      ))}
    </AnimSection>
  );
}