import Herosection from "@/components/Herosection"
import img1 from '/public/img1.png'
const page = () => {
  return (
    <>
    <Herosection ImageUrl ={img1} Title ={'OUR STORY'} btnTitle={'More About Us'} btnPath={'/about'}/>
    </>
  )
}

export default page
