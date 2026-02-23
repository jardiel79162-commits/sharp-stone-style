import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/hero-architecture.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl mb-4">
          <span className="neon-blue-text">JTC</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl">
          Crafting spaces that inspire and endure. We blend innovative design with sustainable practices to create architectural marvels.
        </p>
        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200">
          Discover Our Work
        </Button>
      </div>
    </section>
  );
}
