import React from "react";
import Image from "next/image";

import ProjectContainer from "@/components/ui/ProjectContainer";
import ProjectTitle from "@/components/ui/ProjectTitle";
import ProjectFooter from "@/components/ui/ProjectFooter";
import ProjectChallangeApproach from "@/components/ui/ProjectChallange&Approach";
import ProjectResult from "@/components/ui/ProjectResult";

import SkyMain from "@/public/images/sky/main.webp";
import SkyHero from "@/public/images/sky/hero.webp";
import SkyCoreOverview from "@/public/images/sky/core-overview.webp";
import SkyTeam from "@/public/images/sky/team.webp";
import SkyContact from "@/public/images/sky/contact.webp";

const SkyAlliancePage = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <ProjectContainer>
          <ProjectTitle
            title="SKY ALLIANCE"
            description="A polished marketing site for Sky Alliance—a modern brand presence focused on clarity, trust, and membership storytelling. The experience introduces the alliance, its core programs, team, and contact paths with a cohesive visual system and responsive layouts throughout."
            tags={["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"]}
            github="https://github.com/MonyVannn"
            website="https://www.skyallianceinc.com/"
          />
          <Image
            src={SkyMain}
            width={1920}
            height={100}
            alt="Sky Alliance primary landing layout"
            className="w-auto h-auto mt-20"
          />
          <ProjectChallangeApproach
            challange="The project needed to turn a broad alliance story into a focused web experience: explain what Sky Alliance offers, who it serves, and how to get involved—without overwhelming visitors. The site had to feel credible and calm, stay fast on real devices, and keep content blocks easy to extend as the program grows."
            approach={[
              "Information architecture: Structured the story into clear sections—positioning, core offerings, team, and contact—so users can scan quickly and still find depth where it matters.",
              "Visual system: Established consistent typography, spacing, and color usage to reinforce trust and professionalism across every page template.",
              "Component-based UI: Built reusable layouts and content patterns to keep pages consistent and simplify future updates.",
              "Responsive design: Tuned breakpoints and imagery so key messages and CTAs remain legible from mobile through desktop.",
              "Performance-minded media: Used optimized artwork and Next.js Image to balance visual quality with load times.",
              "Accessibility-minded markup: Leaned on semantic sections, descriptive imagery, and readable contrast for interactive elements.",
            ]}
          />
          <Image
            src={SkyHero}
            width={1920}
            height={100}
            alt="Sky Alliance hero and key messaging"
            className="w-auto h-auto mt-20"
          />
          <Image
            src={SkyCoreOverview}
            width={1920}
            height={100}
            alt="Sky Alliance core programs overview section"
            className="w-auto h-auto mt-20"
          />

          <ProjectResult
            description="Sky Alliance now has a unified digital front door: visitors can understand the alliance at a glance, explore programs and people, and reach out through a clear contact flow—supported by a maintainable codebase and layout system."
            results={[
              "Delivered a multi-section marketing site with consistent branding and responsive behavior across viewports.",
              "Highlighted core offerings and membership narrative through scannable sections and supporting visuals.",
              "Presented leadership and team context to humanize the organization and build confidence.",
              "Implemented a dedicated contact experience that keeps the path to inquiry obvious and low-friction.",
              "Reduced long-term maintenance cost via reusable layout components and a coherent design system on the page level.",
            ]}
          />
          <Image
            src={SkyTeam}
            width={1920}
            height={100}
            alt="Sky Alliance team section"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={SkyContact}
            width={1920}
            height={100}
            alt="Sky Alliance contact page or section"
            className="w-auto h-auto mt-10"
          />
        </ProjectContainer>
      </div>
      <ProjectFooter />
    </>
  );
};

export default SkyAlliancePage;
