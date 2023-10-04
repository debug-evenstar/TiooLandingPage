import { useEffect } from 'react';


export default function GeoLocator(){

	const setCountryInfo = (info: any) => {
		localStorage.setItem('countryInfo',JSON.stringify(info));
	}

	useEffect(() => {
		fetch('https://get.geojs.io/v1/ip/country.json')
			.then(response => response.json())
			.then(data => {
				setCountryInfo(data);
			})
			.catch(() => alert("failed to get location"));
	}, [])


	return (
		<div></div>
	);
}