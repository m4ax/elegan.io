// components
import { Navbar3 } from 'components/navbars';
import { Hero5 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import ClientsReview from './ClientsReview';
import Features from './Features';
import Integrations from './Integration';
import Pricing from './Pricing';
import Footer from '../../../components/footer/Footer1';
import VideoFeature from './VideoFeature'
import Feature4 from './Feature4'
import Title from './title';
import Features3 from '../Saas/Features3';
import Importer from './importer';

import { useEffect } from 'react';

// data
import { integrations, planFeatures } from './data';


type Feature = {
    deviceIcon: string;
    deviceName: string;
}


const features: Feature[] = [
    {
        deviceIcon: 'monitor',
        deviceName: 'Windows',
    },
    {
        deviceIcon: 'airplay',
        deviceName: 'Mac',
    },
    {
        deviceIcon: 'server',
        deviceName: 'Browser',
    },
    {
        deviceIcon: 'smartphone',
        deviceName: 'Mobile',
    },
];

export { features };



const Startup = () => {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView();
          }
        }
      }, []);

    return (
        <>
            <div className="header-7">
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero5 />
            </div>

            {/* clients - reviews  */}
            <ClientsReview />

            {/* <Features /> */}

            <Title />

            {/* video feature */}

            <VideoFeature />

            {/* features */}

            <Importer />

            <Features3 />

            <Feature4  features={features}  />



            {/* integration */}

            <Integrations integrations={integrations} />



            {/* pricing */}
            <Pricing planFeatures={planFeatures} />

            {/* CTA - footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Startup;
