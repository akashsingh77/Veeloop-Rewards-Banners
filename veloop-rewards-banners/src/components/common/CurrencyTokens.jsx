import React from 'react';

/**
 * High-fidelity Purple Gem SVG with multi-faceted reflections,
 * luxury jewel shine, and ambient glow.
 */
export const GemIcon = ({ size = 48, className = '', glow = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        filter: glow ? 'drop-shadow(0 4px 14px rgba(168, 85, 247, 0.45))' : 'none',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      <defs>
        <linearGradient id="gemTopGrad" x1="16" y1="12" x2="48" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e9d5ff" />
          <stop offset="0.6" stopColor="#c084fc" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="gemCenterGrad" x1="32" y1="24" x2="32" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7" />
          <stop offset="0.5" stopColor="#7e22ce" />
          <stop offset="1" stopColor="#581c87" />
        </linearGradient>
        <linearGradient id="gemLeftGrad" x1="10" y1="24" x2="32" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9333ea" />
          <stop offset="1" stopColor="#6b21a8" />
        </linearGradient>
        <linearGradient id="gemRightGrad" x1="54" y1="24" x2="32" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7e22ce" />
          <stop offset="1" stopColor="#3b0764" />
        </linearGradient>
      </defs>

      {/* Top Table Facet */}
      <polygon points="20,12 44,12 54,24 10,24" fill="url(#gemTopGrad)" />
      
      {/* Upper facets */}
      <polygon points="10,24 20,12 28,24" fill="#d8b4fe" opacity="0.85" />
      <polygon points="44,12 54,24 36,24" fill="#a855f7" opacity="0.9" />

      {/* Lower Center Facet */}
      <polygon points="24,24 40,24 32,54" fill="url(#gemCenterGrad)" />

      {/* Lower Left Facet */}
      <polygon points="10,24 24,24 32,54" fill="url(#gemLeftGrad)" />

      {/* Lower Right Facet */}
      <polygon points="40,24 54,24 32,54" fill="url(#gemRightGrad)" />

      {/* Facet Highlights / Reflections */}
      <polygon points="20,13 44,13 42,16 22,16" fill="#ffffff" opacity="0.6" />
      <polygon points="26,24 32,50 30,24" fill="#ffffff" opacity="0.2" />
      <circle cx="22" cy="18" r="1.5" fill="#ffffff" opacity="0.9" />
    </svg>
  );
};

/**
 * High-fidelity Gold VE Coin SVG with metallic rim bevels,
 * engraved VE monogram, and warm gold reflections.
 */
export const VECoinIcon = ({ size = 48, className = '', glow = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        filter: glow ? 'drop-shadow(0 4px 16px rgba(229, 185, 76, 0.42))' : 'none',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      <defs>
        <radialGradient id="goldOuterRim" cx="35%" cy="30%" r="65%">
          <stop stopColor="#fef08a" />
          <stop offset="0.3" stopColor="#e5b94c" />
          <stop offset="0.75" stopColor="#b48325" />
          <stop offset="1" stopColor="#785311" />
        </radialGradient>
        <linearGradient id="goldInnerPlate" x1="16" y1="14" x2="48" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fde047" />
          <stop offset="0.35" stopColor="#d4a332" />
          <stop offset="0.75" stopColor="#9a6e14" />
          <stop offset="1" stopColor="#1a1d2e" />
        </linearGradient>
        <linearGradient id="goldEmboss" x1="22" y1="20" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="0.3" stopColor="#fef9c3" />
          <stop offset="0.7" stopColor="#e5b94c" />
          <stop offset="1" stopColor="#9a6e14" />
        </linearGradient>
      </defs>

      {/* Outer Coin Body */}
      <circle cx="32" cy="32" r="28" fill="url(#goldOuterRim)" stroke="#fef08a" strokeWidth="1.2" />

      {/* Rim Ridge Details (Fintech coin serration edge) */}
      <circle cx="32" cy="32" r="24.5" fill="none" stroke="#785311" strokeWidth="1" strokeDasharray="2 1.5" opacity="0.65" />

      {/* Inner Recessed Face */}
      <circle cx="32" cy="32" r="22" fill="url(#goldInnerPlate)" />

      {/* Subtle Inner Bevel Ring */}
      <circle cx="32" cy="32" r="22" fill="none" stroke="#fef08a" strokeWidth="0.8" opacity="0.5" />

      {/* VE Monogram / Emblem */}
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fontSize="17"
        fontWeight="800"
        fontFamily="sans-serif"
        fill="url(#goldEmboss)"
        letterSpacing="0.5"
        style={{
          filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.45))',
        }}
      >
        VE
      </text>

      {/* Surface Light Glint */}
      <ellipse cx="26" cy="18" rx="8" ry="4" transform="rotate(-30 26 18)" fill="#ffffff" opacity="0.3" />
    </svg>
  );
};

/**
 * High-fidelity Staked sVE Token SVG with metallic soft blue crystal geometry,
 * staking lock/yield accents, and polished cyan-blue rim.
 */
export const SVETokenIcon = ({ size = 48, className = '', glow = true }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        filter: glow ? 'drop-shadow(0 4px 16px rgba(74, 136, 247, 0.45))' : 'none',
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      <defs>
        <radialGradient id="blueOuterRim" cx="35%" cy="30%" r="65%">
          <stop stopColor="#bae6fd" />
          <stop offset="0.3" stopColor="#60a5fa" />
          <stop offset="0.75" stopColor="#2563eb" />
          <stop offset="1" stopColor="#1e3a8a" />
        </radialGradient>
        <linearGradient id="blueInnerPlate" x1="16" y1="14" x2="48" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#93c5fd" />
          <stop offset="0.4" stopColor="#3b82f6" />
          <stop offset="0.8" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      {/* Hexagonal Shield Token Body */}
      <polygon
        points="32,6 54,18 54,46 32,58 10,46 10,18"
        fill="url(#blueOuterRim)"
        stroke="#bae6fd"
        strokeWidth="1.2"
      />

      {/* Inner Recessed Hexagon */}
      <polygon
        points="32,12 48,22 48,42 32,52 16,42 16,22"
        fill="url(#blueInnerPlate)"
        stroke="#93c5fd"
        strokeWidth="0.8"
        opacity="0.9"
      />

      {/* Staking Badge Emblem */}
      <text
        x="32"
        y="37"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fontFamily="sans-serif"
        fill="#ffffff"
        letterSpacing="0.2"
        style={{
          filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.5))',
        }}
      >
        sVE
      </text>

      {/* Top glint */}
      <polygon points="32,8 46,16 32,19 18,16" fill="#ffffff" opacity="0.35" />
    </svg>
  );
};
