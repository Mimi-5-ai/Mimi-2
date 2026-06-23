import theme from "../styles/theme";

export default function Footer() {
  return (
    <div style={{ 
      textAlign: "center", 
      padding: "28px 20px 16px", 
      color: theme.gray || "#6b7280", 
      fontSize: 12,
      direction: "rtl"
    }}>
      {/* اسم البراند الأصلي */}
      <div style={{ fontWeight: 900, fontSize: 18, color: theme.green || "#1e4d3a", marginBottom: 4 }}></div>

      {/* 📜 كرت توثيق العمل الحر الاحترافي (نفس التصميم الموزون والترتيب الصحيح) */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        border: "1px solid rgba(34, 197, 94, 0.2)", // حدود ناعمة متناسقة مع اللون الأخضر
        background: "#f9fafb", // خلفية فاتحة مريحة للعين وتمنع الاختفاء
        borderRadius: "14px",
        padding: "10px 18px",
        maxWidth: "290px",
        margin: "14px auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
      }}>
        {/* المربع الأخضر وعلامة الصح على اليمين بالملّي */}
        <div style={{
          background: "#22c55e", 
          width: "22px",
          height: "22px",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "12px",
          flexShrink: 0
        }}>
          ✓
        </div>

        {/* النصوص محاذية لليمين بجانب مربع الصح تماماً */}
        <div style={{ display: "flex", flexDirection: "column", textAlign: "right", gap: "1px" }}>
          <span style={{ fontSize: "11px", color: "#6b7280", fontWeight: 500 }}>موثق في منصة الأعمال رقم الوثيقة</span>
          <span style={{ fontSize: "14px", fontWeight: "700", color: "#1f2937", fontFamily: "sans-serif", letterSpacing: "0.5px" }}>
            FL-379392865 :
          </span>
        </div>
      </div>

      {/* الحقوق */}
      <p style={{ marginTop: 6, opacity: 0.6 }}> جميع الحقوق محفوظة © 2026 Soul </p>
    </div>
  );
}