import React from "react";

import ProjectContainer from "@/components/ui/ProjectContainer";
import ProjectTitle from "@/components/ui/ProjectTitle";

const IDManagementSystemPage = () => {
  return (
    <ProjectContainer>
      <ProjectTitle
        title="ID Management"
        description="
          A system that allows users to manage their ID cards. The system is designed to be user-friendly and easy to use."
        tags={["Vue", "Javascript", "Laravel"]}
      />
    </ProjectContainer>
  );
};

export default IDManagementSystemPage;
