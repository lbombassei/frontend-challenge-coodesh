import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <SearchBar />
    </main>
  );
}
