import theme from "../styles/theme";

export default function Navbar({ cartCount, onLogoClick, onCartClick }) {
  return (
    <nav style={{
      position: "sticky", 
      top: 0,
      background: "rgba(248,249,244,0.96)", 
      backdropFilter: "blur(10px)",
      zIndex: 50, 
      borderBottom: `1px solid ${theme.greenPale}`,
      padding: "0 20px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between",
      direction: "ltr", // السلة يسار واللوقو يمين ثابتين
      height: "70px"
    }}>
      
      {/* 🛒 السلة — يسار */}
      <div style={{ position: "relative", cursor: "pointer" }} onClick={onCartClick}>
        <span style={{ fontSize: 22 }}>🛒</span>
        {cartCount > 0 && (
          <span style={{
            position: "absolute", top: -4, right: -4,
            background: theme.orange, color: "white",
            fontSize: 10, fontWeight: 700, width: 16, height: 16,
            borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {cartCount}
          </span>
        )}
      </div>

      {/* 💎 لوقو SOUL النصي المتدرج — يمين (معدل المحاذاة) */}
      <svg 
        viewBox="320 460 960 240" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        onClick={onLogoClick}
        style={{ 
          height: "38px", 
          width: "auto", 
          cursor: "pointer",
          display: "block",
          marginRight: "-25px" // 👈 السحر هنا! يسحب اللوقو لليمين ويلغي فراغ الحروف. (لو تبينه يمين أكثر زيدي الرقم لـ -30px)
        }}
      >
        <defs>
          <linearGradient id="textGradient" x1="420" y1="520" x2="1180" y2="610" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#123F63"/>
            <stop offset="50%" stopColor="#284E72"/>
            <stop offset="100%" stopColor="#123F63"/>
          </linearGradient>

          <style>{`
            .brand {
              font-family: "Cormorant Garamond", "Didot", "Bodoni MT", "Times New Roman", serif;
              font-weight: 500;
              letter-spacing: 24px;
            }
          `}</style>
        </defs>

        <text x="800" y="640" textAnchor="middle" className="brand" fontSize="172" fill="url(#textGradient)">SOUL</text>
      </svg>

    </nav>
  );
}