import Hero        from "../components/Hero";
import Categories  from "../components/Categories";
import Services    from "../components/Services";
import Portfolio   from "../components/Portfolio";
import Testimonials from "../components/Testimonials"; // 👈 تعديل المسار والاسم هنا (أضفنا حرف s)
import FAQ         from "../components/FAQ";
import Contact     from "../components/Contact";
import Footer      from "../components/Footer";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function HomePage({ onServiceOpen, onProjectOpen }) {
  return (
    <div>
      <Hero
        onScrollToServices={() => scrollTo("services")}
        onScrollToPortfolio={() => scrollTo("portfolio")}
      />

      <div style={{ padding: "0 16px", maxWidth: 640, margin: "0 auto" }}>
        <Categories
          onServiceOpen={onServiceOpen}
          onScrollToServices={() => scrollTo("services")}
        />
        <Services   onServiceOpen={onServiceOpen} />
        <Portfolio  onProjectOpen={onProjectOpen} />
        <Testimonials /> {/* 👈 استبدال المكون هنا ليعرض اللوحة التفاعلية الجديدة */}
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}