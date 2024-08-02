"use client"

import { skillsData } from "@/data";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"

const SliderSkills = () => {
    return ( 
        <Swiper
        breakpoints={{
            320:{
                slidesPerView: 1,
                spaceBetween: 15
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 15
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 15
            },
        }}
        freeMode={true}
        pagination={{
            clickable: true
        }}
        modules={[Pagination]}
        className="h-[300px] md:h-[340px] w-[270px] md:w-[550px]">
            {skillsData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg
                    cursor-pointer bg-secondary sm:flex-col gap-x-6 sm:gap-x-0
                    group hover:bg-darkBg transition-all duration-300 hover:border-terciary border-2">
                        <div className="mb-4 text-4xl">{item.icon}</div>
                        <div>
                            <h3 className="mb-2 text-md">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>

                </SwiperSlide>
            ))}

        </Swiper>
    );
}
 
export default SliderSkills;
