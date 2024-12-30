"use client";
import React, { useRef, useEffect, useState } from "react";
import PROJECTS from "@/data/projects";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Card = ({ project }: { project: any }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-opacity duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0 motion-translate-x-in-[-24%] motion-translate-y-in-[0%]" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-4 sm:p-5">
        <AspectRatio
          className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 overflow-hidden"
          ratio={71 / 26}
        >
          <img
            className="w-full h-full rounded-base object-cover"
            src={`${project.previewImage}`}
            alt={project.name}
          />
        </AspectRatio>
        <div className="text-text mt-5 font-base">
          <h2 className="text-xl font-heading sm:text-2xl">{project.name}</h2>
          <p className="mt-2">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Work() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Projets</h1>
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => (
          <Card key={id} project={project} />
        ))}
      </div>
    </div>
  );
}
