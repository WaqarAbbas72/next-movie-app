import Herosection from "@/components/Herosection";
import img1 from '/public/img1.png'

export default function Home() {
  return (
    <>
      <Herosection Title={`LET'S WATCH MOVIES TOGETHER`} ImageUrl={img1} btnTitle={'Explore Movies'}/>
    </>
  );
}
