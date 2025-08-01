import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Globe, ChevronDown } from 'lucide-react';
import { countryConfig, getDefaultCountry } from '../i18n';

const CountrySelector = () => {
  const { i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(() => {
    return localStorage.getItem('selectedCountry') || getDefaultCountry();
  });

  const countries = Object.keys(countryConfig);

  useEffect(() => {
    const config = countryConfig[selectedCountry];
    if (config) {
      i18n.changeLanguage(config.language);
      localStorage.setItem('selectedCountry', selectedCountry);
      
      // Dispatch custom event for price updates
      window.dispatchEvent(new CustomEvent('countryChanged', { 
        detail: { country: selectedCountry, config } 
      }));
    }
  }, [selectedCountry, i18n]);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const currentConfig = countryConfig[selectedCountry];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="mr-1">{currentConfig?.flag}</span>
          <span className="hidden sm:inline">{selectedCountry}</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {countries.map((country) => {
          const config = countryConfig[country];
          return (
            <DropdownMenuItem
              key={country}
              onClick={() => handleCountryChange(country)}
              className={`flex items-center justify-between cursor-pointer ${
                selectedCountry === country ? 'bg-green-50' : ''
              }`}
            >
              <div className="flex items-center">
                <span className="mr-2">{config.flag}</span>
                <span>{country}</span>
              </div>
              <div className="flex items-center">
                <Badge variant="secondary" className="text-xs">
                  {config.currency}
                </Badge>
                <Badge variant="outline" className="text-xs ml-1">
                  {config.language.toUpperCase()}
                </Badge>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CountrySelector;

