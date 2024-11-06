import BentoSocials from '@/components/ui/bento-socials';
import TechIcons from '@/components/ui/tech-icons';

const Home = () => {
  return (
    <main className="px-4 sm:p-8 md:p-12 lg:p-16 bg-bg text-black max-h-screen">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="w-full md:w-2/3 lg:w-3/4 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 ">
              Danish Tiwari
            </h1>
            <div className="md:text-lg lg:text-xl xl:text-2xl border-4 border-black p-6 bg-white shadow-[5px_4px_0px_0px_#000] max-w-3xl">
              Hello! I'm Danish Tiwari, a passionate and dedicated Full Stack Developer specializing in
              MERN stack with expertise in Next.js and TypeScript. My journey in web development has
              been driven by a relentless curiosity and a desire to create impactful, efficient, and
              user-friendly applications. Growing and learning everyday, I am always looking for new
              opportunities to collaborate and create something amazing.
              <div className='max-w-3xl mt-2'>
               <h2 className="text-2xl font-bold mb-4 sm:mb-6">Technologies I Work With:</h2>
               <TechIcons />
              </div>
            </div>
          </div>
          <BentoSocials />
        </div>
      </div>
    </main>
  );
};

export default Home;