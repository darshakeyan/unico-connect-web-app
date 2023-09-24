import Card from "components/Card";
import React from "react";

type TechnologyHolderProp = {};

const TechnologyHolderCard: React.FC<TechnologyHolderProp> = ({}) => {
  return (
    <div className="bg-[#1f1f1f] pt-[110px] pb-[70px] px-12 text-white">
      <div className="shadow-tech bg-[#1f1f1f] flex flex-col justify-center items-center pt-10 pb-[60px] px-20">
        <h2 className="text-[40px] mt-5">Create Future-Ready Platforms!</h2>
        <div>
          <img
            src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/629f0b31b7048fc39ff2f082_xano.png"
            loading="lazy"
            width="500"
            alt="img"
            className="w-[450px] mt-[60px] "
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 86vw, (max-width: 991px) 400px, (max-width: 1919px) 450px, 600px"
          />
        </div>
        <p className="w-[520px] text-center mb-[10px] text-lg font-light">
          We have partnered with Xano to give you the ultimate experience. Xano
          builder provides us with a scalable server, flexible database, and a
          no-code API that transforms, filters and integrates with data anywhere
        </p>
        <div className="w-1/3 h-[1px] bg-[#ffffff33] my-5 "></div>

        <div className="w-full transition-all relative">
          {/* ------ Sticky Wrapper ------ */}
          <div className="grid z-10 gap-x-4 bg-[#1f1f1f] grid-cols-2 auto-cols-fr mt-[50px] py-[15px] transition-all sticky top-[70px]">
            {/* ---- Navbar ---- */}
            <a
              href="#no-code-platform"
              className="no-underline max-w-full inline-block"
            >
              <div className="flex flex-col justify-center items-start px-5 text-white">
                <p className="w-auto text-left mt-[10px] text-lg">
                  Build Faster
                </p>
                <h2 className="mt-0 text-2xl font-medium ml-0 uppercase mb-[10px]">
                  No CODE PLATFORMS
                </h2>
              </div>
            </a>
            <a
              href="#code-platform"
              className="no-underline max-w-full inline-block"
            >
              <div className="flex flex-col justify-center items-start px-5 text-white">
                <p className="w-auto text-left mt-[10px] text-lg">
                  Achieve Scale
                </p>
                <h2 className="mt-0 text-2xl font-medium ml-0 uppercase mb-[10px]">
                  CODE PLATFORMS
                </h2>
              </div>
            </a>
          </div>

          {/* ------ No Code Platform ------ */}
          <div className="grid relative mt-[60px] auto-cols-fr grid-cols-2 auto-rows-auto gap-x-4 gap-y-4">
            {/* Left Bar */}
            <div className="flex flex-col items-start p-5 sticky top-[190px]">
              <p className="w-auto text-left mt-[10px] text-lg">
                Developing with no code platforms enables us to deliver
                outstanding results on time.
              </p>
              <ul role="list" className="text-white list-disc ml-3">
                <li className="text-white">
                  <p className="w-auto text-left mt-[10px] text-lg">
                    Swift Development
                  </p>
                </li>
                <li className="text-white">
                  <p className="w-auto text-left my-[10px]">Well-Organized</p>
                </li>
                <li className="text-white">
                  <p className="w-auto text-left my-[10px]">Cost-Effective</p>
                </li>
                <li className="text-white">
                  <p className="w-auto text-left my-[10px]">Finest Outcome</p>
                </li>
              </ul>
            </div>

            {/* ----- Right side ----- */}
            <div className="flex flex-col items-start justify-center space-y-14">
              <div className="w-full border border-[#ffffff33] flex-initial mb-15 py-[45px] px-5">
                <img
                  src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620616f786dc12c465606ccc_xano.png"
                  loading="lazy"
                  width="168"
                  alt="img"
                  className="max-w-full inline-block align-middle"
                />
                <p className="w-[320px] text-white mt-6 mb-[30px] font-light">
                  <strong className="text-white mt-6 mb-[30px] font-light">
                    Xano builder provides us with a scalable server, flexible
                    database, and a no-code API that transforms, filters and
                    integrates with data anywhere.
                    <br />
                  </strong>
                </p>
              </div>

              <div className="w-full border border-[#ffffff33] flex-initial mb-15 py-[45px] px-5">
                <img
                  src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620618fbfb3512cef9ca46ca_logos_webflow.png"
                  loading="lazy"
                  width="168"
                  alt="img"
                  className="max-w-full inline-block align-middle"
                />
                <p className="w-[320px] text-white mt-6 mb-[30px] font-light">
                  <strong className="text-white mt-6 mb-[30px] font-light">
                    Webflow is a no-code web design tool with excellent support
                    features that helps us design, build and launch websites at
                    lightning-fast speed and uncompromised quality.
                    <br />
                  </strong>
                </p>
              </div>

              <div className="w-full border border-[#ffffff33] flex-initial mb-15 py-[45px] px-5">
                <img
                  src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620618fb01c03c31337e377c_logos_wordpress.png"
                  loading="lazy"
                  width="210"
                  alt="img"
                  className="max-w-full inline-block align-middle"
                />
                <p className="w-[320px] text-white mt-6 mb-[30px] font-light">
                  <strong className="text-white mt-6 mb-[30px] font-light">
                    WordPress is a go-to platform for designing simple, modern
                    and flexible websites that make the development process a
                    smooth and adaptable experience for us.
                    <br />
                  </strong>
                </p>
              </div>

              <div className="w-full border border-[#ffffff33] flex-initial mb-15 py-[45px] px-5">
                <img
                  src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/6253bf043660dbe366a2eb5f_Shopify_logo_2018%201.svg"
                  loading="lazy"
                  width="168"
                  alt="img"
                  className="max-w-full inline-block align-middle"
                />
                <p className="w-[320px] text-white mt-6 mb-[30px] font-light">
                  <strong className="text-white mt-6 mb-[30px] font-light">
                    Shopify is an e-commerce platform used to create online
                    e-shops with visually stunning designs. It is secure,
                    reliable and easily customizable at the same time.
                    <br />
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* ------ Code Platform ------ */}
          <div className="grid relative mt-[60px] auto-cols-fr grid-cols-2 auto-rows-auto gap-x-4 gap-y-4">
            {/* Left side */}
            <div className="flex items-start p-5 flex-col sticky top-[190px]">
              <p className="w-auto text-left mt-[10px] text-lg">
                Code platforms help achieve scale easily. Code platforms
                increase the speed of development and manage developments more
                efficiently.
                <strong>
                  <br />
                </strong>
              </p>
              <ul role="list" className="text-white list-disc ml-3">
                <li className="text-white">
                  <p className="w-auto text-left mt-[10px] text-lg">
                    Scalable Server
                  </p>
                </li>
                <li className="text-white">
                  <p className="w-auto text-left my-[10px]">Flexile Database</p>
                </li>
                <li className="text-white">
                  <p className="w-auto text-left my-[10px]">
                    Easy to Transform
                  </p>
                </li>
                <li className="text-white">
                  <p className="w-auto text-left my-[10px]">
                    Simple Integration
                  </p>
                </li>
              </ul>
            </div>

            {/* Right side */}
            <div className="flex flex-col items-start justify-center space-y-14">
              <div className="w-full border border-[#ffffff33] flex-initial mb-15 py-[45px] px-5">
                <h2 className="text-white mb-0 text-[35px] font-medium">
                  Front-end
                </h2>

                <p className="w-[320px] text-white mt-6 mb-[30px] font-light">
                  Dealing with parts of a user interface, the front-end
                  development needs efficient systems to build them up slowly.
                  What your users see, access and interact with is built by us
                  keeping in mind a combination of resources.
                  <strong>
                    <br />
                  </strong>
                </p>

                <div className="grid grid-cols-3 gap-y-3 gap-x-4 auto-rows-auto auto-cols-fr items-start mt-0">
                  <div className="flex flex-col justify-center items-center mr-5">
                    <div className="flex w-[90px] h-[90px] border border-[#888] rounded-[70px] justify-center items-center">
                      <img
                        src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620635fceaa8ca1aa1621cd1_node.svg"
                        loading="lazy"
                        width="40"
                        alt="img"
                      />
                    </div>
                    <div className="text-white mt-[10px] text-lg font-normal">
                      Node Js
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center mr-5">
                    <div className="flex w-[90px] h-[90px] border border-[#888] rounded-[70px] justify-center items-center">
                      <img
                        src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620635fcd1b3425f1cbfe235_angular.svg"
                        loading="lazy"
                        width="40"
                        alt="img"
                      />
                    </div>
                    <div className="text-white mt-[10px] text-lg font-normal">
                      Angular
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center mr-5">
                    <div className="flex w-[90px] h-[90px] border border-[#888] rounded-[70px] justify-center items-center">
                      <img
                        src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620635fc76d17c258e397b01_react.svg"
                        loading="lazy"
                        width="40"
                        alt="img"
                      />
                    </div>
                    <div className="text-white mt-[10px] text-lg font-normal">
                      React
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full border border-[#ffffff33] flex-initial mb-15 py-[45px] px-5">
                <h2 className="text-white mb-0 text-[35px] font-medium">
                  Back-end{" "}
                </h2>

                <p className="w-[320px] text-white mt-6 mb-[30px] font-light">
                  Delving deep into the machinery of each click, the back-end
                  systems make sure any website or software program accessed by
                  your users works smoothly. Offering the latest software, we
                  make sure to avoid all glitches.
                  <strong>
                    <br />
                  </strong>
                </p>

                <div className="grid grid-cols-3 gap-y-3 gap-x-4 auto-rows-auto auto-cols-fr items-start mt-0">
                  <div className="flex flex-col justify-center items-center mr-5">
                    <div className="flex w-[90px] h-[90px] border border-[#888] rounded-[70px] justify-center items-center text-white">
                      <img
                        src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620f786df19d030c2ad38711_cib_laravel.svg"
                        loading="lazy"
                        width="40"
                        alt="img"
                        className="invert"
                      />
                    </div>
                    <div className="text-white mt-[10px] text-lg font-normal">
                      Laravel
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center mr-5">
                    <div className="flex w-[90px] h-[90px] border border-[#888] rounded-[70px] justify-center items-center">
                      <img
                        src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620f786d85285d9062ed4aa0_la_node-js.svg"
                        loading="lazy"
                        width="40"
                        alt="img"
                        className="invert"
                      />
                    </div>
                    <div className="text-white mt-[10px] text-lg font-normal">
                      Node JS
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center mr-5">
                    <div className="flex w-[90px] h-[90px] border border-[#888] rounded-[70px] justify-center items-center">
                      <img
                        src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/6253b9ccb0f80c136425b17b_simple-icons_hasura.svg"
                        loading="lazy"
                        width="40"
                        alt="img"
                        className="invert"
                      />
                    </div>
                    <div className="text-white mt-[10px] text-lg font-normal">
                      Hasura
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyHolderCard;
