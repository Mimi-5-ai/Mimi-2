import theme from "../styles/theme";
import { categories, services } from "../data/servicesData";
import AnimSection from "./AnimSection";
import SectionHeader from "./SectionHeader";

export default function Categories({ onServiceOpen, onScrollToServices }) {
  return (
    <AnimSection style={{ paddingTop: 32 }}>
      <SectionHeader eyebrow="اختر ما يناسبك" title="ماذا تحتاج؟" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {categories.map(c => (
          <div
            key={c.label}
            onClick={() => c.serviceId
              ? onServiceOpen(services.find(s => s.id === c.serviceId))
              : onScrollToServices()
            }
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
              background: "white", borderRadius: 16, padding: "18px 10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "pointer",
              transition: "all 0.25s", border: "2px solid transparent",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = theme.greenLight; e.currentTarget.style.background = theme.greenPale; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "transparent";   e.currentTarget.style.background = "white"; }}
          >
            <img src={c.image} alt={c.label} style={{ width: 55, height: 55, objectFit: "contain", mixBlendMode: "multiply" }} />
            <span style={{ fontSize: 11, fontWeight: 700, textAlign: "center", color: theme.dark }}>{c.label}</span>
          </div>
        ))}
      </div>
    </AnimSection>
  );
}