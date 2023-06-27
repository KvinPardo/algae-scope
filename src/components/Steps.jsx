import React from "react";

const Steps = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#A4C3B2] to-[#EAF4F4] md:py-12 py-14">
        <div className="container mx-auto flex flex-col justify-center md:justify-start items-center md:items-start">
          <div className="md:pl-28">
            <h2 className="text-[60px] uppercase text-[#2D6A4F] font-semibold leading-8 md:leading-8">
              2 Steps
            </h2>
            <h3 className="text-[#2D6A4F] uppercase text-[32px]">
              For blue carbon
            </h3>
            <p className="text-[#2D6A4F] uppercase text-[32px] leading-4">
              Into Products
            </p>
          </div>

          <div className="grid md:grid-cols-2 md:py-12 py-8 md:mx-12 px-4">
            <div className="flex flex-col justify-center items-center md:px-12">
              <h3 className="text-[56px] uppercase font-bold text-[#2D6A4F] leading-10">
                Farm
              </h3>
              <p className="text-5xl uppercase text-[#2D6A4F] font-light">
                First Step
              </p>
              <div className="w-full border-[2px] border-[#2D6A4F] rounded-[20px] md:mt-5 md:p-12 h-full mt-6">
                <div className="grid md:grid-cols-1 grid-cols-1 gap-y-4">
                  <div className="flex justify-center md:justify-start items-center">
                    <img
                      src="/img/farm/co2.webp"
                      alt=""
                      className="w-32 object-contain aspect-[3/2] "
                    />
                    <h3 className="text-white md:text-[16px] text-[13px]">
                      Is a natural carbon sink and listed as a climate change
                      solution by the World Resources Institute
                    </h3>
                  </div>
                  <div className="flex justify-center md:justify-start items-center">
                    <img
                      src="/img/farm/drop.webp"
                      alt=""
                      className="w-32 object-contain aspect-[3/2] "
                    />
                    <h3 className="text-white md:text-[16px] text-[13px]">
                      Water filtration/remediation Heavy metals absorption
                    </h3>
                  </div>
                  <div className="flex justify-center md:justify-start items-center">
                    <img
                      src="/img/farm/fish.webp"
                      alt=""
                      className="w-32 object-contain aspect-[3/2] "
                    />
                    <h3 className="text-white md:text-[16px] text-[13px]">
                      Produces oxygen and attracts marine life
                    </h3>
                  </div>
                  <div className="flex justify-center md:justify-start items-center">
                    <img
                      src="/img/farm/jobs.webp"
                      alt=""
                      className="w-32 object-contain aspect-[3/2] "
                    />
                    <h3 className="text-white md:text-[16px] text-[13px]">
                      Creates seasonal jobs for fishermen
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:px-12">
              <h3 className="text-[56px] uppercase font-bold text-[#2D6A4F] leading-10">
                Bio Products
              </h3>
              <p className="text-5xl uppercase text-[#2D6A4F] font-light">
                2nd Step
              </p>
              <div className="w-full border-[2px] border-[#2D6A4F] rounded-[20px] md:mt-5 md:p-12 h-full">
                <div className="grid md:grid-cols-1 grid-cols-1 h-full items-start">
                  <div className="flex items-center gap-6">
                    <img
                      src="/img/bioproducts/gas.webp"
                      alt=""
                      className="w-28 object-contain aspect-[3/2] "
                    />
                    <h3 className="text-white md:text-[16px] text-[13px]">
                      1.500 t of a new generation bioethanol production. 28.5000
                      t of biofuel blend
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <img
                      src="/img/bioproducts/algae.webp"
                      alt=""
                      className="w-28 object-contain aspect-[3/2] "
                    />
                    <h3 className="text-white md:text-[16px] text-[13px]">
                      Biomass for fertilizers
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <img
                      src="/img/bioproducts/bio.webp"
                      alt=""
                      className="w-28 object-contain aspect-[3/2] "
                    />
                    <h3 className="text-white md:text-[16px] text-[13px]">
                      Bioplastic and other bioproducts
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
