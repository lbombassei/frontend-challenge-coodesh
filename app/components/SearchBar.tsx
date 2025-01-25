import { Search } from "lucide-react";
import Image from "next/image";

import BackgrounImage from "../../images/1,1 - Banner de Início.png";
export function SearchBar() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          className="w-full  object-cover"
          src={BackgrounImage}
          alt="Modern living room"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-center text-[34px] font-bold leading-[40px] text-white decoration-skip-ink-none mb-8">
          Vende. Aluga. Conecta.
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-2">
            <div className="flex">
              <div className="flex-1 min-w-0 px-3 py-2 border-r">
                <label className="block text-xs text-gray-500">
                  Localização
                </label>
                <input
                  type="text"
                  placeholder="Qual é a Localização?"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                />
              </div>
              <div className="flex-1 min-w-0 px-3 py-2">
                <label className="block text-xs text-gray-500">
                  Nº de Quartos
                </label>
                <input
                  type="text"
                  placeholder="Quantos Quartos?"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                />
              </div>
              <button className="bg-orange-500 p-3 rounded-md flex items-center justify-center text-white hover:bg-orange-600">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
