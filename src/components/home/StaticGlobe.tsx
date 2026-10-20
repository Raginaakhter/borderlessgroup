"use client";

import { useReducedMotion } from "framer-motion";

export default function StaticGlobe() {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 500 500"
      className="h-full w-full"
      role="img"
      aria-label="Australia to Bangladesh shipping route"
    >
      <defs>
        <radialGradient id="earth" cx="35%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#5fb8ff" />
          <stop offset="35%" stopColor="#2a7fd4" />
          <stop offset="75%" stopColor="#0d3b7a" />
          <stop offset="100%" stopColor="#061a3c" />
        </radialGradient>
        <radialGradient id="shine" cx="30%" cy="22%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#14c4b4" stopOpacity="0" />
          <stop offset="88%" stopColor="#14c4b4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#14c4b4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffcf6b" />
          <stop offset="100%" stopColor="#c08a2a" />
        </linearGradient>
        <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="pinGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* outer halo */}
      <circle cx="250" cy="250" r="246" fill="url(#halo)" />

      {/* rotating earth group */}
      <g style={{ transformOrigin: "250px 250px", animation: reduce ? undefined : "orbit 60s linear infinite" }}>
        <circle cx="250" cy="250" r="210" fill="url(#earth)" />

        {/* meridians */}
        {Array.from({ length: 11 }).map((_, i) => (
          <ellipse
            key={`m${i}`}
            cx="250"
            cy="250"
            rx={210 - i * 19}
            ry={210}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.14}
            strokeWidth="0.8"
          />
        ))}

        {/* parallels */}
        {Array.from({ length: 7 }).map((_, i) => (
          <ellipse
            key={`p${i}`}
            cx="250"
            cy="250"
            rx={210}
            ry={210 - (i + 1) * 25}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.1}
            strokeWidth="0.8"
          />
        ))}

        {/* continents (stylised silhouettes) */}
        <g fill="#f3f8fe" fillOpacity="0.9">
          {/* Africa */}
          <path d="M225 215 Q235 205 248 212 Q260 220 262 240 Q268 260 258 285 Q252 310 240 318 Q228 320 225 300 Q215 286 220 270 Q214 248 225 215 Z" />
          {/* Europe */}
          <path d="M212 182 Q230 176 244 182 Q252 190 248 198 Q238 206 224 204 Q214 198 212 182 Z" />
          {/* Middle East / West Asia */}
          <path d="M258 210 Q278 198 292 210 Q298 226 284 236 Q268 236 258 228 Z" />
          {/* India */}
          <path d="M298 232 Q308 232 314 244 Q312 260 302 268 Q294 262 294 248 Z" />
          {/* South-East Asia */}
          <path d="M320 240 Q340 236 350 248 Q346 262 332 266 Q322 258 320 240 Z" />
          {/* Australia */}
          <path d="M330 300 Q358 294 372 304 Q376 320 360 326 Q340 328 330 318 Z" />
          {/* Americas sliver on edge */}
          <path d="M118 220 Q128 212 134 228 Q130 254 120 268 Q110 256 110 240 Z" />
        </g>

        {/* grid dots */}
        {[[160, 180], [340, 160], [200, 350], [360, 340], [280, 150], [150, 300], [380, 240]].map(([x, y], i) => (
          <circle key={`gd${i}`} cx={x} cy={y} r="1.3" fill="#ffffff" opacity="0.6" />
        ))}
      </g>

      {/* shine over earth (fixed, not rotating) */}
      <circle cx="250" cy="250" r="210" fill="url(#shine)" />

      {/* shipping arcs (fixed above the globe) */}
      <g filter="url(#arcGlow)" strokeLinecap="round" fill="none">
        <path d="M 362 184 Q 250 60 128 290" stroke="url(#arcGrad)" strokeWidth="2.6" strokeDasharray="3 6" />
        <path d="M 362 184 Q 300 150 240 240" stroke="#ffcf6b" strokeOpacity="0.55" strokeWidth="1.6" strokeDasharray="2 5" />
        <path d="M 128 290 Q 180 240 240 240" stroke="#14c4b4" strokeOpacity="0.65" strokeWidth="1.6" strokeDasharray="2 5" />
      </g>

      {/* pins */}
      <g filter="url(#pinGlow)">
        <circle cx="362" cy="184" r="22" fill="#ffcf6b" opacity="0.18" />
        <circle cx="362" cy="184" r="7" fill="#ffcf6b" />
        <circle cx="362" cy="184" r="3" fill="#5b3a05" />

        <circle cx="128" cy="290" r="22" fill="#14c4b4" opacity="0.22" />
        <circle cx="128" cy="290" r="7" fill="#14c4b4" />
        <circle cx="128" cy="290" r="3" fill="#063934" />
      </g>

      {/* labels */}
      <g fontFamily="Inter, system-ui" fontWeight="700">
        <text x="378" y="178" fill="#0b1e3f" fontSize="13">Bangladesh</text>
        <text x="62" y="316" fill="#0b1e3f" fontSize="13">Australia</text>
      </g>
    </svg>
  );
}
