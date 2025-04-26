export async function fetchCurrentWeather() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m');
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return response.json();
}
