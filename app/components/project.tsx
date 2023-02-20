import Image from "next/image";
import { ProjectType } from "@/data/projects";

import background from "../../images/ut_dell.jpg";

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="overflow-hidden py-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {project.title}
              </p>

              {project?.description.map((paragraph, index) => {
                const key = paragraph.replace(/\s/g, "") + index;
                return (
                  <p key={key} className="mt-6 text-lg leading-8 text-gray-300">
                    {paragraph}
                  </p>
                );
              })}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {project?.features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-500"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={project.image}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
