"use client";
import { useEffect, useState } from "react";
import { z } from "zod";
import flatsData from "../../assets/flats.json";

const FlatSchema = z.object({
  City: z.string(),
  Title: z.string(),
  Author: z.string(),
  Rooms: z.number(),
  Tags: z.array(z.string()),
  Price: z.number(),
});

type FlatSchemaType = z.infer<typeof FlatSchema>;

export default function RealEstateSection() {
  const [selectedCity, setSelectedCity] = useState("Belo Horizonte");
  const [flats, setFlats] = useState<FlatSchemaType[]>([]);
  const uniqueCities = Array.from(new Set(flatsData.map((flat) => flat.City)));

  useEffect(() => {
    const filteredFlats = flatsData.filter(
      (flat) => flat.City === selectedCity
    );
    setFlats(filteredFlats.map((flat) => FlatSchema.parse(flat)));
  }, [selectedCity]);

  return (
    <section className="p-6 max-w-7xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Novos Anúncios em{" "}
        <span className="text-orange-500">{selectedCity}</span>
      </h2>
      <div className="flex justify-center mt-4">
        <select
          className="p-2 border rounded-lg text-gray-700 shadow-sm"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {uniqueCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {flats.map((flat, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            <img
              src={`https://source.unsplash.com/400x300/?house,apartment&sig=${index}`}
              alt={flat.Title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2 text-gray-800">
              {flat.Title}
            </h3>
            <p className="text-gray-600">{flat.Author}</p>
            <p className="text-gray-500">{flat.Rooms} Quartos</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {flat.Tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-orange-600 font-bold mt-2">
              R$ {flat.Price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
