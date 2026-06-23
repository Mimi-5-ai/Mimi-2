import theme from "../styles/theme";

export default function SectionHeader({ eyebrow, title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 20 }}>
      <p style={{ color: theme.greenMid, fontSize: 13, fontWeight: 700, marginBottom: 4 }}>
        {eyebrow}
      </p>
      <h2 style={{ fontSize: 22, fontWeight: 800 }}>{title}</h2>
      <div style={{ display: "flex", alignItems: "center", gap: 10, width: 160, margin: "8px auto 0" }}>
        <div style={{ flex: 1, height: 1.5, background: theme.greenLight, opacity: 0.5 }} />
        <div style={{ width: 8, height: 8, background: theme.greenLight, borderRadius: "50%" }} />
        <div style={{ flex: 1, height: 1.5, background: theme.greenLight, opacity: 0.5 }} />
      </div>
    </div>
  );
}