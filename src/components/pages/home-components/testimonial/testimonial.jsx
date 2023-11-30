export const Testimonial = () => {
  return (
    <div className="flex items-center justify-between gap-[100px] ">
      <div className="w-[40%]"><img src="../../../../../public/mock-imges/testimonial.png" alt="" className="w-[100%]" /></div>
      <div className="flex flex-col items-start justify-center w-[58%] ">
        <h3 className="text-text text-[16px] font-bold leading-[24px]">Skylar George</h3>
        <span className="text-text-1 text-[14px] font-normal leading-]24px] pt-[5px] pb-[20px]">
          Managing Director, Lovgency Company</span>
        <h3 className="text-text text-[20px] font-bold">“You'll want to use a format that's viewable for your potential leads and
          aligns closely with their values. To give you an idea of how testimonials
          can be portrayed, below are the different testimonial types that you
          can use to show off your customers' stories”</h3>

          <div className="flex gap-4 mt-[20px] mb-[">
            <div className="px-[10px] py-[5px] bg-bg "><img src="../../../../../public/mock-imges/left-arrow-alt-regular-24.png" alt="left" /></div>
            <div className="px-[10px] py-[5px] bg-blue"><img className="color-white" src="../../../../../public/mock-imges/right-arrow-alt-regular-24.png" alt="right" /></div>
          </div>
      </div>
    </div>
  )
};
