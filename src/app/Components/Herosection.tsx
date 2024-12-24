import Image from "next/image"

const Herosection  = () =>{
    return (
        <div className="bg-[#043873] h-[829px] w-[1920px]  justify-center left-1px  top-[140px] right-[220px] bottom-[140px] left-[220px] ">
    
        <div className="width[656px] text-left height[154px] font-inter font-bold  text-[64px] leading-[77.45px] tracking-[2%] 
        text-[#FFFFFF] ml-40 mb-10 "> <h2 className="pt-40">Get More Done with</h2>
        <h2> whitepace</h2>
        </div>

         {/* paragraph */}
        <div className="width[656px]  height[238px]  font-inter font-[400px] text-[18px] leading-[30px] tracking-[2%] 
        text-[#FFFFFF] grid grid-cols-3 gap-4  ml-40 ">
             <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
        {/* <Image  src="/images/Image-container.png" alt="logo" width={824} height={549}  /> */}
        </div> 

        <div className=" gap-4  h-[549px] w-[824px] flex justify-center  ml-[40%]  -mt-[20%]  ">
        <Image  src="/images/Image-container.png" alt="logo" width={724} height={400}  />
        </div>
   

        </div>
    )
}
export default Herosection
