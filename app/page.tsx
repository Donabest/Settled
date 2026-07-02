import Hero from "./components/Hero";
import Problem from "./components/Problem";

function page() {
  return (
    <main className=" px-8 max-w-7xl mx-auto md:px-4">
      <Hero />
      <Problem />
    </main>
  );
}

export default page;
