const WorkAlgae = () => {
  return (
    <>
      <div className="bg-[#5DE1E6] w-full flex flex-col justify-center items-center md:p-20">
        <div className="">
          <img src="/img/algae.svg" alt="" className="w-[140px]" />
        </div>
        <div className="relative py-16">
          <h3 className="text-[white] md:text-[69px] text-[28px] text-center md:leading-[70px] leading-8">
            WHY WE WORK <br /> WITH ALGAE?
          </h3>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-3 grid-cols-2 w-full">
        <div className="flex justify-center items-center">
          <img
            src="/img/co2.webp"
            alt=""
            className="w-[150px] object-contain aspect-[3/2]"
          />
        </div>
        <div className="flex justify-center items-center bg-black">
          <img
            src="/img/gas.webp"
            alt=""
            className="w-[150px] object-contain aspect-[3/2]"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/img/resourse.webp"
            alt=""
            className="w-[150px] object-contain aspect-[3/2]"
          />
        </div>
      </div>
    </>
  );
};

export default WorkAlgae;
