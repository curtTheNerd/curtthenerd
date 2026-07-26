import { ContentData } from "../../../Content/ContentData";

const Projects = () => {
  return (
    <div className="content-section-projects py-4 space-y-4">
      <p className="section-title text-3xl xl:text-4xl font-semibold tracking-tighter">
        Featured Projects and Content
      </p>
      {ContentData.map((element) => element.HTML_block)}
    </div>
  );
};

export default Projects;
