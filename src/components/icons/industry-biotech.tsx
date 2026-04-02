import { cn } from "@/lib/utils";

interface IndustryIconProps {
  className?: string;
}

export function BiotechIcon({ className }: IndustryIconProps) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-full", className)}
    >
      {/* Background glow */}
      <defs>
        <radialGradient id="biotech-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="biotech-strand" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="url(#biotech-glow)" />

      {/* DNA Double Helix */}
      {/* Strand 1 */}
      <path
        d="M80 40 C130 60, 170 100, 200 130 C230 160, 270 200, 320 220 C340 228, 360 240, 370 260"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        fill="none"
        opacity="0.9"
      >
        <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
          M80 40 C130 60, 170 100, 200 130 C230 160, 270 200, 320 220 C340 228, 360 240, 370 260;
          M80 50 C140 55, 160 110, 200 140 C240 170, 260 190, 320 210 C345 218, 355 245, 370 265;
          M80 40 C130 60, 170 100, 200 130 C230 160, 270 200, 320 220 C340 228, 360 240, 370 260
        " />
      </path>

      {/* Strand 2 */}
      <path
        d="M80 80 C130 60, 170 20, 200 50 C230 80, 270 120, 320 140 C340 148, 360 160, 370 180"
        stroke="hsl(var(--secondary))"
        strokeWidth="3"
        fill="none"
        opacity="0.7"
      >
        <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
          M80 80 C130 60, 170 20, 200 50 C230 80, 270 120, 320 140 C340 148, 360 160, 370 180;
          M80 85 C140 55, 160 30, 200 55 C240 85, 260 110, 320 130 C345 138, 355 165, 370 185;
          M80 80 C130 60, 170 20, 200 50 C230 80, 270 120, 320 140 C340 148, 360 160, 370 180
        " />
      </path>

      {/* Cross bars (base pairs) */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <line
          key={i}
          x1={110 + i * 38}
          y1={55 + i * 25 + (i % 2 === 0 ? -5 : 5)}
          x2={110 + i * 38}
          y2={75 + i * 25 + (i % 2 === 0 ? 5 : -5)}
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          opacity="0.4"
        />
      ))}

      {/* Molecular nodes */}
      {[
        [100, 55], [160, 80], [200, 110], [240, 140], [290, 170], [340, 200], [200, 60], [260, 100], [320, 160]
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i % 3 === 0 ? 5 : 3}
          fill="hsl(var(--primary))"
          opacity={0.3 + (i % 3) * 0.2}
        >
          <animate
            attributeName="opacity"
            values={`${0.3 + (i % 3) * 0.2};${0.6 + (i % 3) * 0.1};${0.3 + (i % 3) * 0.2}`}
            dur={`${3 + i * 0.5}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Floating particles */}
      {[
        [50, 200, 2], [350, 50, 2.5], [300, 250, 1.5], [60, 120, 2], [330, 280, 1.8]
      ].map(([cx, cy, r], i) => (
        <circle key={`p${i}`} cx={cx} cy={cy} r={r} fill="hsl(var(--tertiary))" opacity="0.3">
          <animate attributeName="cy" values={`${cy};${Number(cy) - 15};${cy}`} dur={`${4 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
