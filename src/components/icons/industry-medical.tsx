import { cn } from "@/lib/utils";

interface IndustryIconProps {
  className?: string;
}

export function MedicalDevicesIcon({ className }: IndustryIconProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
    >
      <defs>
        <radialGradient id="medical-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--tertiary))" stopOpacity="0.12" />
          <stop offset="100%" stopColor="hsl(var(--tertiary))" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="300" fill="url(#medical-glow)" />

      {/* Heart rate monitor / ECG line */}
      <polyline
        points="20,160 60,160 80,160 95,160 105,120 115,200 125,90 135,180 145,145 160,160 200,160 240,160"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="500"
          to="0"
          dur="3s"
          repeatCount="indefinite"
        />
      </polyline>
      <polyline
        points="20,160 60,160 80,160 95,160 105,120 115,200 125,90 135,180 145,145 160,160 200,160 240,160"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        fill="none"
        opacity="0.7"
        strokeLinejoin="round"
        strokeDasharray="500"
        strokeDashoffset="0"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="500"
          to="-500"
          dur="4s"
          repeatCount="indefinite"
        />
      </polyline>

      {/* Monitor screen outline */}
      <rect
        x="250"
        y="60"
        width="130"
        height="95"
        rx="8"
        stroke="hsl(var(--tertiary))"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />
      {/* Monitor stand */}
      <line x1="315" y1="155" x2="315" y2="180" stroke="hsl(var(--tertiary))" strokeWidth="2" opacity="0.4" />
      <line x1="290" y1="180" x2="340" y2="180" stroke="hsl(var(--tertiary))" strokeWidth="2" opacity="0.4" />

      {/* Mini ECG on monitor */}
      <polyline
        points="265,105 280,105 288,90 296,120 304,80 312,115 318,100 330,105 365,105"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      >
        <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2s" repeatCount="indefinite" />
      </polyline>

      {/* Data readouts on monitor */}
      <text x="265" y="82" fill="hsl(var(--primary))" fontSize="10" opacity="0.4" fontFamily="monospace">72 BPM</text>
      <text x="265" y="135" fill="hsl(var(--tertiary))" fontSize="9" opacity="0.3" fontFamily="monospace">SpO₂ 98%</text>

      {/* Microscope outline */}
      <g opacity="0.4">
        {/* Eyepiece */}
        <rect x="60" y="30" width="20" height="12" rx="3" stroke="hsl(var(--secondary))" strokeWidth="1.5" fill="none" />
        {/* Tube */}
        <line x1="70" y1="42" x2="70" y2="75" stroke="hsl(var(--secondary))" strokeWidth="2" />
        {/* Body */}
        <line x1="70" y1="75" x2="90" y2="110" stroke="hsl(var(--secondary))" strokeWidth="2" />
        {/* Stage */}
        <line x1="75" y1="110" x2="105" y2="110" stroke="hsl(var(--secondary))" strokeWidth="2" />
        {/* Base */}
        <line x1="65" y1="125" x2="105" y2="125" stroke="hsl(var(--secondary))" strokeWidth="2" />
        <line x1="85" y1="110" x2="85" y2="125" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
      </g>

      {/* Circuit board traces at bottom */}
      <g opacity="0.2">
        <line x1="0" y1="250" x2="100" y2="250" stroke="hsl(var(--primary))" strokeWidth="1" />
        <line x1="100" y1="250" x2="120" y2="230" stroke="hsl(var(--primary))" strokeWidth="1" />
        <line x1="120" y1="230" x2="200" y2="230" stroke="hsl(var(--primary))" strokeWidth="1" />
        <line x1="200" y1="230" x2="210" y2="250" stroke="hsl(var(--primary))" strokeWidth="1" />
        <line x1="210" y1="250" x2="300" y2="250" stroke="hsl(var(--primary))" strokeWidth="1" />
        <line x1="300" y1="250" x2="310" y2="240" stroke="hsl(var(--primary))" strokeWidth="1" />
        <line x1="310" y1="240" x2="400" y2="240" stroke="hsl(var(--primary))" strokeWidth="1" />
        {/* Nodes */}
        {[100, 200, 300].map((x, i) => (
          <circle key={i} cx={x} cy={250} r={3} fill="hsl(var(--primary))" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur={`${2 + i}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>

      {/* Floating data particles */}
      {[[350, 220, 2], [30, 200, 1.5], [180, 50, 2], [380, 280, 1.8], [150, 270, 2]].map(([cx, cy, r], i) => (
        <circle key={`dp${i}`} cx={cx} cy={cy} r={r} fill="hsl(var(--tertiary))" opacity="0.25">
          <animate attributeName="cy" values={`${cy};${Number(cy) - 10};${cy}`} dur={`${3.5 + i * 0.6}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
