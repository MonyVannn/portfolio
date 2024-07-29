import React from "react";
import Image from "next/image";

import ProjectContainer from "@/components/ui/ProjectContainer";
import ProjectTitle from "@/components/ui/ProjectTitle";
import ProjectResult from "@/components/ui/ProjectResult";
import ProjectChallangeApproach from "@/components/ui/ProjectChallange&Approach";

import ThengMain from "@/public/images/theng-portfolio/theng-portfolio-main.webp";
import ThengResponsive from "@/public/images/theng-portfolio/theng-portfolio-responsive.webp";
import ThengDevices from "@/public/images/theng-portfolio/theng-devices.webp";
import ThengPhoto from "@/public/images/theng-portfolio/theng-photo.webp";
import ProjectFooter from "@/components/ui/ProjectFooter";

const ThengPortfolioPage = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <ProjectContainer>
          <ProjectTitle
            title="Theng Portfolio"
            description="
          A portfolio website for photographer Theng. The website is designed to be minimalistic and clean to showcase the photographer's work."
            tags={["React", "TypeScript", "TailwindCSS"]}
          />
          <Image
            src={ThengMain}
            width={1920}
            height={100}
            alt="theng-main"
            className="w-auto h-auto mt-20"
          />
          <ProjectChallangeApproach
            challange="Crafting a digital showcase that truly captures the essence of Theng's photography was our primary challenge. We needed to create a platform that not only displayed the images beautifully but also reflected the photographer's unique style and vision. The website had to strike a delicate balance between minimalism and functionality, ensuring that the photographs remained the focal point while providing an intuitive and engaging user experience."
            approach={[
              "Initiated the project with an in-depth client consultation to align the website's design with Theng's unique style and professional goals.",
              "Implemented a clean, minimalist design that puts the focus squarely on the photography, allowing Theng's work to speak for itself.",
              "Developed a fully responsive layout to ensure optimal viewing experience across all devices, from desktop to mobile.",
              "Optimized the site for both performance and SEO, ensuring fast load times and improved visibility in search results.",
              "Created an intuitive navigation system with subtle animations to enhance user engagement without distracting from the photographic content.",
            ]}
          />
          <Image
            src={ThengResponsive}
            width={1920}
            height={100}
            alt="theng-responsive"
            className="w-auto h-auto mt-20"
          />
          <ProjectResult
            description="The final result is a sleek, modern portfolio website that showcases Theng's photography in a clean and elegant manner."
            results={[
              "Theng now has a professional online presence that accurately reflects her style and vision, helping her attract new clients and grow her business.",
              "The minimalist design allows the images to take center stage, while the responsive layout ensures that the site looks great on any device.",
              "The final result is a sleek, modern portfolio website that showcases Theng's photography in a clean and elegant manner.",
            ]}
          />
          <Image
            src={ThengDevices}
            width={1920}
            height={100}
            alt="theng-devices"
            className="w-auto h-auto mt-20"
          />
          <Image
            src={ThengPhoto}
            width={1920}
            height={100}
            alt="theng-photo"
            className="w-auto h-auto mt-20"
          />
        </ProjectContainer>
      </div>
      <ProjectFooter />
    </>
  );
};

export default ThengPortfolioPage;
