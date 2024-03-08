// component
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';

import Hero from './Hero';
import Content from './Content';
import Testimonial from './Testimonials';

// dummy data
import { workImages } from './data';
import Navigation from './Navigation';

const PortfolioItem = () => {
    return (
        <>
            {/* header */}
            <div>
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-outline-secondary btn-sm" />
                <Hero />
            </div>

            {/* content */}
            <Content workImages={workImages} />

            {/* testimonial */}
            <Testimonial />

            {/* navigation */}
            <Navigation />

            {/* footer */}
            <Footer1 />
        </>
    );
};

export default PortfolioItem;
