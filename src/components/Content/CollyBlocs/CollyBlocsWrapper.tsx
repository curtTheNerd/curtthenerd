import CollyBlocs from "./Collyblocs.jsx";

const CollyBlocsWrapper = () => {
  return (
    <div className="w-full flex flex-col pt-12 bg-gray-300">
      <h2 className="text-center pb-12">CollyBlocs Demo</h2>
      <CollyBlocs />
      <div className="w-[90%] mx-auto py-12">
        <p className="text-xl pb-2">How to play:</p>
        <p className="text-lg pl-4">
          - use arrow keys to navigate the red player around the map
          <br />
          - increase score by touching the colored blocks - green blocks will
          decrease your size and add to score slightly, yellow blocks will
          increase your size slightly but gives more points, pink blocks will
          increase your size even more and reduce lives by one but as well give
          even more points
          <br />- game over is reached when lives hit 0 or your player becomes
          to big <br />- restart by reloading the page or just press ESC for
          same effect
        </p>

        <p className="pt-8 text-lg">
          Additions in progress: <br />- nicer optic of course, additionally
          more visual pleasing score board <br />- multiple stages that add
          obstacle blocks
          <br />- submitting scores and highscore board
          <br />- adding difficulty progression; difficulty defined by increased
          amount of obstacle blocks and 'enemy' blocks
          <br />- soon to be seen as Telegram Bot
        </p>
      </div>
    </div>
  );
};

export default CollyBlocsWrapper;
