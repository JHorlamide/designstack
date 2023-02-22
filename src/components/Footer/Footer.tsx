import { Fragment } from "react";

const FooterMobile = () => {
  return (
    <Fragment>
      {/* Mobile footer */}
      <div className="bg-black py-10 px-5 md:hidden">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="w-[200px] h-[28px]">
              <img
                src={"/logo_white.png"}
                alt="design-stack-logo"
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col spacey-1">
              <h6 className="text-white capitalize">Phone</h6>
              <p className="text-gray text-xl">352-518-4875</p>
            </div>

            <div className="flex flex-col spacey-1">
              <h6 className="text-white capitalize">Email</h6>
              <p className="text-orange text-xl">info@designstack.io</p>
            </div>

            <div className="flex flex-col spacey-1">
              <h6 className="text-white capitalize">Social</h6>
              <div className="flex space-x-6">
                <a className="text-orange text-xl" href="">
                  Twitter
                </a>
                <a className="text-orange text-xl" href="">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col spacey-1">
            <h6 className="text-white capitalize">California</h6>
            <p className="text-gray text-xl">
              21 Lebsack Harbor Apt. 276 Palo Alto, CA
            </p>
          </div>

          <div className="flex flex-col spacey-1">
            <h6 className="text-white capitalize">New York</h6>
            <p className="text-gray text-xl">
              74 Howell Islands Suite 834 Rochester, NY
            </p>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex space-x-4 text-white">
              <a href="#/" className="underline">
                Latest Project
              </a>
              <a href="#/" className="underline">
                Pricing
              </a>
              <a href="#/" className="underline">
                FAQs
              </a>
              <a href="#/" className="underline">
                Contact
              </a>
            </div>

            <p className="text-white text-sm">
              © Copyright 2018 DESIGNSTACK Premium UI Goods for app or web
            </p>
          </div>
        </div>
      </div>

      {/* Desktop footer */}
      <div className="bg-black hidden md:block ">
        {/* Horizontal & Vertical Lines */}
        <div className="relative h-full border-gray">
          <div className="hidden md:hidden lg:block absolute left-36 -ml-0.5 w-0.5 h-[368px] bg-gray"></div>
          <div className="hidden md:hidden lg:block absolute right-36 -ml-0.5 w-0.5 h-[368px] bg-gray"></div>
        </div>

        <div className="py-12 px-14 container mx-auto max-w-7xl">
          <div className="justify-center items-center pl-20">
            <div className="grid grid-cols-12 gap-x-5">
              {/* First col */}
              <div className="col-span-4 flex flex-col space-y-16">
                <div className="w-full">
                  <img src="/logo_white.png" alt="" className="" />
                </div>

                <p className="text-white text-sm max-w-[250px]">
                  © Copyright 2018 DESIGNSTACK Premium UI Goods for app or web
                </p>

                <div className="flex space-x-4 text-white">
                  <a href="#/" className="underline">
                    Latest Project
                  </a>
                  <a href="#/" className="underline">
                    Pricing
                  </a>
                  <a href="#/" className="underline">
                    FAQs
                  </a>
                  <a href="#/" className="underline">
                    Contact
                  </a>
                </div>
              </div>

              {/* Second col */}
              <div className="col-span-3 flex flex-col space-y-10">
                <div className="flex flex-col spacey-1">
                  <h6 className="text-white text-lg capitalize">Phone</h6>
                  <p className="text-gray text-xl">352-518-4875</p>
                </div>

                <div className="flex flex-col spacey-1">
                  <h6 className="text-white text-lg capitalize">Email</h6>
                  <p className="text-blue text-xl">info@designstack.io</p>
                </div>

                <div className="flex flex-col spacey-1">
                  <h6 className="text-white text-lg capitalize">Social</h6>
                  <div className="flex space-x-6">
                    <a className="text-blue text-xl" href="">
                      Twitter
                    </a>
                    <a className="text-blue text-xl" href="">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Third col */}
              <div className="col-span-4 flex flex-col space-y-10">
                <div className="flex flex-col spacey-1">
                  <h6 className="text-white text-lg capitalize">California</h6>
                  <p className="text-gray text-xl max-w-xs">
                    21 Lebsack Harbor Apt. 276 Palo Alto, CA
                  </p>
                </div>

                <div className="flex flex-col spacey-1">
                  <h6 className="text-white text-lg capitalize">New York</h6>
                  <p className="text-gray text-xl max-w-xs">
                    74 Howell Islands Suite 834 Rochester, NY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FooterMobile;
