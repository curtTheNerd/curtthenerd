import ContentSectionBlock from "./ContentSectionBlock";

import About from "./About";
import ContactForm from "../../../Content/ContactForm";

const ContentSection = () => {
  const contentSectionData = [
    {
      header: "About",
      content: <About />,
    },

    {
      header: "History",
      content: "still to decide content",
    },
    {
      header: "Contact",
      content: <ContactForm />,
    },
  ];
  return (
    <section className="content-section w-full space-y-3">
      {contentSectionData.map((element) => (
        <ContentSectionBlock
          header={element.header}
          sectionContent={element.content}
        />
      ))}
    </section>
  );
};

export default ContentSection;
