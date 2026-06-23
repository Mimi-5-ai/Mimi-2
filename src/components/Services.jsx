import { useState } from "react";
import theme from "../styles/theme";
import { services } from "../data/servicesData";
import AnimSection from "./AnimSection";
import SectionHeader from "./SectionHeader";

export default function Services({ onServiceOpen }) {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <AnimSection id="services" style={{ paddingTop: 36 }}>
      <SectionHeader eyebrow="حتى نفاد الكمية!" title="باقاتنا المميزة" />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {services.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredService(i)}
            onMouseLeave={() => setHoveredService(null)}
            style={{
              background: "white", borderRadius: 20, padding: 22,
              boxShadow: hoveredService === i ? "0 12px 32px rgba(45,106,79,0.15)" : "0 2px 12px rgba(0,0,0,0.06)",
              cursor: "pointer", position: "relative", overflow: "hidden",
              transition: "all 0.3s",
              transform: hoveredService === i ? "translateY(-4px)" : "none",
            }}
          >
            {/* شريط ملوّن عند hover */}
            <div style={{
              position: "absolute", top: 0, right: 0, left: 0, height: 4,
              background: hoveredService === i ? theme.greenLight : "transparent",
              transition: "background 0.3s", borderRadius: "20px 20px 0 0",
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div>
                <span style={{ background: s.badgeColor, color: "white", fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, display: "inline-block", marginBottom: 8 }}>
                  {s.badge}
                </span>
                <h3 style={{ fontSize: 18, fontWeight: 800, display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{s.emoji}</span>{s.title}
                </h3>
              </div>
              <div style={{ textAlign: "left", flexShrink: 0 }}>
                <div style={{ fontSize: 11, color: theme.gray, textDecoration: "line-through" }}>{s.oldPrice} ر.س</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: theme.green }}>{s.price} <span style={{ fontSize: 12 }}>ر.س</span></div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: theme.gray, marginBottom: 12, lineHeight: 1.6 }}>{s.desc}</p>

            <div style={{ marginBottom: 14 }}>
              {s.features.map(f => (
                <span key={f} style={{ background: theme.greenPale, color: theme.green, padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600, display: "inline-block", margin: "3px 2px" }}>
                  ✓ {f}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => onServiceOpen(s)}
                style={{ flex: 1, background: theme.green, color: "white", border: "none", padding: "12px", borderRadius: 12, fontFamily: "'Cairo', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}
              >
                🛒 اطلب الآن
              </button>
              <button
                onClick={() => onServiceOpen(s)}
                style={{ background: theme.greenPale, color: theme.green, border: "none", padding: "12px 16px", borderRadius: 12, fontFamily: "'Cairo', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
              >
                التفاصيل ←
              </button>
            </div>
          </div>
        ))}
      </div>
    </AnimSection>
  );
}