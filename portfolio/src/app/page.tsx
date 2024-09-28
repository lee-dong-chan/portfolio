import dynamic from "next/dynamic";
import Container from "./components/Container";

// const DynamicContainer = dynamic(() => import("./components/Container"), {
//   ssr: false,
// });
const Home = () => {
  return <Container />;
};
export default Home;
