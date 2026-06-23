import theme from "../styles/theme";

export default function ServiceDetail({ service, onBack, onContact }) {
  return (
    <div style={{ minHeight: "100vh", background: theme.cream, paddingBottom: 40 }}>

      {/* هيدر */}
      <div style={{ background: `linear-gradient(135deg, ${theme.green}, ${theme.greenMid})`, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={onBack}
          style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", width: 36, height: 36, borderRadius: 10, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          ←
        </button>
        <div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>الخدمات</div>
          <div style={{ color: "white", fontWeight: 800, fontSize: 16 }}>{service.title}</div>
        </div>
      </div>

      <div style={{ padding: "20px 16px", maxWidth: 640, margin: "0 auto" }}>

        {/* بطاقة رئيسية */}
        <div style={{ background: "white", borderRadius: 20, padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", marginBottom: 16 }}>
          <span style={{ background: service.badgeColor, color: "white", fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, display: "inline-block", marginBottom: 10 }}>
            {service.badge}
          </span>
          <h1 style={{ fontSize: 26, fontWeight: 900, display: "flex", alignItems: "center", gap: 8 }}>
            <span>{service.emoji}</span>{service.title}
          </h1>
          <p style={{ color: theme.gray, fontSize: 14, marginTop: 6, lineHeight: 1.6 }}>{service.desc}</p>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginTop: 16, paddingTop: 16, borderTop: `1px solid ${theme.greenPale}` }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: theme.green }}>{service.price}</div>
            <div style={{ marginBottom: 6 }}>
              <div style={{ fontSize: 12, color: theme.gray, textDecoration: "line-through" }}>{service.oldPrice} ر.س</div>
              <div style={{ fontSize: 14, color: theme.gray }}>ر.س</div>
            </div>
            <div style={{ marginRight: "auto" }}>
              <span style={{ background: "#fff3cd", color: "#92400e", fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>
                وفّر {Math.round((1 - parseInt(service.price) / parseInt(service.oldPrice)) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* تفاصيل الباقة */}
        <div style={{ background: "white", borderRadius: 20, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", marginBottom: 16 }}>
          <h3 style={{ fontWeight: 800, marginBottom: 14, fontSize: 16 }}>📋 تفاصيل الباقة</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {[
              { icon: "⏱️", label: "مدة التسليم", value: service.details.duration },
              { icon: "✏️", label: "التعديلات",   value: service.details.revisions },
              { icon: "🛡️", label: "الدعم الفني", value: service.details.support   },
              { icon: "🌟", label: "الجودة",       value: "احترافية 100%"           },
            ].map(item => (
              <div key={item.label} style={{ background: theme.cream, borderRadius: 12, padding: 12 }}>
                <div style={{ fontSize: 20, marginBottom: 4 }}>{item.icon}</div>
                <div style={{ fontSize: 11, color: theme.gray }}>{item.label}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 2 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ما يشمله العرض */}
        <div style={{ background: "white", borderRadius: 20, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.05)", marginBottom: 16 }}>
          <h3 style={{ fontWeight: 800, marginBottom: 14, fontSize: 16 }}>✅ ما يشمله العرض</h3>
          {[...service.features, ...service.details.extras].map(f => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0", borderBottom: `1px solid ${theme.greenPale}` }}>
              <div style={{ width: 22, height: 22, background: theme.greenPale, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: theme.green, flexShrink: 0 }}>✓</div>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{f}</span>
            </div>
          ))}
        </div>

        {/* أزرار */}
        <button
          onClick={onContact}
          style={{ width: "100%", background: theme.green, color: "white", border: "none", padding: "15px", borderRadius: 14, fontFamily: "'Cairo', sans-serif", fontSize: 16, fontWeight: 700, cursor: "pointer", marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          🛒 اطلب الآن
        </button>
        <button
          onClick={onBack}
          style={{ width: "100%", background: "transparent", color: theme.green, border: `2px solid ${theme.green}`, padding: "13px", borderRadius: 14, fontFamily: "'Cairo', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
        >
          ← العودة للخدمات
        </button>
      </div>
    </div>
  );
}