"use client";

import { StarsBackground } from "@/components/animate-ui/StarsBackground";

export default function Background() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -10 }}>
      <StarsBackground
        starColor="#ffffff"
        speed={50}
        factor={0.03}
        className="absolute inset-0"
      />
    </div>
  );
}
