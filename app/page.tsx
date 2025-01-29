import { NavBar } from "./components/NavBar";
import RealEstateSection from "./components/RealStateSection";
import { SearchBar } from "./components/SearchBar";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="w-full flex flex-col items-center">
        <SearchBar />
      </div>
      <div className="w-full mt-10 px-4 md:px-8 lg:px-16">
        <RealEstateSection />
      </div>
    </main>
  );
}
