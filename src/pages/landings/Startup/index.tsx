// components
import { Navbar3 } from 'components/navbars';
import { Hero5 } from 'components/heros';
import BackToTop from 'components/BackToTop';

import ClientsReview from './ClientsReview';
import Features from './Features';
import Integrations from './Integration';
import Pricing from './Pricing';
import Footer from './Footer';
import VideoFeature from './VideoFeature'
import Feature4 from './Feature4'



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
    return (
        <>
            <div className="header-7">
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />
                <Hero5 />
            </div>

            {/* clients - reviews  */}
            <ClientsReview />

            <VideoFeature />

            {/* features */}
            <Features />

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
