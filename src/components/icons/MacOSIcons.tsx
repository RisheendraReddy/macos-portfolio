import React from 'react'

interface IconProps {
  size?: number
}

export const FinderIcon: React.FC<IconProps> = ({ size = 48 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className="rounded-2xl">
      <defs>
        {/* Soft blue background, Big Sur / Sonoma inspired */}
        <linearGradient id="finderBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#62B3FF" />
          <stop offset="100%" stopColor="#3374E0" />
        </linearGradient>

        {/* Left and right face tones */}
        <linearGradient id="finderFaceLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E9F4FF" />
          <stop offset="100%" stopColor="#C9E3FF" />
        </linearGradient>
        <linearGradient id="finderFaceRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D6E6FF" />
          <stop offset="100%" stopColor="#B7D2FF" />
        </linearGradient>

        {/* Subtle inner highlight */}
        <radialGradient id="finderInnerHighlight" cx="30%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Rounded square background */}
      <rect width="512" height="512" rx="112" fill="url(#finderBgGrad)" />

      {/* Subtle inner highlight for depth */}
      <rect width="512" height="512" rx="112" fill="url(#finderInnerHighlight)" opacity="0.6" />

      {/* Two-tone face */}
      <g transform="translate(96, 96)">
        {/* Left half */}
        <path
          d="M 80 32 H 168 C 210 32 240 62 240 104 V 216 C 240 258 210 288 168 288 H 80 C 56 288 40 272 40 248 V 72 C 40 48 56 32 80 32 Z"
          fill="url(#finderFaceLeft)"
        />
        {/* Right half */}
        <path
          d="M 168 32 H 256 C 280 32 296 48 296 72 V 248 C 296 272 280 288 256 288 H 168 C 126 288 96 258 96 216 V 104 C 96 62 126 32 168 32 Z"
          fill="url(#finderFaceRight)"
        />

        {/* Vertical split accent line */}
        <path
          d="M 168 40 V 280"
          stroke="#9DBBEA"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Eyes – simple, centered, readable at small sizes */}
        <circle cx="128" cy="136" r="10" fill="#1F3B66" />
        <circle cx="208" cy="136" r="10" fill="#1F3B66" />

        {/* Smile – gentle, friendly curve */}
        <path
          d="M 126 188 Q 168 214 210 188"
          stroke="#1F3B66"
          strokeWidth="9"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export const AboutIcon: React.FC<IconProps> = ({ size = 48 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className="rounded-xl">
      <defs>
        <linearGradient id="aboutBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B7EC8" />
          <stop offset="100%" stopColor="#6B5B9D" />
        </linearGradient>
        <linearGradient id="aboutProfileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F3FF" />
        </linearGradient>
        <radialGradient id="aboutHighlight" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="512" height="512" rx="90" fill="url(#aboutBgGrad)" />
      
      {/* Soft lighting highlight */}
      <rect width="512" height="512" rx="90" fill="url(#aboutHighlight)" />
      
      {/* Profile silhouette - Head */}
      <circle cx="256" cy="200" r="90" fill="url(#aboutProfileGrad)" />
      
      {/* Profile silhouette - Shoulders */}
      <path 
        d="M 140 280 
           Q 180 260 256 260 
           Q 332 260 372 280 
           L 372 360 
           Q 332 340 256 340 
           Q 180 340 140 360 
           Z" 
        fill="url(#aboutProfileGrad)" 
      />
      
      {/* Subtle shadow for depth */}
      <ellipse cx="256" cy="340" rx="120" ry="20" fill="#000000" opacity="0.1" />
    </svg>
  )
}

export const ProjectsIcon: React.FC<IconProps> = ({ size = 48 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className="rounded-xl">
      <defs>
        <linearGradient id="projectsBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7A8F" />
          <stop offset="100%" stopColor="#4A5568" />
        </linearGradient>
        <linearGradient id="projectsPiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8EDF3" />
        </linearGradient>
        <radialGradient id="projectsHighlight" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="512" height="512" rx="90" fill="url(#projectsBgGrad)" />
      
      {/* Soft lighting highlight */}
      <rect width="512" height="512" rx="90" fill="url(#projectsHighlight)" />

      {/* Pi symbol badge */}
      <g transform="translate(256, 256)">
        {/* Circular badge behind π */}
        <circle cx="0" cy="0" r="130" fill="url(#projectsPiGrad)" />
        <circle cx="0" cy="0" r="110" fill="#4A5568" opacity="0.18" />

        {/* Pi symbol */}
        <text
          x="0"
          y="18"
          textAnchor="middle"
          fontFamily="'SF Pro Display', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="170"
          fill="#1A202C"
        >
          π
        </text>
      </g>

      {/* Subtle shadow for depth */}
      <ellipse cx="256" cy="340" rx="100" ry="30" fill="#000000" opacity="0.15" />
    </svg>
  )
}

export const ExperienceIcon: React.FC<IconProps> = ({ size = 48 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className="rounded-xl">
      <defs>
        <linearGradient id="experienceBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7B731" />
          <stop offset="100%" stopColor="#E67E22" />
        </linearGradient>
        <linearGradient id="experienceBriefcaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8EDF3" />
        </linearGradient>
        <radialGradient id="experienceHighlight" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="512" height="512" rx="90" fill="url(#experienceBgGrad)" />
      
      {/* Soft lighting highlight */}
      <rect width="512" height="512" rx="90" fill="url(#experienceHighlight)" />
      
      {/* Briefcase - Main body */}
      <rect 
        x="130" 
        y="190" 
        width="252" 
        height="180" 
        rx="12" 
        fill="url(#experienceBriefcaseGrad)"
      />
      
      {/* Briefcase - Handle */}
      <rect 
        x="190" 
        y="170" 
        width="92" 
        height="38" 
        rx="15" 
        fill="url(#experienceBriefcaseGrad)"
      />
      
      {/* Briefcase - Handle arch */}
      <path 
        d="M 190 170 
           Q 256 145 322 170 
           L 322 208 
           Q 256 183 190 208 
           Z" 
        fill="url(#experienceBriefcaseGrad)"
      />
      
      {/* Briefcase - Lock/clasp */}
      <rect 
        x="230" 
        y="280" 
        width="52" 
        height="26" 
        rx="4" 
        fill="#5B6E8A"
        opacity="0.6"
      />
      
      {/* Subtle shadow for depth */}
      <ellipse cx="256" cy="380" rx="120" ry="20" fill="#000000" opacity="0.15" />
    </svg>
  )
}

export const SkillsIcon: React.FC<IconProps> = ({ size = 48 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className="rounded-xl">
      <defs>
        <linearGradient id="skillsBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9B59B6" />
          <stop offset="100%" stopColor="#8E44AD" />
        </linearGradient>
        <linearGradient id="skillsGearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8EDF3" />
        </linearGradient>
        <radialGradient id="skillsHighlight" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="512" height="512" rx="90" fill="url(#skillsBgGrad)" />
      
      {/* Soft lighting highlight */}
      <rect width="512" height="512" rx="90" fill="url(#skillsHighlight)" />
      
      {/* Gear - Simplified design */}
      <g transform="translate(256, 256)">
        {/* Main gear body */}
        <circle cx="0" cy="0" r="130" fill="url(#skillsGearGrad)" />
        
        {/* Inner circle for depth */}
        <circle cx="0" cy="0" r="85" fill="#6B7A8F" opacity="0.25" />
        
        {/* Gear teeth (8 teeth) - simplified */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <rect
            key={angle}
            x="-8"
            y="-143"
            width="16"
            height="38"
            rx="8"
            fill="url(#skillsGearGrad)"
            transform={`rotate(${angle})`}
          />
        ))}
        
        {/* Center hole */}
        <circle cx="0" cy="0" r="42" fill="#6B7A8F" opacity="0.5" />
      </g>
      
      {/* Subtle shadow for depth */}
      <ellipse cx="256" cy="320" rx="100" ry="15" fill="#000000" opacity="0.15" />
    </svg>
  )
}

