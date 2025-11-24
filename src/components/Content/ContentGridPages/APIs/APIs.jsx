import BackButton from "../BackButton";
import OpenWeather from "./OpenWeather";

const APIs = () => {
  return (
    <div className="content-page">
      <BackButton />

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center p-8">
          <p
            className="text-[1.75rem] pb-4"
            style={{
              fontFamily: "Courier New",
              fontStyle: "italic",
            }}
          >
            OpenWeather API
          </p>

          <OpenWeather />
        </div>
        <div className="flex-center">
          <p className="text-[1.1rem]">
            - functional weather lookup tool using React, TypeScript, and the
            OpenWeather API
            <br />- utilizes Axios for API data fetching, including loading
            states, error handling, and conditional rendering
            <br />- generally fully responsive, for this version limited as
            mobile size reasons
          </p>
        </div>
      </div>
      <p className="pt-16 pb-24 text-[1.5rem] text-[var(--textColor)]">
        Currently under Construction...
      </p>
    </div>
  );
};

export default APIs;

/* <a
          href="https://schaustelle-halle.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center"
        >
          <div className="flex-center">
            <img src={schaustelle} alt="" />
          </div>
        </a> */
