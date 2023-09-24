import React from 'react';
import AppShell from 'components/AppShell';
import BlackHeader from 'components/BlackHeader';
import Service from 'components/Service';
import TechnologyHolderCard from 'components/TechnologyHolder';

const SERVICES = [
  {
    name: 'Mobile App Development',
    svgUrl: "https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62550dee24ff2ce291e53296_Mobilesvg.svg",
    className: "bg-[#ccfbc4]",
    serviceHeading: <div>Mobile App <br /> Development</div>,
    serviceDescription: "We create custom mobile applications using trusted UX for both iOS and Android.",
  },
  {
    name: "Website Developmemt",
    svgUrl: "https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62550dab70bc1b37fe601c4d_web.svg",
    className: "bg-[#cde1fb]",
    serviceHeading: <div>Website <br /> Development</div>,
    serviceDescription: "We build website applications that deliver speed, efficiency and results.",
  },
  {
    name: 'Product Design (UI/UX)',
    svgUrl: "https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62550daca3e08513d1280aca_uiux.svg",
    className: "bg-[#fcf6c7]",
    serviceHeading: <div> Product <br/> Design (UI/UX)</div>,
    serviceDescription: "We design robust, fast, scalable and extraordinary interfaces that make a remarkable impact.",
  },
  {
    name: 'Tech Consulting',
    svgUrl: "https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62550dac2b325206cd3ad454_tech.svg",
    className: "bg-[#fbcdcd]",
    serviceHeading: <div>Tech <br/> Consulting</div>,
    serviceDescription: "We support you by creating an outstanding product that meets the dynamic market needs.",
  },
];

function App() {
  return (
    <AppShell>
      <BlackHeader />
      <div className="columns-4 my-10 mx-12">
        {SERVICES?.map((service) => (
          <Service
            key={service?.name}
            svgUrl={service?.svgUrl}
            className={service?.className}
            serviceHeading={service?.serviceHeading}
            serviceDescription={service?.serviceDescription}
          />
        ))}
      </div>
      <TechnologyHolderCard />
    </AppShell>
  );
}

export default App;
