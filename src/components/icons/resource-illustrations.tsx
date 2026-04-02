"use client";

import { cn } from "@/lib/utils";

interface IllustrationProps {
  className?: string;
}

/* ---------- 1. AI Validation — Neural network / brain with nodes ---------- */
export function AIValidationIllustration({ className }: IllustrationProps) {
  const nodes = [
    // Input layer
    { cx: 60, cy: 80, r: 5 },
    { cx: 60, cy: 140, r: 5 },
    { cx: 60, cy: 200, r: 5 },
    // Hidden layer 1
    { cx: 150, cy: 60, r: 6 },
    { cx: 150, cy: 125, r: 7 },
    { cx: 150, cy: 190, r: 6 },
    { cx: 150, cy: 240, r: 5 },
    // Hidden layer 2
    { cx: 250, cy: 75, r: 6 },
    { cx: 250, cy: 140, r: 8 },
    { cx: 250, cy: 205, r: 6 },
    // Output layer
    { cx: 340, cy: 110, r: 6 },
    { cx: 340, cy: 170, r: 6 },
  ];

  // Connection pairs (index-based)
  const connections = [
    [0, 3], [0, 4], [0, 5],
    [1, 3], [1, 4], [1, 5], [1, 6],
    [2, 4], [2, 5], [2, 6],
    [3, 7], [3, 8],
    [4, 7], [4, 8], [4, 9],
    [5, 8], [5, 9],
    [6, 9],
    [7, 10], [7, 11],
    [8, 10], [8, 11],
    [9, 10], [9, 11],
  ];

  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
    >
      <defs>
        <radialGradient id="ai-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.18" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ai-conn-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#ai-glow)" />

      {/* Connections */}
      {connections.map(([from, to], i) => (
        <line
          key={`c${i}`}
          x1={nodes[from].cx}
          y1={nodes[from].cy}
          x2={nodes[to].cx}
          y2={nodes[to].cy}
          stroke="url(#ai-conn-grad)"
          strokeWidth="1.2"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.2;0.6;0.2"
            dur={`${3 + (i % 5) * 0.7}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          {/* Outer glow */}
          <circle cx={n.cx} cy={n.cy} r={n.r * 2.5} fill="hsl(var(--primary))" opacity="0.06">
            <animate
              attributeName="r"
              values={`${n.r * 2};${n.r * 3};${n.r * 2}`}
              dur={`${3 + i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
          {/* Core */}
          <circle cx={n.cx} cy={n.cy} r={n.r} fill="hsl(var(--primary))">
            <animate
              attributeName="opacity"
              values="0.6;1;0.6"
              dur={`${2.5 + i * 0.3}s`}
              repeatCount="indefinite"
            />
          </circle>
          {/* Highlight */}
          <circle cx={n.cx} cy={n.cy} r={n.r * 0.4} fill="hsl(var(--on-primary))" opacity="0.7" />
        </g>
      ))}

      {/* Central brain outline */}
      <ellipse cx="200" cy="130" rx="90" ry="65" stroke="hsl(var(--tertiary))" strokeWidth="1" opacity="0.15" strokeDasharray="6 4">
        <animate attributeName="stroke-opacity" values="0.1;0.25;0.1" dur="5s" repeatCount="indefinite" />
      </ellipse>

      {/* Floating particles */}
      {[[30, 30, 2], [370, 40, 1.5], [380, 220, 2], [20, 230, 1.5], [200, 20, 1.8]].map(([cx, cy, r], i) => (
        <circle key={`fp${i}`} cx={cx} cy={cy} r={r} fill="hsl(var(--tertiary))" opacity="0.3">
          <animate attributeName="cy" values={`${cy};${Number(cy) - 12};${cy}`} dur={`${4 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/* ---------- 2. CSV — Document with checkmarks and shield ---------- */
export function CSVIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
    >
      <defs>
        <radialGradient id="csv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="csv-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#csv-glow)" />

      {/* Document body */}
      <rect x="100" y="30" width="130" height="180" rx="8" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.04" />
      {/* Document corner fold */}
      <path d="M200 30 L230 30 L230 60 L200 60 Z" fill="hsl(var(--primary))" fillOpacity="0.08" />
      <path d="M200 30 L230 60" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.3" />

      {/* Document lines */}
      {[75, 100, 125, 150, 175].map((y, i) => (
        <rect
          key={`line${i}`}
          x="120"
          y={y}
          width={i === 4 ? 60 : 90}
          height="3"
          rx="1.5"
          fill="hsl(var(--primary))"
          opacity={0.12 + i * 0.03}
        />
      ))}

      {/* Checkmarks on document */}
      {[78, 103, 128].map((y, i) => (
        <g key={`check${i}`}>
          <circle cx="125" cy={y} r="6" fill="hsl(var(--primary))" opacity="0.1" />
          <path
            d={`M121 ${y} L124 ${y + 3} L130 ${y - 3}`}
            stroke="hsl(var(--primary))"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.4;0.9;0.4"
              dur={`${3 + i * 0.6}s`}
              repeatCount="indefinite"
            />
          </path>
        </g>
      ))}

      {/* Shield */}
      <g transform="translate(270, 60)">
        {/* Shield glow */}
        <ellipse cx="40" cy="55" rx="50" ry="50" fill="hsl(var(--primary))" opacity="0.06">
          <animate attributeName="opacity" values="0.04;0.1;0.04" dur="4s" repeatCount="indefinite" />
        </ellipse>
        {/* Shield shape */}
        <path
          d="M40 10 L70 25 L70 65 C70 85 55 100 40 110 C25 100 10 85 10 65 L10 25 Z"
          stroke="url(#csv-shield-grad)"
          strokeWidth="2.5"
          fill="hsl(var(--primary))"
          fillOpacity="0.08"
        />
        {/* Shield checkmark */}
        <path
          d="M28 58 L36 66 L54 48"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Connection lines doc -> shield */}
      <line x1="230" y1="100" x2="280" y2="100" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4 3" opacity="0.3">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="230" y1="140" x2="280" y2="130" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4 3" opacity="0.3">
        <animate attributeName="stroke-dashoffset" values="0;-14" dur="2.5s" repeatCount="indefinite" />
      </line>

      {/* Floating particles */}
      {[[60, 50, 2], [360, 200, 1.5], [80, 220, 2], [350, 40, 1.8]].map(([cx, cy, r], i) => (
        <circle key={`p${i}`} cx={cx} cy={cy} r={r} fill="hsl(var(--tertiary))" opacity="0.25">
          <animate attributeName="cy" values={`${cy};${Number(cy) - 10};${cy}`} dur={`${3.5 + i * 0.8}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/* ---------- 3. Infrastructure — Server rack with cloud connections ---------- */
export function InfrastructureIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
    >
      <defs>
        <radialGradient id="infra-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="infra-rack-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#infra-glow)" />

      {/* Server rack */}
      <rect x="70" y="50" width="110" height="170" rx="6" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.04" />

      {/* Server units */}
      {[65, 105, 145, 185].map((y, i) => (
        <g key={`srv${i}`}>
          <rect x="82" y={y} width="86" height="28" rx="3" stroke="hsl(var(--primary))" strokeWidth="1.2" fill="hsl(var(--primary))" fillOpacity="0.06" />
          {/* LED indicators */}
          <circle cx="96" cy={y + 14} r="3" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
          </circle>
          <circle cx="108" cy={y + 14} r="3" fill="hsl(var(--secondary))" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          {/* Drive slots */}
          {[0, 1, 2, 3].map((j) => (
            <rect key={`slot${i}-${j}`} x={122 + j * 11} y={y + 6} width="8" height="16" rx="1" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.2" />
          ))}
        </g>
      ))}

      {/* Cloud shape */}
      <g transform="translate(260, 40)">
        <path
          d="M30 70 C10 70, 0 55, 10 42 C5 30, 18 15, 35 20 C42 5, 68 5, 75 20 C90 15, 105 30, 95 45 C108 55, 95 70, 80 70 Z"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          fill="hsl(var(--secondary))"
          fillOpacity="0.06"
        >
          <animate attributeName="fill-opacity" values="0.04;0.1;0.04" dur="5s" repeatCount="indefinite" />
        </path>
        {/* Cloud inner icon - up arrow */}
        <path d="M55 55 L55 35 M45 42 L55 32 L65 42" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </g>

      {/* Connection lines rack -> cloud */}
      {[90, 120, 150].map((y, i) => (
        <line key={`conn${i}`} x1="180" y1={y} x2="270" y2={75 + i * 5} stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="5 4" opacity="0.3">
          <animate attributeName="stroke-dashoffset" values="0;-18" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Data flow dots along connections */}
      {[0, 1, 2].map((i) => (
        <circle key={`dot${i}`} r="2.5" fill="hsl(var(--primary))" opacity="0.7">
          <animateMotion dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite">
            <mpath xlinkHref={`#infra-path-${i}`} />
          </animateMotion>
        </circle>
      ))}
      <path id="infra-path-0" d="M180 90 L270 75" fill="none" />
      <path id="infra-path-1" d="M180 120 L270 80" fill="none" />
      <path id="infra-path-2" d="M180 150 L270 85" fill="none" />

      {/* Bottom network lines */}
      <line x1="125" y1="220" x2="125" y2="240" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.3" />
      <line x1="90" y1="240" x2="160" y2="240" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.2" />
      {[90, 125, 160].map((x, i) => (
        <circle key={`bnode${i}`} cx={x} cy={240} r="3" fill="hsl(var(--primary))" opacity="0.4" />
      ))}

      {/* Floating particles */}
      {[[40, 30, 2], [370, 200, 1.5], [350, 170, 2], [30, 200, 1.8]].map(([cx, cy, r], i) => (
        <circle key={`fp${i}`} cx={cx} cy={cy} r={r} fill="hsl(var(--tertiary))" opacity="0.25">
          <animate attributeName="cy" values={`${cy};${Number(cy) - 12};${cy}`} dur={`${4 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/* ---------- 4. Data Integrity — Lock/shield with data flow ---------- */
export function DataIntegrityIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
    >
      <defs>
        <radialGradient id="di-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="di-lock-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" />
        </linearGradient>
      </defs>

      <rect width="400" height="250" fill="url(#di-glow)" />

      {/* Central lock */}
      <g transform="translate(160, 55)">
        {/* Lock body */}
        <rect x="10" y="55" width="60" height="50" rx="6" stroke="url(#di-lock-grad)" strokeWidth="2.5" fill="hsl(var(--primary))" fillOpacity="0.08" />
        {/* Lock shackle */}
        <path
          d="M22 55 L22 35 C22 18 58 18 58 35 L58 55"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Keyhole */}
        <circle cx="40" cy="78" r="6" fill="hsl(var(--primary))" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <rect x="38" y="82" width="4" height="10" rx="2" fill="hsl(var(--primary))" opacity="0.4" />
      </g>

      {/* Orbiting data ring */}
      <ellipse cx="200" cy="125" rx="120" ry="90" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.12" strokeDasharray="8 6">
        <animate attributeName="stroke-dashoffset" values="0;-28" dur="4s" repeatCount="indefinite" />
      </ellipse>

      {/* Data nodes on the ring — pre-computed to avoid hydration mismatch */}
      {([
        { cx: 320, cy: 125 },
        { cx: 260, cy: 202.94 },
        { cx: 140, cy: 202.94 },
        { cx: 80, cy: 125 },
        { cx: 140, cy: 47.06 },
        { cx: 260, cy: 47.06 },
      ] as const).map((node, i) => (
        <g key={`dn${i}`}>
          <circle cx={node.cx} cy={node.cy} r="4" fill="hsl(var(--primary))">
            <animate attributeName="opacity" values="0.4;0.9;0.4" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
          <line x1={node.cx} y1={node.cy} x2="200" y2="125" stroke="hsl(var(--secondary))" strokeWidth="0.8" opacity="0.15" />
        </g>
      ))}

      {/* Binary data streams */}
      {[
        { x: 50, y: 40, text: "01101" },
        { x: 310, y: 40, text: "10010" },
        { x: 50, y: 200, text: "11001" },
        { x: 320, y: 195, text: "01110" },
      ].map((d, i) => (
        <text
          key={`bin${i}`}
          x={d.x}
          y={d.y}
          fill="hsl(var(--primary))"
          fontSize="10"
          fontFamily="monospace"
          opacity="0.15"
        >
          {d.text}
          <animate attributeName="opacity" values="0.08;0.25;0.08" dur={`${3 + i * 0.7}s`} repeatCount="indefinite" />
        </text>
      ))}

      {/* Flowing data arrows */}
      {[
        "M60 125 L140 100",
        "M260 100 L340 75",
        "M60 145 L140 155",
        "M260 155 L340 180",
      ].map((d, i) => (
        <path
          key={`arrow${i}`}
          d={d}
          stroke="hsl(var(--tertiary))"
          strokeWidth="1.2"
          strokeDasharray="6 4"
          opacity="0.25"
          fill="none"
        >
          <animate attributeName="stroke-dashoffset" values="0;-20" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
        </path>
      ))}

      {/* Floating particles */}
      {[[30, 60, 2], [380, 80, 1.5], [370, 210, 2], [40, 210, 1.8], [200, 235, 1.5]].map(([cx, cy, r], i) => (
        <circle key={`fp${i}`} cx={cx} cy={cy} r={r} fill="hsl(var(--tertiary))" opacity="0.25">
          <animate attributeName="cy" values={`${cy};${Number(cy) - 12};${cy}`} dur={`${3.5 + i * 0.8}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/** Map resource IDs to illustration components */
export const resourceIllustrationMap: Record<string, React.ComponentType<IllustrationProps>> = {
  "validating-ai-systems": AIValidationIllustration,
  "csv-best-practices-2025": CSVIllustration,
  "infrastructure-qualification-guide": InfrastructureIllustration,
  "data-integrity-digital-age": DataIntegrityIllustration,
};
