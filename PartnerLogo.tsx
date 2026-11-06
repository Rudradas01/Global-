import React from 'react';

interface PartnerLogoProps {
  partnerId: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'display';
}

export const PartnerLogo: React.FC<PartnerLogoProps> = ({
  partnerId,
  className = '',
  size = 'display',
}) => {
  // Dimensions for display mode inside the consulting cards
  const dims = {
    sm: { width: 70, height: 35 },
    md: { width: 110, height: 50 },
    lg: { width: 140, height: 60 },
    display: { width: 170, height: 75 },
  };

  const { width, height } = dims[size];

  switch (partnerId) {
    case 'aws':
      return (
        <svg
          viewBox="0 0 160 70"
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${className}`}
          aria-label="AWS Logo"
        >
          {/* "aws" typography in bold charcoal */}
          <text
            x="80"
            y="38"
            fill="#232F3E"
            className="dark:fill-white"
            fontSize="36"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            textAnchor="middle"
            letterSpacing="-1.5"
          >
            aws
          </text>
          {/* Amazon Orange Smile Arrow */}
          <path
            d="M38 46C56 57 104 57 122 46"
            stroke="#FF9900"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M125 43.5L118 40.5L120.5 48L125 43.5Z"
            fill="#FF9900"
          />
        </svg>
      );

    case 'workday':
      return (
        <svg
          viewBox="0 0 170 70"
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${className}`}
          aria-label="Workday Logo"
        >
          {/* Workday Orange Sunrise Arc */}
          <path
            d="M62 30C66 18 78 12 85 12C92 12 104 18 108 30"
            stroke="#F58220"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Workday wordmark */}
          <text
            x="85"
            y="48"
            fill="#085B9E"
            fontSize="26"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            workday
          </text>
          <circle cx="132" cy="48" r="1.5" fill="#F58220" />
        </svg>
      );

    case 'sap':
      return (
        <svg
          viewBox="0 0 160 70"
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${className}`}
          aria-label="SAP Logo"
        >
          {/* SAP Blue Trapezoid Emblem */}
          <polygon
            points="38,14 122,14 106,56 38,56"
            fill="#0070F2"
          />
          {/* "SAP" Letters in Crisp White */}
          <text
            x="76"
            y="44"
            fill="#FFFFFF"
            fontSize="28"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            textAnchor="middle"
            letterSpacing="1"
          >
            SAP
          </text>
          <circle cx="112" cy="50" r="2.5" stroke="#0070F2" strokeWidth="0.8" fill="none" />
          <text x="112" y="52" fill="#0070F2" fontSize="3" fontWeight="bold" textAnchor="middle">R</text>
        </svg>
      );

    case 'oracle':
      return (
        <svg
          viewBox="0 0 160 70"
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${className}`}
          aria-label="Oracle Logo"
        >
          {/* ORACLE Red Corporate Typography */}
          <text
            x="80"
            y="43"
            fill="#C74634"
            fontSize="25"
            fontWeight="900"
            fontFamily="Arial, Helvetica, sans-serif"
            textAnchor="middle"
            letterSpacing="3"
          >
            ORACLE
          </text>
        </svg>
      );

    case 'devops':
      return (
        <svg
          viewBox="0 0 160 70"
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${className}`}
          aria-label="DevOps Logo"
        >
          {/* DevOps Infinity Loop: Blue Loop on Left */}
          <path
            d="M62 35C62 25 50 18 38 18C25 18 16 26 16 35C16 44 25 52 38 52C50 52 62 45 62 35Z"
            stroke="#0078D7"
            strokeWidth="9"
            strokeLinecap="round"
          />
          {/* DevOps Infinity Loop: Orange Loop on Right */}
          <path
            d="M98 35C98 45 110 52 122 52C135 52 144 44 144 35C144 26 135 18 122 18C110 18 98 25 98 35Z"
            stroke="#F58220"
            strokeWidth="9"
            strokeLinecap="round"
          />
          {/* Smooth Diagonal Cross */}
          <path
            d="M62 35C74 44 86 44 98 35"
            stroke="#F58220"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M98 35C86 26 74 26 62 35"
            stroke="#0078D7"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'adp':
      return (
        <svg
          viewBox="0 0 160 70"
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${className}`}
          aria-label="ADP Logo"
        >
          {/* ADP Red Logo Mark */}
          <g transform="translate(32, 12)">
            {/* 'A' */}
            <path
              d="M18 0L30 38H19L16 27H9L6 38H-4L8 0H18ZM14 18L12.5 10L11 18H14Z"
              fill="#D0271D"
            />
            {/* 'D' */}
            <path
              d="M33 0H49C59 0 65 7 65 19C65 31 59 38 49 38H33V0ZM44 28H48C53 28 55 24 55 19C55 14 53 10 48 10H44V28Z"
              fill="#D0271D"
            />
            {/* 'P' */}
            <path
              d="M68 0H84C93 0 98 6 98 17C98 27 92 33 83 33H78V38H68V0ZM78 24H82C86 24 88 21 88 17C88 12 86 9 82 9H78V24Z"
              fill="#D0271D"
            />
            {/* Small ® mark */}
            <circle cx="102" cy="33" r="2.5" stroke="#D0271D" strokeWidth="0.8" fill="none" />
            <text x="102" y="35" fill="#D0271D" fontSize="3" fontWeight="bold" textAnchor="middle">R</text>
          </g>
        </svg>
      );

    case 'kronos':
      return (
        <svg
          viewBox="0 0 170 70"
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${className}`}
          aria-label="Kronos UKG Logo"
        >
          {/* Orange Globe symbol */}
          <circle cx="28" cy="35" r="9" fill="#E65100" />
          <path d="M21 35H35" stroke="#FFFFFF" strokeWidth="1.2" />
          <ellipse cx="28" cy="35" rx="5" ry="9" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
          
          {/* KRONOS text */}
          <text
            x="42"
            y="39"
            fill="#263238"
            className="dark:fill-white"
            fontSize="15"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            letterSpacing="1"
          >
            KRONOS
          </text>
          
          {/* Vertical divider */}
          <line x1="108" y1="24" x2="108" y2="45" stroke="#90A4AE" strokeWidth="1.5" />
          
          {/* UKG text */}
          <text
            x="116"
            y="39"
            fill="#005151"
            className="dark:fill-[#2DD4BF]"
            fontSize="16"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            letterSpacing="0.5"
          >
            UKG
          </text>
        </svg>
      );

    case 'boomi':
      return (
        <svg
          viewBox="0 0 160 70"
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${className}`}
          aria-label="Boomi Logo"
        >
          {/* boomi logo */}
          <text
            x="80"
            y="41"
            fill="#002C77"
            className="dark:fill-[#60A5FA]"
            fontSize="30"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            textAnchor="middle"
            letterSpacing="-0.5"
          >
            boomi
          </text>
          {/* subline: A Dell Technologies business */}
          <text
            x="80"
            y="52"
            fill="#546E7A"
            className="dark:fill-slate-300"
            fontSize="6"
            fontWeight="600"
            fontFamily="sans-serif"
            textAnchor="middle"
            letterSpacing="0.2"
          >
            A Dell Technologies business
          </text>
        </svg>
      );

    case 'salesforce':
      return (
        <svg
          viewBox="0 0 160 70"
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${className}`}
          aria-label="Salesforce Logo"
        >
          {/* Salesforce Vibrant Cloud */}
          <path
            d="M58 20C64 20 69.5 23.5 72 28.5C74.5 26.5 78 25 82 25C91 25 98 32 98 41C98 42.5 97.5 44 97 45C102 46.5 106 51 106 56.5C106 63 100.5 68 94 68H45C35.5 68 28 60.5 28 51C28 42.5 34.5 35.5 43 35C45.5 26.5 51 20 58 20Z"
            fill="#00A1E0"
            transform="translate(14, -10)"
          />
          {/* "salesforce" white italic typography */}
          <text
            x="80"
            y="42"
            fill="#FFFFFF"
            fontSize="15"
            fontWeight="800"
            fontStyle="italic"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            textAnchor="middle"
          >
            salesforce
          </text>
        </svg>
      );

    default:
      return null;
  }
};
