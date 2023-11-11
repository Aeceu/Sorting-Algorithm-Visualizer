type Props = {
  arr: Array<number>;
  toggle1: number;
};
export default function Bubble({ arr, toggle1 }: Props) {
  return (
    <div className="h-full w-full flex gap-[1px] justify-center ">
      {arr.map((i, index) => (
        <div
          key={index}
          style={{ height: i * 7 + "px" }}
          className={`text-xs text-center w-[10px]  ${
            toggle1 === index ? "bg-blue-500" : "bg-[#cccccc]"
          }`}
        />
      ))}
    </div>
  );
}
