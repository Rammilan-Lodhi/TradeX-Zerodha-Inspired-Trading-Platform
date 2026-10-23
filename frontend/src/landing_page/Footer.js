import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row footer-main'>
          <div className='col-lg-3 col-md-6 footer-brand'>
            <img
              src='/media/images/logo.svg'
              alt='Zerodha'
              className='footer-logo'
            />

            <p>© 2010 - 2026, Zerodha Broking Ltd.</p>
            <p>All rights reserved.</p>

            <div className='social-row'>
              <span>
                <i className='fa-brands fa-x-twitter'></i>
              </span>

              <span>
                <i className='fa-brands fa-facebook-f'></i>
              </span>

              <span>
                <i className='fa-brands fa-instagram'></i>
              </span>

              <span>
                <i className='fa-brands fa-linkedin-in'></i>
              </span>
            </div>

            <div className='social-divider'></div>

            <div className='second-social'>
              <span>
                <i className='fa-brands fa-youtube'></i>
              </span>

              <span>
                <i className='fa-brands fa-whatsapp'></i>
              </span>

              <span>
                <i className='fa-brands fa-telegram'></i>
              </span>
            </div>

            <div className='app-buttons'>
              <img
                src='/media/images/googlePlayBadge.svg'
                alt='Google Play'
                className='app-badge'
              />

              <img
                src='/media/images/appstoreBadge.svg'
                alt='App Store'
                className='app-badge'
              />
            </div>
          </div>

          {/* ================= ACCOUNT ================= */}

          <div className='col-lg-2 col-md-6 footer-column'>
            <h5>Account</h5>

            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Open Trading Account
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Individual Account
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Joint Account
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Corporate Account
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Equity Trading
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Demat Services
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Add Funds
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Margin Trading
              </a>
            </p>
          </div>

          <div className='col-lg-2 col-md-6 footer-column'>
            <h5>Support</h5>

            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Help Center
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Customer Service
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Frequently Asked Questions
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Raise a Ticket
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Track Requests
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Report an Issue
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Trading Guides
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Downloads &amp; Resources
              </a>
            </p>
          </div>

          <div className='col-lg-2 col-md-6 footer-column'>
            <h5>Company</h5>

            <p>
              <a href='#' className='text-decoration-none text-muted'>
                About Us
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Our Mission
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Leadership Team
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Careers
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                News &amp; Updates
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Technology
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Developer Resources
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Partner With Us
              </a>
            </p>
          </div>

          <div className='col-lg-2 col-md-6 footer-column'>
            <h5>Quick Links</h5>

            <p>
              <a href='#' className='text-decoration-none text-muted'>
                IPO Dashboard
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Pricing &amp; Charges
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Trading Holidays
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Market News
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Investment Calculators
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Market Overview
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Industry Insights
              </a>
            </p>
            <p>
              <a href='#' className='text-decoration-none text-muted'>
                Live Market Trends
              </a>
            </p>
          </div>
        </div>

        <hr className='footer-divider' />

        <div className='disclaimer'>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI – SEBI
            Registration no.: INZ00031633 CDSL/NSDL: Depository services through
            Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{' '}
            <a href='/'>NSE broker factsheet</a>
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary."
          </p>

          <p>
            Dear Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account.
          </p>

          <p>
            As a business we don't give stock tips, and have not authorized
            anyone to trade on behalf of others. If you find anyone claiming to
            be part of Zerodha and offering such services, please{' '}
            <a href='/'>create a ticket here</a>.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tactacial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ00031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>

        {/* ================= BOTTOM LINKS ================= */}
        <div className='bottom-links'>
          <a href='/'>NSE</a>
          <a href='/'>BSE</a>
          <a href='/'>MCX</a>
          <a href='/'>MSEI</a>
          <a href='/'>Terms &amp; conditions</a>
          <a href='/'>Policies &amp; procedures</a>
          <a href='/'>Privacy policy</a>
          <a href='/'>Disclosure</a>
          <a href='/'>For investor's attention</a>
          <a href='/'>Investor charter</a>
          <a href='/'>Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
