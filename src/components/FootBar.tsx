/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  setLength: any;
  length: number;
  getRandom: () => void;
  setStart: any;
  setMiliSec: any;
  milisec: number;
  setAscending: any;
  ascending: boolean;
};
export default function FootBar({
  setLength,
  length,
  getRandom,
  setStart,
  milisec,
  setMiliSec,
  setAscending,
  ascending,
}: Props) {
  return (
    <div className="w-full bg-emerald-500 h-[100px] flex items-center justify-between  gap-2 p-2">
      <div className="w-max flex gap-2 iems-center">
        <span className="flex items-center gap-2">
          <label>Length:</label>
          <input
            type="text"
            placeholder="length"
            className="w-[50px] text-black outline-none  rounded-md px-1 py-0.5 text-center "
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </span>{" "}
        <span className="flex items-center gap-2">
          <label>Speed (milliseconds):</label>
          <input
            type="text"
            placeholder="miliseconds"
            className=" w-[50px] text-black outline-none  rounded-md px-1 py-0.5 text-center "
            value={milisec}
            onChange={(e) => setMiliSec(Number(e.target.value))}
          />
        </span>
        <span className="flex items-center gap-1">
          <label>Ascending:</label>
          <input
            type="checkbox"
            placeholder="miliseconds"
            className="  "
            checked={ascending}
            onChange={(e) => setAscending(e.target.checked)}
          />
        </span>
      </div>
      <span className="flex items-center gap-2">
        <button
          className="px-1.5 py-1 rounded-md border"
          type="button"
          onClick={getRandom}
        >
          Random
        </button>
        <button
          className="px-1.5 py-1 rounded-md border"
          type="button"
          onClick={() => setStart((prev: any) => !prev)}
        >
          Sort
        </button>
      </span>
    </div>
  );
}
