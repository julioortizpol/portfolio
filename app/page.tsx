import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import TechSection from "./components/TechSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative">
        <div>
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-10" id="skills">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Skills
          </h2>
          <TechSection />
        </div>
      </div>
    </div>
  );
}
