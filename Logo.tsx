import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showWordmark = true,
  theme = 'dark',
  className = '',
}) => {
  const sizeMap = {
    sm: { icon: 28, text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 34, text: 'text-lg', sub: 'text-[10px]' },
    lg: { icon: 44, text: 'text-2xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Signature Connected Partnerships Logo Mark */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-label="GLOBALPARTNERS Logo"
      >
        <rect
          x="5"
          y="11"
          width="19"
          height="19"
          rx="9.5"
          stroke="#2563EB"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <rect
          x="16"
          y="11"
          width="19"
          height="19"
          rx="9.5"
          stroke="#0D9488"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle
          cx="20"
          cy="20.5"
          r="3"
          fill={theme === 'dark' ? '#F8FAFC' : '#0F172A'}
          className="transition-colors duration-200"
        />
      </svg>

      {showWordmark && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            } ${currentSize.text} whitespace-nowrap transition-colors duration-200`}
          >
            GLOBALPARTNERS
          </span>
          <span className="text-[10px] tracking-widest uppercase font-bold text-[#2563EB] dark:text-[#38BDF8] -mt-0.5">
            LLC
          </span>
        </div>
      )}
    </div>
  );
};

