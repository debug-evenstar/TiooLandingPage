import React, { useEffect, useState } from 'react'

export default function useCountryCode() {
  const [countryCode, setCountryCode] = useState<any>(null);
  useEffect(() => {

    const code = localStorage.getItem('COUNTRY_CODE');

    if (code) {
      setCountryCode(code);
    }
  }, []);
  return { countryCode }

}