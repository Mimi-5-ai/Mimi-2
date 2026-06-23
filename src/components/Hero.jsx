import theme from "../styles/theme";

export default function Hero({ onScrollToServices, onScrollToPortfolio }) {
  return (
    <section id="home" style={{
      background: `linear-gradient(155deg, ${theme.green} 0%, ${theme.greenMid} 60%, ${theme.greenLight} 100%)`,
      padding: "48px 20px 60px", textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: -60, left: -30, width: 160, height: 160, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />

      <div style={{ position: "relative" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.15)", padding: "6px 14px", borderRadius: 20, marginBottom: 16 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.9)", fontWeight: 600 }}> متاح للعمل  ✨</span>
        </div>

        <h1 style={{ color: "white", fontSize: "clamp(26px, 7vw, 46px)", fontWeight: 900, lineHeight: 1.3, marginBottom: 12 }}>
          صمّم موقعك<br />وابدأ انطلاقتك 🚀
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, maxWidth: 340, margin: "0 auto 28px" }}>
          خدمات تصميم مواقع ومتاجر إلكترونية احترافية  بأسعار منافسة وجودة لا تُنافس
        </p>

        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
          <button
            onClick={onScrollToServices}
            style={{ background: "white", color: theme.green, border: "none", padding: "13px 28px", borderRadius: 14, fontFamily: "'Cairo', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
          >
            تصفح الباقات
          </button>
          <button
            onClick={onScrollToPortfolio}
            style={{ background: "transparent", color: "white", border: "2px solid rgba(255,255,255,0.6)", padding: "11px 24px", borderRadius: 14, fontFamily: "'Cairo', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
          >
            شوف أعمالي
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, maxWidth: 380, margin: "0 auto" }}>
          {[["15+", "مشروع مكتمل"], ["100%", "رضا العملاء"], ["48h", "أسرع تسليم"]].map(([n, l]) => (
            <div key={l} style={{ background: "white", borderRadius: 16, padding: "14px 8px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: theme.green }}>{n}</div>
              <div style={{ fontSize: 11, color: theme.gray, fontWeight: 600 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}