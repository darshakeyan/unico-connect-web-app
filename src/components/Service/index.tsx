import Button, { Size, Variant } from 'components/Button';
import Card from 'components/Card';
import React from 'react';

type ServiceProp = {
  svgUrl:string,
  className: string;
  serviceHeading: React.ReactElement,
  serviceDescription: string
}

const Service : React.FC<ServiceProp> = ({svgUrl, className, serviceHeading, serviceDescription}) => {
    return (
      <Card
        className={` w-full gap-x-4 min-h-[460px] gap-y-[15px] flex flex-col items-stretch py-[10px] px-5 relative overflow-hidden space-y-4`}
        bgColor={className}
      >
        <div className="bg-[#f1f1f1] w-[130px] h-[130px] rounded-full flex justify-center items-center">
          <img src={svgUrl} loading="lazy" width="38" height="60" alt="img" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-medium ">{serviceHeading}</h3>
            <div className="min-h-[130px] mt-[14px] mr-[15px] text-base font-normal">
              {serviceDescription}
            </div>
            <Button
              label={"KNOW MORE"}
              className="bg-black text-sm text-white hover:bg-blue-500 mt-5"
              variant={Variant.Primary}
              size={Size.Large}
            />
          </div>
        </div>
      </Card>
    );
}


export default Service;