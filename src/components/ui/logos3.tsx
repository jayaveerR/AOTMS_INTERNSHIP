"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {
    SiReact, SiPython, SiAmazonwebservices, SiDocker, SiKubernetes,
    SiSelenium, SiNodedotjs, SiJavascript, SiTypescript, SiMongodb,
    SiPostgresql, SiDjango, SiSpringboot, SiGithub, SiFigma,
    SiTerraform, SiJenkins, SiLinux, SiOpenai, SiGooglecloud,
    SiNextdotjs, SiTailwindcss, SiSupabase, SiVercel
} from "react-icons/si";

interface Logo {
    id: string;
    description: string;
    icon?: any;
    color?: string;
}

const defaultLogos: Logo[] = [
    { id: "tech-1", description: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { id: "tech-2", description: "React", icon: SiReact, color: "#61DAFB" },
    { id: "tech-4", description: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { id: "tech-3", description: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { id: "tech-5", description: "Vercel", icon: SiVercel, color: "#000000" },
    { id: "tech-6", description: "Python", icon: SiPython, color: "#3776AB" },
    { id: "tech-7", description: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
    { id: "tech-9", description: "Docker", icon: SiDocker, color: "#2496ED" },
    { id: "tech-10", description: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { id: "tech-11", description: "GitHub", icon: SiGithub, color: "#181717" },
    { id: "tech-12", description: "Figma", icon: SiFigma, color: "#F24E1E" },
    { id: "tech-13", description: "OpenAI", icon: SiOpenai, color: "#412991" },
    { id: "tech-14", description: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { id: "tech-15", description: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
];

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    heading = "Powering Your Career with the Industry's Leading Technologies",
    logos = defaultLogos,
    className = "",
}: Logos3Props) => {
    return (
        <section className={`py-8 sm:py-16 bg-secondary ${className}`}>
            {heading && (
                <div className="container mx-auto text-center mb-8">
                    <h2 className="section-subheading !text-base sm:!text-lg">
                        {heading}
                    </h2>
                </div>
            )}
            <div className="relative mx-auto flex items-center justify-center">
                <Carousel
                    opts={{ loop: true, align: "start" }}
                    plugins={[AutoScroll({ playOnInit: true, speed: 1.0, stopOnInteraction: false, stopOnMouseEnter: true })]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {[...logos, ...logos].map((logo, index) => (
                            <CarouselItem
                                key={`${logo.id}-${index}`}
                                className="pl-4 flex basis-1/2 justify-center sm:basis-1/3 md:basis-1/5 lg:basis-1/6"
                            >
                                <div className="flex items-center justify-center gap-3 px-4 py-2 group select-none">
                                    {logo.icon && (
                                        <logo.icon
                                            className="w-8 h-8 sm:w-9 sm:h-9 text-muted-foreground group-hover:scale-110 transition-transform duration-300"
                                            style={{ color: logo.color }}
                                        />
                                    )}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-secondary via-secondary/80 to-transparent z-10 pointer-events-none"></div>
            </div>
        </section>
    );
};

export { Logos3 };
