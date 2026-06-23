import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function AnimSection({ children, style, id }) {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div
      id={id}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.55s ease, transform 0.55s ease",
        ...style,
      }}
    >
      {children}
    </div>
  );
}