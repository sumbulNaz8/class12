// import Image from "next/image"
// export default function Footer()   {
//     return (
// <div>
// <div className="w-[1922px] h-[538px] top-[465px] right-[220px] bottom-[140px] left-[100px] ">
// <div className="w-[1920px] h-[461px] top-[5195px] left-[1px] right-[220px] bottom-[32px] gap-[200px] bg-[#043873]">
// <div className="w-[1480px] h-[289px] gap-[100px]">
// <div className="w-[1480px] h-[169px] gap-[100px]">
// <div className="w-[295px] h-[169px] gap-[15px]">
                        
// <Image src="/images/Logo.png" alt="logo" width={191} height={34} />
//  <div className="w-[240px] h-[120px] font-Inter font-[400px] text-[18px] leading-[30px] tracking-[2%] text-[#F7F7EE]"><p>
//  whitepace was created for the new ways we live and work. We make a better workspace around the world</p>

// <div className="w-[295px] h-[127px] gap-[15px] ">
                  
// <div className="w-[68px] h-[22px] font-inter font-[700px] text-[18px] text-[#FFFFFF] leading-[21.78px] tracking-[-2%]"><p>Product</p></div>
// <div className="w-[70px] h-[20px] font-inter font-[400px] text-[16px] text-[#FFE492] leading-[20px] tracking-[-2%]"><p>Overview</p></div>
// <div className="w-[50px] h-[20px] font-inter font-[400px] text-[16px] text-[#FFFFFF] leading-[20px] tracking-[-2%]"><p>Pricing</p></div>
// <div className="w-[177px] h-[20px] font-inter font-[400px] text-[16px] text-[#FFFFFF] leading-[20px] tracking-[-2%]"><p>Customer stories</p></div>
                                                
                   
                   
// <div className="w-[295px] h-[127px] gap-[15px]">
// <div className="w-[68px] h-[22px] font-inter font-[700px] text-[18px] text-[#FFFFFF] leading-[21.78px] tracking-[-2%]"><p>Product</p></div>
// <div className="w-[70px] h-[20px] font-inter font-[400px] text-[16px] text-[#FFE492] leading-[20px] tracking-[-2%]"><p>Overview</p></div>
// <div className="w-[50px] h-[20px] font-inter font-[400px] text-[16px] text-[#FFFFFF] leading-[20px] tracking-[-2%]"><p>Pricing</p></div>
// <div className="w-[177px] h-[20px] font-inter font-[400px] text-[16px] text-[#FFFFFF] leading-[20px] tracking-[-2%]"><p>Overview</p></div>
                             
// <div className="w-[295px] h-[127px] gap-[15px]">
// <div className="w-[68px] h-[22px] font-inter font-[700px] text-[18px] text-[#FFFFFF] leading-[21.78px] tracking-[-2%]"><p>Product</p></div>
// <div className="w-[70px] h-[20px] font-inter font-[400px] text-[16px] text-[#FFE492] leading-[20px] tracking-[-2%]"><p>Overview</p></div>
// <div className="w-[50px] h-[20px] font-inter font-[400px] text-[16px] text-[#FFFFFF] leading-[20px] tracking-[-2%]"><p>Pricing</p></div>
// <div className="w-[177px] h-[20px] font-inter font-[400px] text-[16px] text-[#FFFFFF] leading-[20px] tracking-[-2%]"><p>Overview</p></div>
                    
                             
// </div>
// </div>
                             
//  </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>
//                   </div>
// </div>
//     )
// }

import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-[1922px] h-[538px]">
            <div className="w-[1920px] h-[461px] bg-[#043873] flex flex-col items-center gap-[50px]">

                {/* Logo and Description */}
                <div className="w-[1480px] flex items-start justify-between">
                    <div className="w-[295px]">
                        <Image src="/images/Logo.png" alt="logo" width={191} height={34} />
                        <p className="mt-4 text-[18px] leading-[30px] text-[#F7F7EE]">
                            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
                        </p>
                    </div>

                    {/* Product Sections */}
                   
                        <div  className="w-[295px]">
                            <p className="text-[18px] font-bold text-[#FFFFFF] mb-4">Product</p>
                            <ul className="space-y-2">
                                <li className="text-[16px] text-[#FFE492]">Overview</li>
                                <li className="text-[16px] text-[#FFFFFF]">Pricing</li>
                                <li className="text-[16px] text-[#FFFFFF]">Customer Stories</li>
                            </ul>
                        </div>
                        {/* // 2 */}
                        
                        <div  className="w-[295px]">
                            <p className="text-[18px] font-bold text-[#FFFFFF] mb-4">Resources</p>
                            <ul className="space-y-2">
                                <li className="text-[16px] text-[#FFE492]">Blog</li>
                                <li className="text-[16px] text-[#FFFFFF]">Guides & tutorials</li>
                                <li className="text-[16px] text-[#FFFFFF]">Help center</li>
                            </ul>
                        </div>

                        {/* 3 */}
                        <div  className="w-[295px]">
                            <p className="text-[18px] font-bold text-[#FFFFFF] mb-4">Company</p>
                            <ul className="space-y-2">
                                <li className="text-[16px] text-[#FFE492]">About us</li>
                                <li className="text-[16px] text-[#FFFFFF]">Careers</li>
                                <li className="text-[16px] text-[#FFFFFF]">Media kit</li>
                            </ul>
                        </div>

                       
                </div>
            </div>
        </div>
    );
}
