import { cn } from "@/lib/utils";

interface IndustryIconProps {
  className?: string;
}

export function PharmaIcon({ className }: IndustryIconProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
    >
      <defs>
        <radialGradient id="pharma-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.12" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill="url(#pharma-glow)" />

      {/* Flask / Beaker */}
      <path
        d="M170 80 L170 160 L130 240 C125 250, 130 260, 140 260 L260 260 C270 260, 275 250, 270 240 L230 160 L230 80"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        fill="none"
        opacity="0.8"
      />
      {/* Flask top */}
      <line x1="160" y1="80" x2="240" y2="80" stroke="hsl(var(--primary))" strokeWidth="2.5" opacity="0.8" />

      {/* Liquid inside flask */}
      <path
        d="M148 210 L252 210 L270 240 C275 250, 270 260, 260 260 L140 260 C130 260, 125 250, 130 240 Z"
        fill="hsl(var(--primary))"
        opacity="0.1"
      >
        <animate
          attributeName="d"
          dur="4s"
          repeatCount="indefinite"
          values="
            M148 210 L252 210 L270 240 C275 250, 270 260, 260 260 L140 260 C130 260, 125 250, 130 240 Z;
            M145 205 L255 215 L270 240 C275 250, 270 260, 260 260 L140 260 C130 260, 125 250, 130 240 Z;
            M148 210 L252 210 L270 240 C275 250, 270 260, 260 260 L140 260 C130 260, 125 250, 130 240 Z
          "
        />
      </path>

      {/* Bubbles in flask */}
      {[[180, 230, 4], [210, 240, 3], [195, 220, 5], [220, 235, 3]].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.4">
          <animate attributeName="cy" values={`${cy};${Number(cy) - 20};${cy}`} dur={`${2 + i * 0.7}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur={`${2 + i * 0.7}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Molecular structure to the right */}
      {/* Hexagon ring */}
      <polygon
        points="310,100 340,85 370,100 370,130 340,145 310,130"
        stroke="hsl(var(--secondary))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <polygon
        points="370,100 400,85 430,100 430,130 400,145 370,130"
        stroke="hsl(var(--secondary))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
      />

      {/* Bond lines */}
      <line x1="340" y1="145" x2="340" y2="175" stroke="hsl(var(--secondary))" strokeWidth="1.5" opacity="0.4" />
      <line x1="310" y1="130" x2="280" y2="150" stroke="hsl(var(--tertiary))" strokeWidth="1" opacity="0.3" />

      {/* Molecular nodes */}
      {[[310, 100], [340, 85], [370, 100], [370, 130], [340, 145], [310, 130], [340, 175], [280, 150]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={3} fill="hsl(var(--secondary))" opacity={0.4 + (i % 2) * 0.2} />
      ))}

      {/* Pills */}
      <rect x="60" y="180" width="50" height="22" rx="11" stroke="hsl(var(--tertiary))" strokeWidth="1.5" fill="none" opacity="0.4" />
      <line x1="85" y1="180" x2="85" y2="202" stroke="hsl(var(--tertiary))" strokeWidth="1" opacity="0.3" />

      <rect x="55" y="215" width="50" height="22" rx="11" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.3" transform="rotate(-15 80 226)" />

      {/* Cross / Plus sign */}
      <line x1="85" y1="50" x2="85" y2="70" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3" />
      <line x1="75" y1="60" x2="95" y2="60" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3" />

      {/* Floating particles */}
      {[[50, 100, 2], [380, 200, 1.5], [100, 260, 2], [350, 260, 1.8]].map(([cx, cy, r], i) => (
        <circle key={`fp${i}`} cx={cx} cy={cy} r={r} fill="hsl(var(--primary))" opacity="0.2">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${3 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
