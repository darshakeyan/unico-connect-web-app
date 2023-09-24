import React from 'react';
import './index.css';
import Button, { Size, Variant } from 'components/Button';

type BlackHeaderProp = {

}

const BlackHeader : React.FC<BlackHeaderProp> = ({}) => {
    return (
        <div className='bg-black'>
            <div className='py-12 overflow-visible my-auto'>
                <div className='text-white flex flex-col justify-between items-center'>

                    <h1 className='w-4/5 text-center mt-4 mx-auto font-sans font-bold text-[45px]'>
                        <span className='text-[#ffffff80]'>Transform your Ideas</span>
                         {' '}into Stunning Products with Unico's Expert Team
                    </h1>

                    <p className='w-2/5 text-white text-xl text-center mt-10'>Build, Launch, and Scale your Products with Unmatched Efficiency</p>

                    <Button label={'GET STARTED'} className='bg-white text-sm text-black hover:bg-blue-500 mt-5' variant={Variant.Primary} size={Size.Large} />

                    <div className='w-full grid grid-cols-3 mt-10 gap-x-4 gap-y-4 px-12'>

                        <div className='text-center pt-5 px-[10px] pb-10'>
                            <div className='flex justify-center'>
                               <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a7fa93d52282e9c85b3_Group%20289531.svg" loading="lazy" width="45" height="45" alt="icon-mobile" />
                            </div>
                            <div className='h-[70px] border border-[#ffffff33] rounded-full flex justify-center items-center mt-5 p-2'>
                                <div className='text-base'>Top Mobile App Developers</div>
                            </div>
                        </div>

                        <div className='text-center pt-5 px-[10px] pb-10'>
                            <div className='flex justify-center'>
                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a820d72f61b1a74629c_Group%20289530.svg" loading="lazy" width="45" height="45" alt="icon-mobile" />
                            </div>
                            <div className='h-[70px] border border-[#ffffff33] rounded-full flex justify-center items-center mt-5 p-2'>
                                <div className='text-base'>Expert in No code Web Development</div>
                            </div>
                        </div>

                        <div className='text-center pt-5 px-[10px] pb-10'>
                            <div className='flex justify-center'>
                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a826201b89f5f3a5cc6_Group%20289529.svg" loading="lazy" width="45" height="45" alt="icon-mobile" />
                            </div>
                            <div className='h-[70px] border border-[#ffffff33] rounded-full flex justify-center items-center mt-5 p-2'>
                                <div className='text-base'>Top Design Agency</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default BlackHeader;