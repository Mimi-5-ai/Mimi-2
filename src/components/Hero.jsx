import theme from "../styles/theme";

export default function Hero({ onScrollToServices, onScrollToPortfolio }) {
  return (
    <section id="home" style={{
      background: "linear-gradient(180deg, #f5faf6 0%, #eef8f1 100%)",
      padding: "42px 20px 52px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid rgba(17, 24, 39, 0.05)",
    }}>
      <div style={{ position: "absolute", top: -30, right: -32, width: 140, height: 140, background: "rgba(45, 106, 79, 0.045)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: -35, left: -20, width: 120, height: 120, background: "rgba(45, 106, 79, 0.03)", borderRadius: "50%" }} />

      <div style={{ position: "relative" }}>

        <h1 style={{ color: theme.dark, fontSize: "clamp(28px, 6vw, 42px)", fontWeight: 500, lineHeight: 1.2, marginBottom: 10, letterSpacing: "-0.04em" }}>
          صمم موقعك<br />بهوية تناسبك
        </h1>

        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 30 }}>
          <button
            onClick={onScrollToServices}
            style={{ background: theme.green, color: "white", border: "none", padding: "12px 26px", borderRadius: 12, fontFamily: "'Cairo', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
          >
            تصفح الباقات
          </button>
          <button
            onClick={onScrollToPortfolio}
            style={{ background: "transparent", color: theme.green, border: "1px solid rgba(45, 106, 79, 0.2)", padding: "11px 20px", borderRadius: 12, fontFamily: "'Cairo', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}
          >
            شوف أعمالي
          </button>
        </div>

      </div>
    </section>
  );
}