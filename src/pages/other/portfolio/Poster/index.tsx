// component
import { Navbar3 } from 'components/navbars';
import { Footer1 } from 'components/footer';

import Hero from './Hero';
import Content from './Content';
import Testimonial from './Testimonials';

// dummy data
import { workImages } from './data';
import Navigation from './Navigation';

const Poster = () => {
    return (
        <>
            {/* header */}
            <div>
                <Navbar3 navClass="navbar-light" fixedWidth buttonClass="btn-secondary btn-sm"  />
                <Hero />
            </div>

            {/* content */}
            <Content workImages={workImages} />

            {/* testimonial */}

            {/* navigation */}
            <Navigation />

            {/* footer */}
            <Footer1 />
        </>
    );
};

export default Poster;
