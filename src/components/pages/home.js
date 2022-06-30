import React from 'react';
import SliderMain from '../components/SliderMain';
import FeatureBox from '../components/FeatureBox';
import CarouselCollection from '../components/CarouselCollection';
import CarouselNew from '../components/CarouselNew';
import AuthorList from '../components/authorList';
import Catgor from '../components/Catgor';
import Footer from '../components/footer';
import Wallet from "../components/wallet";
import WhyUs from "../components/whyus";


const home= () => (
  <div>
      <section className="jumbotron breadcumb no-bg h-vh" style={{backgroundImage: `url(${'./img/bg-shape-1.jpg'})`}}>
         <SliderMain/>
      </section>

      <section className='container no-top no-bottom'>

          <div className='row'>
              <div className='col-lg-12'>
                  <div className='text-center'>
                      <h2>Why Us</h2>
                      <div className="small-border"></div>
                  </div>
              </div>
              <div className='col-lg-12'>
                  <WhyUs/>
              </div>
          </div>
      </section>



      <section className='container'>
          <div className='row'>
              <div className='col-lg-12'>
                  <div className='text-center'>
                      <h2>Browse by category</h2>
                      <div className="small-border"></div>
                  </div>
              </div>
          </div>
          <Catgor/>
      </section>

      <section className='container no-bottom'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <h2>Hot Collections</h2>
                <span>You can make your collections public and the most popular collections will be recommended to everyone</span>
              <div className="small-border"></div>
            </div>
          </div>
          <div className='col-lg-12'>
            <CarouselCollection/>
          </div>
        </div>
      </section>


    <Footer />

  </div>
);
export default home;