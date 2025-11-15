import React from "react";
import Image from "next/image";

import ProjectContainer from "@/components/ui/ProjectContainer";
import ProjectTitle from "@/components/ui/ProjectTitle";
import ProjectFooter from "@/components/ui/ProjectFooter";
import ProjectChallangeApproach from "@/components/ui/ProjectChallange&Approach";
import ProjectResult from "@/components/ui/ProjectResult";

import SkillbridgeHome from "@/public/images/skillbridge/skillbridge-home.png";
import SkillbridgeUserSetting from "@/public/images/skillbridge/skillbridge-user.png";
import SkillBridgeProfile from "@/public/images/skillbridge/skillbridge-profile.png";
import SkillbridgeProjectDetail from "@/public/images/skillbridge/skillbridge-project-detail.png";
import SkillbridgeResponsiveness from "@/public/images/skillbridge/skillbridge-responsive.png";
import SkillbridgeChat from "@/public/images/skillbridge/skillbridge-chat.png";

const SkillBridgePage = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <ProjectContainer>
          <ProjectTitle
            title="SKILLBRIDGE"
            description="A dynamic micro-project marketplace platform that bridges the gap between new graduates seeking practical experience and businesses/nonprofits needing short-term, specific tasks completed. Built to empower emerging talent through verifiable portfolio building."
            tags={["Next.js", "TypeScript", "MongoDB", "Prisma", "Clerk.js"]}
            github="https://github.com/MonyVannn/csci441-teamc-skillbridge/"
            website="https://skillbridge.dev/"
          />
          <Image
            src={SkillbridgeHome}
            width={1920}
            height={100}
            alt="skillbridge-main"
            className="w-auto h-auto mt-20"
          />
          <ProjectChallangeApproach
            challange="New graduates and students struggle to gain essential practical experience due to a saturated job market and limited internship opportunities. The challenge was to create a platform that provides real-world project opportunities while ensuring quality matches between students' skills and business needs, all with a robust verification system for portfolio building."
            approach={[
              "Micro-Project Marketplace: Developed a centralized online hub where businesses can post well-defined, small-scale projects and students can discover and apply for opportunities.",
              "Authentication & User Management: Implemented Clerk.js for secure authentication, supporting multiple user types (students, business owners, and administrators) with role-based access control.",
              "Database Architecture: Designed a comprehensive MongoDB schema using Prisma ORM to manage complex relationships between users, projects, applications, skills, and achievements.",
              "Verified Portfolio System: Created a verification mechanism that translates completed projects into tangible portfolio credit with visual badge representation.",
              "Incentive Framework: Built functionality to facilitate optional stipends for successful project completion, motivating quality work.",
              "Skill Recognition: Implemented a badge and achievement system to visually represent accumulated skills and milestones, enhancing user motivation.",
            ]}
          />
          <Image
            src={SkillBridgeProfile}
            width={1920}
            height={100}
            alt="skillbridge-projects"
            className="w-auto h-auto mt-20"
          />
          <Image
            src={SkillbridgeUserSetting}
            width={1920}
            height={100}
            alt="skillbridge-dashboard"
            className="w-auto h-auto mt-20"
          />
          <ProjectResult
            description="SkillBridge successfully created a thriving ecosystem connecting students with real-world opportunities, significantly improving their employability while helping businesses complete valuable short-term projects."
            results={[
              "Developed a fully functional marketplace with seamless project posting, discovery, and application workflows.",
              "Implemented secure authentication and role-based access control for multiple user types using Clerk.js.",
              "Created a robust database architecture handling complex relationships between 30+ projects, 20+ students, and 5+ business owners.",
              "Built a comprehensive verification system that transforms completed projects into verifiable portfolio achievements.",
              "Designed an intuitive badge and achievement system that visually represents user skills and accomplishments.",
              "Established an idempotent database seeding system for development and testing, supporting customizable data generation.",
              "Integrated Shadcn UI components for a modern, accessible, and responsive user interface.",
            ]}
          />
          <Image
            src={SkillbridgeProjectDetail}
            width={1920}
            height={100}
            alt="skillbridge-profile"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={SkillbridgeChat}
            width={1920}
            height={100}
            alt="skillbridge-badges"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={SkillbridgeResponsiveness}
            width={1920}
            height={100}
            alt="skillbridge-application"
            className="w-auto h-auto mt-10"
          />
        </ProjectContainer>
      </div>
      <ProjectFooter />
    </>
  );
};

export default SkillBridgePage;
