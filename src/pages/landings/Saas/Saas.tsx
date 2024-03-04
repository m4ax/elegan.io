// components
import { Navbar3 } from 'components/navbars';
import { Hero12 } from 'components/heros';
import BackToTop from 'components/BackToTop';
import { Footer1 } from 'components/footer';

import Features1 from './Features1';
import Features2 from './Features2';
import Features3 from './Features3';
import Clients from './Clients';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQs from './FAQs';

// dummy data
import { features, plans, features3 } from './data';
import Metrics from './Metrics';

const Saas = () => {
    return (
        <>
            <div className="header-2 primary">
            <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm" />

                <Hero12 />
            </div>

            {/* features */}
            <Features1 features={features} containerClass="position-relative overflow-hidden pt-lg-6 py-4 pb-lg-7" />

            <Features2 />



            {/* clients */}
            {/* <Clients /> */}

            {/* testimonials */}
            {/* <Testimonials /> */}

            <Metrics features={features3}  />

            <Features3 />

            {/* FAQs */}
            <FAQs />

            {/* footer */}
            <Footer1 />

            <BackToTop />
        </>
    );
};

export default Saas;
