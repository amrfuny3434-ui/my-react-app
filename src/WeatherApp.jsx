import { useState, useEffect } from "react";

const cities = [
  { name: "القاهرة", lat: 30.04, lon: 31.24 },
  { name: "بني سويف", lat: 29.07, lon: 31.1 },
  { name: "الإسكندرية", lat: 31.2, lon: 29.92 },
  { name: "الأقصر", lat: 25.69, lon: 32.64 },
  { name: "أسوان", lat: 24.09, lon: 32.9 },
];

function WeatherApp() {
  const [cityIndex, setCityIndex] = useState(0);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const city = cities[cityIndex];
      setLoading(true);
      setError("");

      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data.current);
      } catch (err) {
        setError("حصلت مشكلة في الاتصال، جرّب تاني.");
      }

      setLoading(false);
    }

    load();
  }, [cityIndex]);

  return (
    <div className="mx-auto my-10 max-w-md rounded-xl bg-white p-6 text-gray-800 shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-blue-600">الطقس الآن</h2>

      <select
        className="w-full rounded-lg border border-gray-300 p-2"
        value={cityIndex}
        onChange={(e) => setCityIndex(Number(e.target.value))}
      >
        {cities.map((city, index) => (
          <option key={city.name} value={index}>
            {city.name}
          </option>
        ))}
      </select>

      {loading && <p className="mt-4 text-center text-gray-400">جاري التحميل...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {weather && !loading && (
        <div className="mt-4 space-y-2 text-lg">
          <p>درجة الحرارة: {weather.temperature_2m} °م</p>
          <p>سرعة الرياح: {weather.wind_speed_10m} كم/س</p>
          <p>الرطوبة: {weather.relative_humidity_2m}%</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;