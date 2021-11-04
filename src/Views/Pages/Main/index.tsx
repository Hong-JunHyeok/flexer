import { Fragment, useCallback, FunctionComponent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, counterOddState } from "../../../Store/Counter";
import PageLayout from "../../Components/Common/PageLayout";
import SideBar from "../../Components/Common/SideBar";

const MainPage: FunctionComponent = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const isCounterOdd = useRecoilValue(counterOddState);

  const handleIncreaseNumber = useCallback(() => {
    setCounter((currentValue) => currentValue + 1);
  }, [setCounter]);
  const handleDecreaseNumber = useCallback(() => {
    setCounter((currentValue) => currentValue - 1);
  }, [setCounter]);

  return (
    <Fragment>
      <PageLayout>
        <h1>{counter}</h1> ({isCounterOdd ? "홀" : "짝"})
        <br />
        <button onClick={handleIncreaseNumber}>+</button>
        <button onClick={handleDecreaseNumber}>-</button>
      </PageLayout>
    </Fragment>
  );
};

export default MainPage;
