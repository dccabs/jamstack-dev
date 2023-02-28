import ut_background from "@/images/ut_dell.jpg";
import flexcar_background from "@/images/flexcar.jpg";
import dtcc from "@/images/dtcc.jpg";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { StaticImageData } from "next/image";

export type FeatureType = {
  name: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type ProjectType = {
  client: string;
  shortClientName: string;
  title: string;
  description: string[];
  previewImage: any;
  color: string;
  features: FeatureType[];
};

// const projects: ProjectType[] = [
//   {
//     client: "The University of Texas at Austin - Dell Medical School",
//     title:
//       "The Future of Medical Research Surveys: Dynamic, Customizable,and User-Friendly",
//     description: [
//       "When researchers at UT required a custom survey to gather patient data, they turned to JamstackDev for a tailored solution. Our team created a specialized survey tool that not only seamlessly collected data and stored it in a database, but also communicated with patients via SMS and presented the results on a customized dashboard using our unique API.",
//       "By leveraging JamstackDev's expertise, the researchers were able to offer patients a highly personalized survey experience, resulting in improved response rates and more accurate data. Additionally, our streamlined approach allowed for more efficient analysis of the data, providing the researchers with a comprehensive view of their findings.",
//     ],
//     image: ut_background,
//     color: "bg-orange-500",
//     features: [
//       {
//         name: "Next.js",
//         description:
//           "We used Next.js to build out the front end of the site. React is the framework Next.js is built on.",
//         icon: CloudArrowUpIcon,
//       },
//       {
//         name: "Supabase - Backend and API layer",
//         description: "",
//         icon: LockClosedIcon,
//       },
//       {
//         name: "Material UI - reusuable UI component library",
//         description:
//           "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//         icon: ServerIcon,
//       },
//     ],
//   },
//   {
//     client: "Flexcar",
//     title: "Cutting-Edge Parking Lot Management Application",
//     description: [
//       "Flexcar, a long-term car rental service that provides comprehensive insurance and maintenance, needed to improve their fleet management across multiple cities in the USA. This required the development of a mobile web application that utilized native phone features such as image capture and GPS coordinates.",
//       "Our team at Jamstack Dev played an instrumental role in building this application, enabling Flexcar's workers to effectively track incoming and outgoing vehicles and report any damage or maintenance issues in real-time. We are proud to have helped Flexcar streamline their operations and enhance their customer experience through our expertise in mobile web application development.",
//     ],
//     image: flexcar_background,
//     color: "bg-indigo-400",
//     features: [
//       {
//         name: "Next.js",
//         description:
//           "We used Next.js to build out the front end of the site. React is the framework Next.js is built on.",
//         icon: CloudArrowUpIcon,
//       },
//       {
//         name: "Supabase - Backend and API layer",
//         description: "",
//         icon: LockClosedIcon,
//       },
//       {
//         name: "Material UI - reusuable UI component library",
//         description:
//           "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//         icon: ServerIcon,
//       },
//     ],
//   },
//   {
//     client: "DTCC",
//     title:
//       "Modernizing financial services with custom-built solutions and real-time data streaming.",
//     description: [
//       "DTCC is a leading financial services company that offers a comprehensive range of post-trade market infrastructures, including clearance, settlement, and information services for equities, fixed-income securities, and derivatives. As a central clearinghouse for trades made in the financial markets, DTCC processes and settles transactions for its clients, providing risk management and other related services to help them manage risk in their financial transactions.",
//       "DTCC approached Jamstack Dev to explore modern front-end technologies that could better serve their needs. We developed a proof of concept that incorporated real-time data streaming with websockets, Tanstack Query's state management solution, and React and NextJs integration with interactive charts built with Canvasing tools. Our team worked in partnership with DTCC's internal teams to identify their most pressing needs and build a custom prototype that could meet their standards in the future. With our cutting-edge solutions, DTCC can continue to enhance their services and provide an unparalleled customer experience in the world of financial services.",
//     ],
//     image: dtcc,
//     color: "bg-cyan-500",
//     features: [
//       {
//         name: "Next.js",
//         description:
//           "We used Next.js to build out the front end of the site. React is the framework Next.js is built on.",
//         icon: CloudArrowUpIcon,
//       },
//       {
//         name: "Supabase - Backend and API layer",
//         description: "",
//         icon: LockClosedIcon,
//       },
//       {
//         name: "Material UI - reusuable UI component library",
//         description:
//           "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
//         icon: ServerIcon,
//       },
//     ],
//   },
// ];

// export default projects;
