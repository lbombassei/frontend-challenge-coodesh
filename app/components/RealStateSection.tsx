"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { z } from "zod";
import flatsData from "../../assets/flats.json";
import House1 from "../../images/houses/house1.png";
import House2 from "../../images/houses/house2.png";
import House3 from "../../images/houses/house3.png";

const FlatSchema = z.object({
  City: z.string(),
  Title: z.string(),
  Author: z.string(),
  Rooms: z.number(),
  Bathrooms: z.number(),
  Parking: z.number(),
  Tags: z.array(z.string()),
  Price: z.number(),
});

type FlatSchemaType = z.infer<typeof FlatSchema>;

const houseImages = [House1, House2, House3];

export default function RealEstateSection() {
  const [selectedCity, setSelectedCity] = useState("Belo Horizonte");
  const [flats, setFlats] = useState<FlatSchemaType[]>([]);
  const uniqueCities = Array.from(new Set(flatsData.map((flat) => flat.City)));

  useEffect(() => {
    const filteredFlats = flatsData.filter(
      (flat) => flat.City === selectedCity
    );
    setFlats(
      filteredFlats.map((flat) =>
        FlatSchema.parse({
          ...flat,
          Bathrooms: flat.Bathrooms ?? Math.floor(Math.random() * 4) + 1, // Número entre 1 e 4
          Parking: flat.Parking ?? Math.floor(Math.random() * 3), // Número entre 0 e 2
        })
      )
    );
  }, [selectedCity]);

  const getRandomHouseImage = () => {
    const randomIndex = Math.floor(Math.random() * houseImages.length);
    return houseImages[randomIndex];
  };

  return (
    <section className="p-6 max-w-7xl mx-auto mt-10">
      <div className="flex items-center gap-1">
        <h2 className="text-3xl font-bold text-gray-800">
          Novos Anúncios em{" "}
          <select
            className="text-orange-500 font-bold bg-transparent border-none focus:outline-none appearance-none cursor-pointer"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {uniqueCities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </h2>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-blue-600 hover:underline flex items-center gap-1"
        >
          Ver todos os imóveis <span>🔗</span>
        </a>
      </div>

      <div className="relative mt-6">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          className="swiper-container"
        >
          {flats.map((flat, index) => (
            <SwiperSlide key={index}>
              <div className="border rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
                <Image
                  src={getRandomHouseImage()}
                  alt={flat.Title}
                  className="w-full object-cover rounded-tr-lg rounded-tl-lg"
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {flat.Title}
                  </h3>
                  <p className="text-gray-600">{flat.Author}</p>
                  <p className="text-gray-500">
                    {flat.Rooms} Quartos • {flat.Bathrooms} Banheiros •{" "}
                    {flat.Parking} Vagas
                  </p>
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
                  <p className="text-orange-600 font-bold text-xl mt-2">
                    R$ {flat.Price.toLocaleString()}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          .swiper-container .swiper-button-prev,
          .swiper-container .swiper-button-next {
            color: #333;
            background: white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }
          .swiper-container .swiper-button-prev {
            left: -20px;
          }
          .swiper-container .swiper-button-next {
            right: -20px;
          }
        `}</style>
      </div>
    </section>
  );
}
