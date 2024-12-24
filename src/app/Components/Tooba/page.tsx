import Image from "next/image"
const Tooba = ()=>  {
    return (
      <div>
      <div className="flex  justify-between "> 

        <div className="w-[1440px] h-[48px] bg-[#000000] flex  justify-center">
          <div className="w-[859px] h-[24px] top-12 left-[445px] gap-[231px]  flex justify-center -space-x-[27%] mt-3">
          <div className="w-[474px] h-[18px] font-poppins font-normal text-[14px] leading-[21px] text-[#FFFFFF]"><p>Summmer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p></div>
          <div  className="w-[68px] h-[24px] font-poppins font-semibold text-[14px] leading-[24px] text-center underline border-solid skip-ink-false text-[#FAFAFA] flex justify-center -space-x-[27%] mt-0">ShopNow</div> 
            </div>
        <div className="w-[78px] h-[24px] gap-5px flex justify-center  mt-3 ">
          <div className="w-[49px] h-[21px] font-poppins font-normal text-[14px] leading-[21px] text-[#FAFAFA]  ">
            English
          </div>
          <div className="w-[24px] h-[24px]  text-black">
            <Image src="/images/DropDown.png" alt="logo" width={20} height={20}/>
          </div>
        </div>
        </div>
    
        </div> 
        </div>
    );
  };

  export default Tooba
