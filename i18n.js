import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Country and currency configuration
export const countryConfig = {
  'UK': {
    language: 'en',
    currency: '£',
    currencyCode: 'GBP',
    priceMultiplier: 0.012, // Approximate conversion from INR to GBP
    flag: '🇬🇧'
  },
  'USA': {
    language: 'en',
    currency: '$',
    currencyCode: 'USD',
    priceMultiplier: 0.012, // Approximate conversion from INR to USD
    flag: '🇺🇸'
  },
  'Canada': {
    language: 'en',
    currency: 'C$',
    currencyCode: 'CAD',
    priceMultiplier: 0.016, // Approximate conversion from INR to CAD
    flag: '🇨🇦'
  },
  'Spain': {
    language: 'es',
    currency: '€',
    currencyCode: 'EUR',
    priceMultiplier: 0.011, // Approximate conversion from INR to EUR
    flag: '🇪🇸'
  },
  'France': {
    language: 'fr',
    currency: '€',
    currencyCode: 'EUR',
    priceMultiplier: 0.011, // Approximate conversion from INR to EUR
    flag: '🇫🇷'
  },
  'Germany': {
    language: 'de',
    currency: '€',
    currencyCode: 'EUR',
    priceMultiplier: 0.011, // Approximate conversion from INR to EUR
    flag: '🇩🇪'
  },
  'Portugal': {
    language: 'pt',
    currency: '€',
    currencyCode: 'EUR',
    priceMultiplier: 0.011, // Approximate conversion from INR to EUR
    flag: '🇵🇹'
  },
  'Saudi Arabia': {
    language: 'ar',
    currency: 'ر.س',
    currencyCode: 'SAR',
    priceMultiplier: 0.045, // Approximate conversion from INR to SAR
    flag: '🇸🇦'
  },
  'India': {
    language: 'en',
    currency: '₹',
    currencyCode: 'INR',
    priceMultiplier: 1, // Base currency
    flag: '🇮🇳'
  }
};

// Get default country based on browser language
export const getDefaultCountry = () => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.includes('es')) return 'Spain';
  if (browserLang.includes('fr')) return 'France';
  if (browserLang.includes('de')) return 'Germany';
  if (browserLang.includes('pt')) return 'Portugal';
  if (browserLang.includes('ar')) return 'Saudi Arabia';
  if (browserLang.includes('en-gb')) return 'UK';
  if (browserLang.includes('en-ca')) return 'Canada';
  if (browserLang.includes('en-us')) return 'USA';
  
  return 'India'; // Default fallback
};

// Price conversion utility
export const convertPrice = (basePrice, country) => {
  const config = countryConfig[country];
  if (!config) return basePrice;
  
  const convertedPrice = Math.round(basePrice * config.priceMultiplier);
  return `${config.currency}${convertedPrice}`;
};

// Initialize i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    react: {
      useSuspense: false,
    }
  });

export default i18n;

