import React from "react";

const ProjectAssignee = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-1">
      <h2 className="text-md font-medium">Team</h2>
      <div class="flex -space-x-4 rtl:space-x-reverse">
        <img
          class="w-8 h-8 rounded-full "
          src="https://randomuser.me/api/portraits/men/41.jpg"
          alt="project_assignee_profile"
        />
        <img
          class="w-8 h-8 rounded-full "
          src="https://randomuser.me/api/portraits/men/41.jpg"
          alt="project_assignee_profile"
        />
        <img
          class="w-8 h-8 rounded-full "
          src="https://randomuser.me/api/portraits/men/41.jpg"
          alt="project_assignee_profile"
        />
        <img
          class="w-8 h-8 rounded-full "
          src="https://randomuser.me/api/portraits/men/41.jpg"
          alt="project_assignee_profile"
        />
      </div>
    </div>
  );
};

export default ProjectAssignee;
