import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import FootBar from "./components/FootBar";
import Bubble from "./algo/Bubble";

export default function App() {
  const [arr, setArr] = useState<number[]>([]);

  const [start, setStart] = useState(false);
  const [toggle, setToggle] = useState(0);
  const [count, setCount] = useState(1);
  const [len, setLen] = useState(arr.length - 1);

  //* state for the length of the array the speed of the sorting.
  const [ascending, setAscending] = useState(true);
  const [length, setLength] = useState(50);
  const [milisec, setMiliSec] = useState(30);

  useEffect(() => {
    const newArr = [...arr];
    let flag = false;
    if (start) {
      const interval = setInterval(() => {
        setToggle(count + 1); //* Set the toogle the current bar we are to show different color.
        //* Swaps the two array index.
        if (ascending) {
          if (arr[count] > arr[count + 1]) {
            flag = true;
            const temp = newArr[count];
            newArr[count] = newArr[count + 1];
            newArr[count + 1] = temp;
            setArr(newArr);
          }
        } else {
          if (arr[count] < arr[count + 1]) {
            flag = true;
            const temp = newArr[count];
            newArr[count] = newArr[count + 1];
            newArr[count + 1] = temp;
            setArr(newArr);
          }
        }
        //* Stops the sorting
        if (len <= 0) {
          setToggle(count);
          setStart(false);
          setLen(arr.length);
          setCount(0);
          setToggle(0);
        }
        //* Increment if count equals to length of the array
        if (count === len) {
          setCount(0);
          //* Lessen the size of the array to lessen the looping.
          if (flag) {
            setLen((prev) => prev - 1);
          } else {
            setLen((prev) => prev - 2);
          }
        } else {
          setCount((prev) => prev + 1);
        }
      }, milisec);
      return () => {
        clearInterval(interval);
      };
    }
  }, [arr, ascending, count, len, milisec, start]);

  useEffect(() => {
    const random = [];
    for (let i = 0; i < length; i++) {
      random.push(Math.floor(Math.random() * 70));
    }
    setArr(random);
    setLen(arr.length);
    setCount(0);
    setToggle(0);
    setStart(false);
  }, [arr.length, length]);

  const getRandom = () => {
    const random = [];
    for (let i = 0; i < length; i++) {
      random.push(Math.floor(Math.random() * 70));
    }
    setArr(random);
    setLen(arr.length);
    setCount(0);
    setToggle(0);
    setStart(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-between bg-slate-950 text-white">
      <NavBar />
      <Bubble arr={arr} toggle1={toggle} />
      <FootBar
        getRandom={getRandom}
        setStart={setStart}
        setLength={setLength}
        length={length}
        milisec={milisec}
        setMiliSec={setMiliSec}
        setAscending={setAscending}
        ascending={ascending}
      />
    </div>
  );
}
