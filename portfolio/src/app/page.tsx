import FirstComp from "./components/FirstComp";
import SecondComp from "./components/SecondComp";

const Home = () => {
  return (
    <div>
      <div className="fixed top-0 px-4 text-[3rem] font-bold">LDC</div>
      <FirstComp />
      <SecondComp />
    </div>
  );
};
export default Home;
