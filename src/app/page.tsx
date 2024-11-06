import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-4  sm:p-8 md:p-12 lg:p-16 bg-bg text-black max-h-screen">
    <div className=" mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="w-full md:w-2/3 lg:w-3/4 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ">
            Danish Tiwari
          </h1>
          <p className="md:text-lg lg:text-xl xl:text-2xl border-4 border-black p-6 bg-white  shadow-[5px_4px_0px_0px_#000] max-w-3xl">
            Hello! I'm Danish Tiwari, a passionate and dedicated Full Stack Developer specializing in
            MERN stack with expertise in Next.js and TypeScript. My journey in web development has
            been driven by a relentless curiosity and a desire to create impactful, efficient, and
            user-friendly applications. Growing and learning everyday, I am always looking for new
            opportunities to collaborate and create something amazing.
          </p>
          <Link href="/portfolio">
            <button
              className="px-8 mt-3 py-4  text-lg font-bold bg-[#ffc800] border-4 border-black rounded-none  hover:rotate-0 transition-all duration-300 shadow-[5px_4px_0px_0px_#000] hover:translate-x-[5px] hover:translate-y-[4px] hover:shadow-none"
            >
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  </main>
  );
}
