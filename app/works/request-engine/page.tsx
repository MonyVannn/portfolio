import React from "react";
import Image from "next/image";

import ProjectContainer from "@/components/ui/ProjectContainer";
import ProjectTitle from "@/components/ui/ProjectTitle";
import ProjectFooter from "@/components/ui/ProjectFooter";
import ProjectChallangeApproach from "@/components/ui/ProjectChallange&Approach";
import ProjectResult from "@/components/ui/ProjectResult";

import RequestMain from "@/public/images/request/form-main.png";
import FormBuilder from "@/public/images/request/form-builder.png";
import FormList from "@/public/images/request/form-list.webp";
import FormSubmit from "@/public/images/request/form-submit.webp";
import RequestForm from "@/public/images/request/requested-form.webp";
import RequestDetail from "@/public/images/request/request-detail.webp";
import Incoming from "@/public/images/request/incoming.webp";
import Users from "@/public/images/request/users.webp";
import Permissions from "@/public/images/request/permissions.webp";

const RequestEnginePage = () => {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <ProjectContainer>
          <ProjectTitle
            title="REQUEST ENGINE"
            description="
              A web application that allows users to manage form request flow. Organizations can create and manage forms, assign assignees, and implement approval flows efficiently."
            tags={["React", "TypeScript", "Node.js"]}
          />
          <Image
            src={RequestMain}
            width={1920}
            height={100}
            alt="request-engine-main"
            className="w-auto h-auto mt-20"
          />
          <ProjectChallangeApproach
            challange="Creating a web application that enables organizations to manage form request flows, where each department can build their own forms, assign approvers, and ensure services are available at specific times and locations."
            approach={[
              "Dynamic Form Builder: Implement a form builder that allows each department to create customized forms with necessary fields and options.",
              "Approval Workflow: Develop an approval flow system where selected assignees and approvers can manage the approval process efficiently.",
              "Service Availability Check: Integrate functionality to check service availability for specific times and locations when users fill in forms.",
              "User-Friendly Interface: Design an intuitive and easy-to-navigate interface for users to browse and submit forms.",
              "Departmental Management: Enable each department to manage their service items and assign relevant assignees for better service allocation.",
            ]}
          />
          <Image
            src={FormBuilder}
            width={1920}
            height={100}
            alt="request-engine-sidebar"
            className="w-auto h-auto mt-20"
          />
          <ProjectResult
            description="The Request Engine web application streamlined the management of form request flows, improving organizational efficiency and service delivery."
            results={[
              "Enabled departments to create and manage their own customized forms with ease.",
              "Implemented a robust approval workflow, ensuring efficient and timely approvals.",
              "Integrated service availability checks, enhancing user experience and service reliability.",
              "Designed a user-friendly interface that simplified form browsing and submission.",
              "Facilitated better departmental management and service allocation, improving overall operational efficiency.",
            ]}
          />
          <Image
            src={FormList}
            width={1920}
            height={100}
            alt="request-engine-active"
            className="w-auto h-auto mt-20"
          />
          <Image
            src={FormSubmit}
            width={1920}
            height={100}
            alt="request-engine-active"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={RequestForm}
            width={1920}
            height={100}
            alt="request-engine-delete"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={RequestDetail}
            width={1920}
            height={100}
            alt="request-engine-entity"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={Incoming}
            width={1920}
            height={100}
            alt="request-engine-template"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={Users}
            width={1920}
            height={100}
            alt="request-engine-users"
            className="w-auto h-auto mt-10"
          />
          <Image
            src={Permissions}
            width={1920}
            height={100}
            alt="request-engine-role"
            className="w-auto h-auto mt-10"
          />
        </ProjectContainer>
      </div>
      <ProjectFooter />
    </>
  );
};

export default RequestEnginePage;
