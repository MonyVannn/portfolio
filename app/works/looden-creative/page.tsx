import React from "react";
import Image from "next/image";

import ProjectContainer from "@/components/ui/ProjectContainer";
import ProjectTitle from "@/components/ui/ProjectTitle";
import ProjectFooter from "@/components/ui/ProjectFooter";
import ProjectChallangeApproach from "@/components/ui/ProjectChallange&Approach";
import ProjectResult from "@/components/ui/ProjectResult";

import LoodenMain from "@/public/images/looden/looden-main.webp";
import LoodenResponsive from "@/public/images/looden/looden-responsive.webp";
import LoodenOverview from "@/public/images/looden/looden-overview.webp";
import LoodenServices from "@/public/images/looden/looden-services.webp";
import LoodenFooter from "@/public/images/looden/looden-footer.webp";

const LoodenCreativePage = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <ProjectContainer>
          <ProjectTitle
            title="LOODEN CREATIVE"
            description="
              An agency that provides creative solutions for businesses, including branding, web design, and marketing services."
            tags={["Nextjs", "Typescript", "Tailwindcss"]}
          />
          <Image
            src={LoodenMain}
            width={1920}
            height={100}
            alt="idm-main"
            className="w-auto h-auto mt-20"
          />
          <ProjectChallangeApproach
            challange="Developing a comprehensive suite of creative solutions for businesses, Looden Creative faced the challenge of delivering consistent, high-quality branding, web design, and marketing services that cater to diverse client needs and preferences."
            approach={[
              "Client-Centric Approach: Prioritize understanding each client's unique vision and requirements to tailor solutions that align with their goals.",
              "Brand Identity Development: Craft strong visual identities that convey professionalism, trust, and quality, helping clients stand out in their market.",
              "Strategic Design: Utilize strategic design principles to enhance communication and engagement, creating visually appealing and effective marketing materials.",
              "Cutting-Edge Tools: Stay ahead of design trends and leverage the latest tools to deliver innovative and stunning solutions that captivate audiences.",
              "Holistic Service Offering: Provide a full range of services from branding and content creation to social media management and web development, ensuring a cohesive and comprehensive approach to client projects.",
            ]}
          />
          <Image
            src={LoodenOverview}
            width={1920}
            height={100}
            alt="idm-sidebar"
            className="w-auto h-auto mt-20"
          />
          <ProjectResult
            description="Looden Creative successfully enhanced its clients' brand presence and engagement through tailored, high-quality creative solutions."
            results={[
              "Developed strong brand identities that built trust and loyalty among clients' customers.",
              "Created intuitive and engaging web designs that improved user experience and interaction.",
              "Boosted client communication and engagement with strategic design and compelling content.",
              "Delivered innovative solutions that helped clients stand out from their competition.",
              "Provided a seamless and comprehensive service experience, addressing all aspects of clients' creative needs.",
            ]}
          />
          <Image
            src={LoodenMain}
            width={1920}
            height={100}
            alt="idm-sidebar"
            className="w-auto h-auto mt-20"
          />
          <Image
            src={LoodenServices}
            width={1920}
            height={100}
            alt="idm-sidebar"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={LoodenFooter}
            width={1920}
            height={100}
            alt="idm-sidebar"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={LoodenResponsive}
            width={1920}
            height={100}
            alt="idm-sidebar"
            className="w-auto h-auto mt-10"
          />
        </ProjectContainer>
      </div>
      <ProjectFooter />
    </>
  );
};

export default LoodenCreativePage;
