import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter  className='myFooter container-fluid text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks :</span>
        </div>

        <div className='iconFooter'>
          <a href='' className='me-4 '>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 '>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 '>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 '>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 '>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 '>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Market day
              </h6>
              <p>
                <a href='#!' className='text-reset'>
                Track orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Join Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Contact us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Who are we?
                </a>
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Our advice
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                The most popular product categories React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Our comparisons
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Our brands
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
            
            <h6 className='text-uppercase fw-bold mb-4'><span><i className="fas fa-lock mx-2"></i></span>Secure Payement</h6>
            
              <p>
                <div  className='text-reset'>
                <img src="/images/visa.svg" />
                <img src="/images/paypal.svg" />
                <img src="/images/mastercard.svg" />
                </div>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Tunisia, TN 10012, TN
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                contact@market-day.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='mycopyRight text-center p-4' >
        © 2022 Copyright:
        <a className='navbar-brand' href=''>
          Market Day
        </a>
      </div>
    </MDBFooter>
  );
}