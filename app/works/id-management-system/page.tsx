import React from "react";
import Image from "next/image";

import ProjectContainer from "@/components/ui/ProjectContainer";
import ProjectTitle from "@/components/ui/ProjectTitle";
import ProjectFooter from "@/components/ui/ProjectFooter";
import ProjectChallangeApproach from "@/components/ui/ProjectChallange&Approach";
import ProjectResult from "@/components/ui/ProjectResult";

import IDM from "@/public/images/idm/idm-main.webp";
import IDMSidebar from "@/public/images/idm/idm-sidebar.webp";
import IDMActive from "@/public/images/idm/idm-active.png";
import IDMDelete from "@/public/images/idm/imd-delete.png";
import IDMEntity from "@/public/images/idm/idm-entity.png";
import IDMTemplate from "@/public/images/idm/idm-template.png";
import IDMUsers from "@/public/images/idm/idm-users.webp";
import IDMRole from "@/public/images/idm/idm-role.png";
import IDMPermission from "@/public/images/idm/idm-permission.png";

const IDManagementSystemPage = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <ProjectContainer>
          <ProjectTitle
            title="IDM SYSTEM"
            description="
          A system that allows users to manage their ID cards. The system is designed to be user-friendly and easy to use."
            tags={["Vue", "Javascript", "Laravel"]}
          />
          <Image
            src={IDM}
            width={1920}
            height={100}
            alt="idm-main"
            className="w-auto h-auto mt-20"
          />
          <ProjectChallangeApproach
            challange="Developing an ID Management System for an organization involves managing complex data relationships between entities, users, roles, permissions, and ID cards, all while ensuring a user-friendly and intuitive interface for administrators to efficiently create and manage these components."
            approach={[
              "Robust Database Schema: Design a comprehensive schema to efficiently manage entities, users, roles, permissions, and ID card relationships.",
              "Intuitive User Interface: Create a user-friendly interface with straightforward navigation and forms, making it easy for administrators to manage the system.",
              "Role-Based Access Control: Implement a detailed role-based access control system to ensure users have appropriate permissions based on their roles.",
              "Customizable ID Card Templates: Provide functionality for creating and customizing ID card templates that can be associated with different entities.",
              "Security and Privacy: Implement strong data security measures, including encryption and secure authentication, to protect sensitive information.",
            ]}
          />
          <Image
            src={IDMSidebar}
            width={1920}
            height={100}
            alt="idm-sidebar"
            className="w-auto h-auto mt-20"
          />
          <ProjectResult
            description="The ID Management System successfully streamlined the management of ID cards within the organization, improving efficiency and security."
            results={[
              "Efficiently managed complex relationships between entities, users, roles, and permissions.",
              "Enhanced user experience with an intuitive and user-friendly interface.",
              "Implemented robust role-based access control, ensuring appropriate permissions.",
              "Enabled the creation of customizable ID card templates for different entities.",
              "Improved data security and privacy through encryption and secure authentication methods.",
            ]}
          />
          <Image
            src={IDMActive}
            width={1920}
            height={100}
            alt="idm-active"
            className="w-auto h-auto mt-20"
          />
          <Image
            src={IDMActive}
            width={1920}
            height={100}
            alt="idm-active"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={IDMDelete}
            width={1920}
            height={100}
            alt="idm-active"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={IDMEntity}
            width={1920}
            height={100}
            alt="idm-active"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={IDMTemplate}
            width={1920}
            height={100}
            alt="idm-active"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={IDMUsers}
            width={1920}
            height={100}
            alt="idm-active"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={IDMRole}
            width={1920}
            height={100}
            alt="idm-active"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={IDMPermission}
            width={1920}
            height={100}
            alt="idm-active"
            className="w-auto h-auto mt-10"
          />
        </ProjectContainer>
      </div>
      <ProjectFooter />
    </>
  );
};

export default IDManagementSystemPage;
