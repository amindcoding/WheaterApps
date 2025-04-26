// src/pages/Home.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchCurrentWeather } from "@/api/wheater";
import { Loader } from "@/components/atoms/Loader";
import { Error } from "@/components/atoms/Error";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/_protected/Home')({
  component: Home,
})
export function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["currentWeather"],
    queryFn: fetchCurrentWeather,
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error message="Failed to load weather data" />;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Current Weather</h1>
      <div className="border rounded p-4 shadow">
        <p>
          <strong>Location:</strong> {data?.latitude}, {data?.longitude}
        </p>
        <p>
          <strong>Temperature:</strong> {data?.current?.temperature_2m}{data?.current_units?.temperature_2m}
        </p>
        <p>
          <strong>Elevation:</strong> {data?.elevation}
        </p>
      </div>
    </main>
  );
}
