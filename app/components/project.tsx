import Image from "next/image";
import { ProjectType } from "@/data/projects";
import RichTextToHtml from "@/app/components/RichTextToHtml";
import background from "../../images/ut_dell.jpg";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

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

              <div className="mt-6 [&_p]:py-4">
                <RichTextToHtml richText={project.description.content} />
              </div>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {project?.technologies.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <LockClosedIcon
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-500"
                        aria-hidden="true"
                      />
                      {feature?.fields?.name}
                    </dt>{" "}
                    <dd className="inline">{feature?.fields?.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={`https:${project?.previewImage?.fields?.file?.url}`}
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
