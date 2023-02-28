import RecentProjects from "@/app/components/home/RecentProjects";
import Header from "@/app/components/home/Header";
import { createClient } from "contentful";

console.log(
  "CONTENTFUL_DELIVERY_API_TOKEN",
  process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN
);

const options = {
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "", // ID of a Compose-compatible space to be used \
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN || "", // delivery API key for the spac
  // space: contentful.CONTENTFUL_SPACE_ID, // ID of a Compose-compatible space to be used \
  // accessToken: contentful.CONTENTFUL_DELIVERY_API_TOKEN, // delivery API key for the space \
};

const client = createClient({ ...options });

async function getData() {
  const homePageData = await client.getEntries({
    content_type: "page",
    include: 10,
    "sys.id": "5e1yPaLykYTforheQK8t1p",
  });

  // @ts-ignore
  const projectData =
    // @ts-ignore
    homePageData?.items[0]?.fields?.pageBlocks[0]?.fields?.listOfProjects.map(
      // @ts-ignore
      (project) => {
        return project.fields;
      }
    );
  console.log("projectData", projectData);

  return {
    projectData,
  };
}

const Page = async () => {
  const data = await getData();
  console.log("data", data);
  const html = (
    <div>
      <Header />
      <RecentProjects data={data?.projectData} />
      {/*<WhatWeDo />*/}
      {/*<Tools />*/}
      {/*<WhoWeAre />*/}
    </div>
  );
  return html;
};

export default Page;
