import { useState, useEffect } from "react";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import theme from "../styles/theme";
import AnimSection from "./AnimSection";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    text: "", // تم حذف خانة الوظيفة تماماً
    rating: 5,
  });

  // جلب التعليقات من Firestore في الوقت الفعلي
  useEffect(() => {
    const q = query(collection(db, "testimonials"), orderBy("timestamp", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTestimonials(data);
    });
    return () => unsubscribe();
  }, []);

  // إرسال التعليق الجديد
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) {
      alert("الرجاء ملء جميع الحقول");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "testimonials"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      
      setFormData({ name: "", text: "", rating: 5 });
      setSuccessMessage("تم حفظ رأيك بنجاح، شكراً لك");
      
      setTimeout(() => {
        setSuccessMessage("");
        setShowForm(false);
      }, 3000);

    } catch (error) {
      console.error("خطأ:", error);
      alert("حدث خطأ أثناء الحفظ، الرجاء المحاولة مجدداً");
    } finally {
      setLoading(false);
    }
  };

  const next = () => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const prev = () => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  if (testimonials.length === 0) {
    return (
      <AnimSection style={{ paddingTop: 24 }}>
        <div style={{ textAlign: "center", padding: "40px 20px", background: "white", borderRadius: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <p style={{ color: theme.gray, fontSize: 16, marginBottom: 16 }}>لا توجد تعليقات حتى الآن</p>
          <button
            onClick={() => setShowForm(true)}
            style={{ background: theme.green, color: "white", border: "none", padding: "12px 28px", borderRadius: 12, fontFamily: "'Cairo', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
          >
            كن أول من يعلق
          </button>
        </div>
        {showForm && <TestimonialForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} loading={loading} setShowForm={setShowForm} successMessage={successMessage} />}
      </AnimSection>
    );
  }

  const testimonial = testimonials[current];
  return (
    <AnimSection style={{ paddingTop: 24 }}>
      {/* كرت عرض التعليقات الفخم */}
      <div style={{
        background: `linear-gradient(135deg, ${theme.green}, ${theme.greenMid})`,
        borderRadius: 20,
        padding: "32px 20px 24px 20px",
        color: "white",
        marginBottom: 16,
        position: "relative",
        overflow: "hidden"
      }}>
        {/* نظام النجوم النصية الرسمية (ذهبي للمقيم، وأبيض شفاف للفارغ) */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "4px", 
          fontSize: 22, 
          marginBottom: 16, 
          alignItems: "center"
        }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ 
                color: i < (testimonial.rating || 5) ? "#FFC107" : "rgba(255,255,255,0.25)",
                lineHeight: "1"
            }}>
              ★
            </span>
          ))}
        </div>

        {/* نص التعليق */}
        <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.8, marginBottom: 16, textAlign: "center" }}>
          "{testimonial.text}"
        </p>

        {/* اسم الشخص فقط بعد حذف الوظيفة */}
        <div style={{ textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 700 }}>{testimonial.name}</div>
        </div>

        {/* أزرار التنقل */}
        {testimonials.length > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 16, alignItems: "center" }}>
            <button onClick={prev} style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <div style={{ display: "flex", gap: 6 }}>
              {testimonials.map((_, i) => (
                <div key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 20, background: i === current ? "white" : "rgba(255,255,255,0.5)", cursor: "pointer", transition: "all 0.3s" }} />
              ))}
            </div>
            <button onClick={next} style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", width: 36, height: 36, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
        )}
      </div>

      <div style={{ textAlign: "center", marginBottom: 16, color: theme.gray, fontSize: 13 }}>
        {current + 1} من {testimonials.length} تعليق
      </div>

      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <button
          onClick={() => setShowForm(!showForm)}
          style={{ background: theme.green, color: "white", border: "none", padding: "13px 28px", borderRadius: 14, fontFamily: "'Cairo', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}
        >
          {showForm ? "إغلاق" : "أضف رأيك"}
        </button>
      </div>

      {showForm && <TestimonialForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} loading={loading} setShowForm={setShowForm} successMessage={successMessage} />}
    </AnimSection>
  );
}

// مكون نموذج الإضافة الاحترافي والمختصر
function TestimonialForm({ formData, setFormData, handleSubmit, loading, setShowForm, successMessage }) {
  return (
    <div style={{ background: "white", borderRadius: 20, padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", marginTop: 12 }}>
      <h3 style={{ fontWeight: 800, marginBottom: 16, fontSize: 16 }}>شارك رأيك معنا</h3>
      
      {successMessage ? (
        <div style={{ background: "#f0fdf4", color: "#16a34a", padding: "16px", borderRadius: 12, textAlign: "center", fontWeight: 700, fontSize: 14, border: "1px solid #bbf7d0", marginBottom: 12 }}>
          {successMessage}
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <input type="text" placeholder="اسمك الكامل" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ padding: "12px 14px", border: `1px solid ${theme.greenPale}`, borderRadius: 10, fontFamily: "'Cairo', sans-serif", fontSize: 14 }} required />
          {/* تم حذف حقل الوظيفة من هنا تماماً */}
          <textarea placeholder="اكتب رأيك هنا..." value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} style={{ padding: "12px 14px", border: `1px solid ${theme.greenPale}`, borderRadius: 10, fontFamily: "'Cairo', sans-serif", fontSize: 14, minHeight: 100, resize: "none" }} required />
          
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <label style={{ fontSize: 14, fontWeight: 700 }}>التقييم:</label>
            <div style={{ display: "flex", gap: 4 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star} 
                  type="button" 
                  onClick={() => setFormData({ ...formData, rating: star })} 
                  style={{ 
                    background: "none", 
                    border: "none", 
                    fontSize: 26, 
                    cursor: "pointer", 
                    color: star <= formData.rating ? "#FFC107" : "#E2E8F0", 
                    padding: 0,
                    lineHeight: "1"
                  }}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <button type="submit" disabled={loading} style={{ flex: 1, background: theme.green, color: "white", border: "none", padding: "12px", borderRadius: 10, fontFamily: "'Cairo', sans-serif", fontSize: 14, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer" }}>
              {loading ? "جاري الإرسال..." : "أرسل الرأي"}
            </button>
            <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, background: theme.greenPale, color: theme.green, border: "none", padding: "12px", borderRadius: 10, fontFamily: "'Cairo', sans-serif", fontSize: 14, fontWeight: 700 }}>إلغاء</button>
          </div>
        </form>
      )}
    </div>
  );
}