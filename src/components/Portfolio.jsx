import theme from "../styles/theme";
import { projects } from "../data/servicesData";
import AnimSection from "./AnimSection";
import SectionHeader from "./SectionHeader";
import * as Lucide from "lucide-react"; // 👈 استيراد مكتبة الأيقونات المودرن

export default function Portfolio({ onProjectOpen }) {
  return (
    <AnimSection 
      id="portfolio" 
      style={{ paddingTop: 36 }}
    >
      <SectionHeader 
        eyebrow="معرض الأعمال" 
        title="أحدث مشاريعي" 
      />
      
      {/* شبكة عرض المشاريع */}
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: 12 
        }}
      >
        {projects.map((p, i) => {
          // 👈 جلب الأيقونة المحددة لكل مشروع ديناميكياً بناءً على اسمها في ملف البيانات
          const IconComponent = Lucide[p.icon];

          return (
            <div
              key={i}
              onClick={() => onProjectOpen(p)}
              style={{ 
                background: "white", 
                borderRadius: 18, 
                padding: 18, 
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)", 
                cursor: "pointer", 
                transition: "all 0.3s" 
              }}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = "translateY(-4px)"; 
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.1)"; 
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = "none"; 
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)"; 
              }}
            >
              {/* صندوق الأيقونة العلوي */}
              <div 
                style={{ 
                  background: p.color, 
                  borderRadius: 12, 
                  height: 86, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  marginBottom: 10 
                }}
              >
                {/* 👈 هنا يتم عرض الأيقونة الخطية الفخمة بلون ثيمك الأخضر بدلاً من الإيموجي القديم */}
                {IconComponent ? (
                  <IconComponent 
                    size={34} 
                    color={theme.green} 
                    strokeWidth={1.8} 
                  />
                ) : null}
              </div>

              {/* نصوص الكرت */}
              <div 
                style={{ 
                  fontWeight: 700, 
                  fontSize: 14 
                }}
              >
                {p.name}
              </div>
              
              <div 
                style={{ 
                  fontSize: 11, 
                  color: theme.gray, 
                  marginTop: 2 
                }}
              >
                {p.type}
              </div>
            </div>
          );
        })}
      </div>
    </AnimSection>
  );
}