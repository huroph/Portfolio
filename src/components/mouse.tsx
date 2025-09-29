
import React, { useState, useRef, useEffect } from "react";

const COLORS = ["#ff4300"];
const TRAIL_COUNT = 15;

const MouseTrail = () => {
  const [trails, setTrails] = useState<any[]>([]);
  const [show, setShow] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  // Initialisation des trails
  useEffect(() => {
    const newTrails = [];
    for (let i = 0; i < TRAIL_COUNT; i++) {
      newTrails.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        size: Math.random() * 4 + 4,
        speed: 0.1 + Math.random() * 0.1,
      });
    }
    setTrails(newTrails);
  }, []);

  // Animation
  useEffect(() => {
    let animId: number;
    const animate = () => {
      setTrails((prev) => {
        let prevX = mouse.current.x;
        let prevY = mouse.current.y;
        return prev.map((trail) => {
          // Attiré par la souris
          trail.x += (prevX - trail.x) * trail.speed;
          trail.y += (prevY - trail.y) * trail.speed;
          prevX = trail.x;
          prevY = trail.y;
          return { ...trail };
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  // Mouse events
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setShow(true);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Hide on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setShow(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!show) return null;

  return (
    <>
      {trails.map((trail, i) => {
        const dx = trail.x - mouse.current.x;
        const dy = trail.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const opacity = dist < 50 ? 0 : 1 - i / trails.length;
        const scale = 1 - (i / trails.length) * 0.8;
        return (
          <div
            key={i}
            style={{
              position: "fixed",
              left: trail.x,
              top: trail.y,
              width: `${trail.size * scale}px`,
              height: `${trail.size * scale}px`,
              borderRadius: "50%",
              background: COLORS[0],
              pointerEvents: "none",
             
              transform: "translate(-50%, -50%)",
              transition: "transform 0.1s ease-out, opacity 0.3s ease-out",
              opacity,
            }}
          ></div>
        );
      })}
    </>
  );
};

export default MouseTrail;
