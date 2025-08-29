import Countdown from "react-countdown";

function CountDown() {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-white">Time's up!</span>;
    } else {
      return (
        <div className="flex gap-2 px-3 items-center text-white pb-2">
          <button className="bg-white text-black p-2 items-center rounded-md">
            {String(hours).padStart(2, "0")}
          </button>
          :
          <button className="bg-white text-black p-2 items-center rounded-md">
            {String(minutes).padStart(2, "0")}
          </button>
          :
          <button className="bg-white text-black p-2 items-center rounded-md">
            {String(seconds).padStart(2, "0")}
          </button>
        </div>
      );
    }
  };

  return (
    <Countdown
      date={Date.now() + 1000 * 60 * 60} // countdown for 1 hour
      renderer={renderer}
    />
  );
}

export default CountDown;
