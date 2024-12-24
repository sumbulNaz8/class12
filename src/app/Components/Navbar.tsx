import Image from "next/image"


const  Navbar  = () => { 

return (
  
<div>
  <div className="w-[1920px] h-[92px] bg-[#043873] py-4 px-[220px] flex justify-between items-center">
    <div>
      <Image src="/images/Logo.png" alt="logo" width={191} height={34}/>
     </div>
     <div className="w-[737.5px] h-[60px] flex justify-between items-center ">
      <div className="w-[549px] h-23px">
        <ul className="text-[18px] font-semibold leading-[23px] flex justify-between text-white">
          <li>Products</li>
          <li>Solution</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div>
        <button className="py-4 px-10 rounded-lg bg-[#FFE492]">
          Login
        </button>
      </div>
     </div>
  </div>
</div>

);
};
export default Navbar