export const TerminalIcon: React.FC<IconProps> = ({ size = 48 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className="rounded-xl">
      <defs>
        <linearGradient id="terminalBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#1F1F1F" />
        </linearGradient>
        <radialGradient id="terminalGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00FF88" stopOpacity="0" />
        </radialGradient>
        <filter id="terminalGlowFilter">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Rounded square background */}
      <rect width="512" height="512" rx="90" fill="url(#terminalBgGrad)" />
      
      {/* Subtle glow effect */}
      <rect width="512" height="512" rx="90" fill="url(#terminalGlow)" />
      
      {/* Terminal screen */}
      <rect 
        x="80" 
        y="140" 
        width="352" 
        height="232" 
        rx="12" 
        fill="#0D0D0D"
      />
      
      {/* Terminal screen inner border */}
      <rect 
        x="80" 
        y="140" 
        width="352" 
        height="232" 
        rx="12" 
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="2"
      />
      
      {/* Terminal prompt - simple > symbol */}
      <text
        x="120"
        y="280"
        fontFamily="'Courier New', monospace"
        fontSize="72"
        fill="#00FF88"
        dominantBaseline="middle"
        filter="url(#terminalGlowFilter)"
        fontWeight="bold"
      >
        &gt;
      </text>
      
      {/* Cursor blink effect (underscore) */}
      <rect 
        x="200" 
        y="260" 
        width="60" 
        height="12" 
        rx="6" 
        fill="#00FF88"
        opacity="0.9"
        filter="url(#terminalGlowFilter)"
      />
    </svg>
  )
}

