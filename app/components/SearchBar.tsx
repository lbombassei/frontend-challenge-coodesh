import Image from "next/image";
import BackgrounImage from "../../images/1,1 - Banner de Início.png";
import House from "../../images/icons/house.png";
import Pin from "../../images/icons/pin.png";
import Search from "../../images/icons/search.png";

export function SearchBar() {
  return (
    <div className="relative flex w-full h-[500px]">
      <div className="absolute inset-0">
        <Image
          className="w-full object-cover h-[500px]"
          src={BackgrounImage}
          alt="Modern living room"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-center text-[34px] font-bold leading-[40px] text-white decoration-skip-ink-none mb-8">
          Vende. Aluga. Conecta.
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[71px] shadow-lg px-6 py-2 border border-[#C0C7CA]">
            <div className="flex">
              <div className="flex-1">
                <div className="flex-1 min-w-0 px-3 py-2 hover:bg-gray-100 transition rounded-r-[71px]">
                  <div className="flex items-center space-x-2">
                    <Image src={Pin} alt="Pin" className="w-6 h-6" />
                    <label className="text-sm text-customGray2 font-bold">
                      Localização
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="Qual é a Localização?"
                    className="block w-full border-0 p-0 text-gray-900 placeholder-placeholderGray focus:ring-0 sm:text-sm bg-transparent"
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0 px-3 py-2 hover:bg-gray-100 transition rounded-l-[71px]">
                <div className="flex items-center space-x-2">
                  <Image src={House} alt="House" className="w-6 h-6" />
                  <label className="text-sm text-customGray2 font-bold">
                    Nº de Quartos
                  </label>
                </div>
                <input
                  type="text"
                  placeholder="Quantos Quartos?"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-placeholderGray focus:ring-0 sm:text-sm bg-transparent"
                />
              </div>

              <button className="bg-[#F36C21] p-6 rounded-[32px] w-14 h-14 flex items-center justify-center text-white hover:bg-[#E95808]">
                <div className="w-8 h-8">
                  <Image
                    src={Search}
                    alt="Search Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
