import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.open-meteo.com/v1/forecast', ({request}) => {
    const url = new URL(request.url)
    const latitude = url.searchParams.get('latitude')
    const longitude = url.searchParams.get('longitude')
    // const current = url.searchParams.get('current')
    // ...and respond to them using this JSON response.
    return HttpResponse.json({
      "latitude": latitude,
      "longitude": longitude,
      "generationtime_ms": 0.021338462829589844,
      "utc_offset_seconds": 0,
      "timezone": "GMT",
      "timezone_abbreviation": "GMT",
      "elevation": 38,
      "current_units": {
        "time": "iso8601",
        "interval": "seconds",
        "temperature_2m": "°C"
      },
      "current": {
        "time": "2025-04-26T16:15",
        "interval": 900,
        "temperature_2m": 14.4
      }
    })
  }),
]