export const ResumeIcon: React.FC<IconProps> = ({ size = 48 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className="rounded-xl">
      <defs>
        <linearGradient id="resumeBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A8C8F0" />
          <stop offset="100%" stopColor="#8BB8E8" />
        </linearGradient>
        <linearGradient id="resumeDocGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6BB3FF" />
          <stop offset="100%" stopColor="#4A90E2" />
        </linearGradient>
        <radialGradient id="resumeHighlight" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="512" height="512" rx="90" fill="url(#resumeBgGrad)" />
      
      {/* Soft lighting highlight */}
      <rect width="512" height="512" rx="90" fill="url(#resumeHighlight)" />
      
      {/* Document sheet */}
      <rect 
        x="140" 
        y="120" 
        width="232" 
        height="272" 
        rx="12" 
        fill="url(#resumeDocGrad)"
      />
      
      {/* Document fold corner */}
      <path 
        d="M 140 120 L 200 120 L 140 180 Z" 
        fill="#357ABD"
        opacity="0.7"
      />
      
      {/* Text lines - minimal suggestion of content */}
      <rect x="180" y="200" width="160" height="8" rx="4" fill="#FFFFFF" opacity="0.6" />
      <rect x="180" y="220" width="140" height="8" rx="4" fill="#FFFFFF" opacity="0.6" />
      <rect x="180" y="240" width="150" height="8" rx="4" fill="#FFFFFF" opacity="0.6" />
      
      {/* Section header */}
      <rect x="180" y="280" width="120" height="12" rx="6" fill="#FFFFFF" opacity="0.8" />
      
      {/* More text lines */}
      <rect x="180" y="310" width="170" height="8" rx="4" fill="#FFFFFF" opacity="0.5" />
      <rect x="180" y="330" width="145" height="8" rx="4" fill="#FFFFFF" opacity="0.5" />
      <rect x="180" y="350" width="160" height="8" rx="4" fill="#FFFFFF" opacity="0.5" />
      
      {/* Subtle shadow for depth */}
      <ellipse cx="256" cy="390" rx="100" ry="15" fill="#000000" opacity="0.15" />
    </svg>
  )
}

export const ContactIcon: React.FC<IconProps> = ({ size = 48 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className="rounded-xl">
      <defs>
        <linearGradient id="contactBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4" />
          <stop offset="100%" stopColor="#3BA99F" />
        </linearGradient>
        <linearGradient id="contactEnvelopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F9F8" />
        </linearGradient>
        <radialGradient id="contactHighlight" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="512" height="512" rx="90" fill="url(#contactBgGrad)" />
      
      {/* Soft lighting highlight */}
      <rect width="512" height="512" rx="90" fill="url(#contactHighlight)" />
      
      {/* Envelope - Main body */}
      <rect 
        x="110" 
        y="170" 
        width="292" 
        height="200" 
        rx="8" 
        fill="url(#contactEnvelopeGrad)"
        stroke="#2A8A82"
        strokeWidth="4"
      />
      
      {/* Envelope - Flap/Triangle */}
      <path 
        d="M 110 170 
           L 256 270 
           L 402 170 
           Z" 
        fill="url(#contactEnvelopeGrad)"
        stroke="#2A8A82"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      
      {/* Envelope - Flap shadow line */}
      <path 
        d="M 110 170 
           L 256 270 
           L 402 170" 
        stroke="#2A8A82"
        strokeWidth="4"
        fill="none"
        opacity="0.5"
      />
      
      {/* Envelope - Inner detail line */}
      <rect 
        x="150" 
        y="250" 
        width="212" 
        height="2" 
        rx="1" 
        fill="#2A8A82"
        opacity="0.5"
      />
      <rect 
        x="150" 
        y="280" 
        width="212" 
        height="2" 
        rx="1" 
        fill="#2A8A82"
        opacity="0.5"
      />
      
      {/* Subtle shadow for depth */}
      <ellipse cx="256" cy="380" rx="120" ry="15" fill="#000000" opacity="0.1" />
    </svg>
  )
}

