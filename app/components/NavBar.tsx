import Image from "next/image";
import HomeIcon from "../../images/HomeIcon.png";
export function NavBar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a>
              <Image src={HomeIcon} alt={"Home Icon"} />
            </a>
          </div>
          <div className="flex space-x-10">
            <a href="#" className="text-customGray hover:text-gray-900">
              Imobiliárias
            </a>
            <a href="#" className="text-customGray hover:text-gray-900">
              Quero me associar
            </a>
            <a href="#" className="text-customGray hover:text-gray-900">
              Sobre
            </a>
            <a href="#" className="text-customGray hover:text-gray-900">
              Blog
            </a>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <button className="flex items-center justify-center px-4 py-2 text-customPurple border border-customPurple rounded-[60px]  h-8 font-sans text-[16px] font-normal leading-[24px] decoration-skip-ink-none">
              Anunciar Imóvel
            </button>

            <button className="px-4 py-2 text-customGray hover:text-gray-900">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
