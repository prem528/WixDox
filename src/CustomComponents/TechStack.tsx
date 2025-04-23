import React, { useEffect, useRef } from 'react';

const TechStack: React.FC = () => {
    const techStack = [
        '/html.svg',
        '/css.svg',
        '/javascript.svg',
        '/Typescript.svg',
        '/reactjs.svg',
        '/vite.svg',
        '/tailwind.svg',
        '/next-js.svg',
        '/nodejs.svg',
        '/express.svg',
        '/mongodb.svg',
        '/mysql.svg',
        '/bootstrap.svg',

        '/firebase.svg',
        '/java.svg',
        '/python.svg',
        '/vscode.svg',
    ];

    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollWidth = scrollContainer.scrollWidth;
        let scrollPosition = 0;

        const scroll = () => {
            scrollPosition += 1;
            if (scrollPosition >= scrollWidth / 2) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
            requestAnimationFrame(scroll);
        };

        const animationFrame = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <section className="py-6 bg-gray-0">
            <div className="container mx-auto px-4 md:px-24">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-1/6 mb-8 lg:mb-0">
                        <h2 className="text-4xl font-bold text-primary">
                            Tech <span className="text-blue-500">Stacks</span>
                        </h2>
                    </div>
                    <div className="w-full lg:w-4/5">
                        <div className="overflow-hidden" ref={scrollRef}>
                            <div className="flex gap-6 min-w-max">
                                {techStack.concat(techStack).map((logo, index) => (
                                    <img
                                        key={index}
                                        src={logo}
                                        alt={`Tech ${index + 1}`}
                                        className="h-16 w-32 object-contain transition-transform"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
