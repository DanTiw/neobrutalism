import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiNodedotjs,
    SiExpress,
    SiHtml5,
    SiCss3,
    SiPostgresql,
    SiPython,
    SiCplusplus,
    SiC,
    SiTailwindcss,
    SiGit,
    SiFirebase,
    SiVisualstudio,
    SiJetbrains,
    SiVercel,

  } from 'react-icons/si';

  
  interface TechIconProps {
    Icon: React.ElementType;
  }
  
  const TechIcon = ({ Icon }: TechIconProps) => {
    return (
      <div className="flex items-center justify-center p-4 border-4 border-black bg-white transform transition-all duration-300 hover:-rotate-6 hover:translate-y-[-4px] hover:shadow-[4px_4px_0_0_#000]">
        <Icon className="text-4xl" />
      </div>
    );
  };
  
  const TechIcons = () => {
    const technologies = [
      { Icon: SiNextdotjs },
      { Icon: SiReact },
      { Icon: SiTypescript },
      { Icon: SiJavascript },
      { Icon: SiNodedotjs },
      { Icon: SiExpress },
      { Icon: SiHtml5 },
      { Icon: SiCss3 },
      { Icon: SiPostgresql },
      { Icon: SiPython },
      { Icon: SiCplusplus },
      { Icon: SiC },
      { Icon: SiTailwindcss },
      { Icon: SiGit },
      { Icon: SiFirebase },
      { Icon: SiVisualstudio },
      { Icon: SiJetbrains },
      { Icon: SiVercel },

    ];
  
    return (
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-2">
        {technologies.map((tech, index) => (
          <TechIcon key={index} Icon={tech.Icon} />
        ))}
      </div>
    );
  };
  
  export default TechIcons;