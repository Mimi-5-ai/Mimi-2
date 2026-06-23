import { useState } from "react";
import theme from "../styles/theme";

export default function ProjectDetail({ project, onBack, onContact }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null); // 👈 ستايت سحرية جديدة لتخزين الصورة المراد تكبيرها
  const images = project.images || [];
  const hasImages = images.length > 0;

  const prevSlide = () => 
    setActiveSlide(i => (i === 0 ? images.length - 1 : i - 1));

  const nextSlide = () => 
    setActiveSlide(i => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div 
      style={{ 
        minHeight: "100vh", 
        background: theme.cream, 
        paddingBottom: 40 
      }}
    >
      {/* ── هيدر ── */}
      <div 
        style={{
          background: `linear-gradient(135deg, ${theme.green}, ${theme.greenMid})`,
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "white",
            width: 36,
            height: 36,
            borderRadius: 10,
            fontSize: 18,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ←
        </button>
        <div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>معرض الأعمال</div>
          <div style={{ color: "white", fontWeight: 800, fontSize: 16 }}>{project.name}</div>
        </div>
      </div>

      <div style={{ padding: "20px 16px", maxWidth: 640, margin: "0 auto" }}>
        
        {/* ── Image Slider ── */}
        {hasImages ? (
          <div 
            style={{
              background: "white",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              marginBottom: 20,
              position: "relative",
            }}
          >
            {/* Image Container */}
            <div 
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                background: "#ffffff",
                overflow: "hidden",
              }}
            >
              <img
                src={images[activeSlide]}
                alt={`${project.name} - ${activeSlide + 1}`}
                onClick={() => setLightboxImage(images[activeSlide])} // 👈 عند الضغط نفتح الصورة الكبيرة
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  transition: "opacity 0.3s",
                  cursor: "zoom-in", // 👈 يتحول الماوس لعدسة تكبير فخمة تنبّه العميل
                }}
              />

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: 10,
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.45)",
                      border: "none",
                      color: "white",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      fontSize: 16,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                      zIndex: 10,
                    }}
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextSlide}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 10,
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.45)",
                      border: "none",
                      color: "white",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      fontSize: 16,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                      zIndex: 10,
                    }}
                  >
                    ›
                  </button>
                </>
              )}

              {/* Counter */}
              <div 
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: 20,
                  backdropFilter: "blur(4px)",
                  zIndex: 10,
                }}
              >
                {activeSlide + 1} / {images.length}
              </div>
            </div>

            {/* Dots Navigation */}
            {images.length > 1 && (
              <div style={{ display: "flex", justifyContent: "center", gap: 6, padding: "12px 0 14px" }}>
                {images.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    style={{
                      width: i === activeSlide ? 20 : 8,
                      height: 8,
                      borderRadius: 20,
                      background: i === activeSlide ? theme.green : theme.greenPale,
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div 
            style={{
              background: project.color,
              borderRadius: 20,
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 80,
              marginBottom: 20,
            }}
          >
            {project.emoji}
          </div>
        )}

        {/* ── Project Info ── */}
        <div 
          style={{
            background: "white",
            borderRadius: 20,
            padding: 24,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            marginBottom: 20,
          }}
        >
          <span 
            style={{
              background: theme.greenPale,
              color: theme.green,
              fontSize: 12,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 20,
              display: "inline-block",
              marginBottom: 10,
            }}
          >
            {project.type}
          </span>
          <h1 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>{project.name}</h1>
          <p style={{ color: theme.gray, fontSize: 14, lineHeight: 1.7 }}>{project.desc}</p>
        </div>

        {/* ── Technologies ── */}
        <div 
          style={{
            background: "white",
            borderRadius: 20,
            padding: 20,
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            marginBottom: 20,
          }}
        >
          <h3 style={{ fontWeight: 800, marginBottom: 14, fontSize: 16 }}>🛠️ التقنيات المستخدمة</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tags.map(tag => (
              <span
                key={tag}
                style={{
                  background: theme.greenPale,
                  color: theme.green,
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Action Buttons ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button
            onClick={onContact}
            style={{
              width: "100%",
              background: theme.green,
              color: "white",
              border: "none",
              padding: "15px",
              borderRadius: 14,
              fontFamily: "'Cairo', sans-serif",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "all 0.25s",
            }}
            onMouseEnter={e => { e.target.style.opacity = "0.9"; }}
            onMouseLeave={e => { e.target.style.opacity = "1"; }}
          >
            💬 اطلب مشروعاً مشابهاً
          </button>
          <button
            onClick={onBack}
            style={{
              width: "100%",
              background: "transparent",
              color: theme.green,
              border: `2px solid ${theme.green}`,
              padding: "13px",
              borderRadius: 14,
              fontFamily: "'Cairo', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.25s",
            }}
            onMouseEnter={e => { e.target.style.background = theme.greenPale; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; }}
          >
            ← العودة للأعمال
          </button>
        </div>

      </div>

      {/* ── 🔍 ستارة التكبير المنبثقة السحرية (Lightbox Modal) ── */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)} // تغلق تلقائياً بمجرد الضغط في أي مكان بالشاشة
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(15, 23, 42, 0.88)", // خلفية داكنة فخمة جداً متناسقة مع الهوية الجديدة
            backdropFilter: "blur(10px)", // غباش سينمائي مودرن يعزل العناصر الخلفية
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999, // تظهر فوق كل شيء بالموقع بدون استثناء
            cursor: "zoom-out", // يتحول شكل الماوس لعدسة تصغير عند الرغبة بالإغلاق
          }}
        >
          <img 
            src={lightboxImage} 
            alt="Enlarged view"
            style={{ 
              maxWidth: "94%", 
              maxHeight: "88%", 
              borderRadius: "14px", 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
              objectFit: "contain",
              userSelect: "none"
            }} 
          />
        </div>
      )}

    </div>
  );
}