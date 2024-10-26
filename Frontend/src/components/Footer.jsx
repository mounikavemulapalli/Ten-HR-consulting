import React from "react";
import "./Footer.css";
import "./PrivacyPolicy";
import "./FAQ/FAQSection";
import "./FAQ/FAQItem";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = (serviceName) => {
    console.log(`${serviceName} clicked`);
    // Add any additional logic here, such as navigation or tracking
  };

  return (
    <>
      <div id='footer'>
        <div className='Footer_info'>
          <h2>TEN-HR-Consulting</h2>
          <p>
            Our expertise lies in assisting small to medium-sized enterprises in
            adhering to Indian labour rules and regulations while optimising
            their human resources processes.
          </p>
          <p>New Delhi, India</p>
        </div>

        <div id='footer_link'>
          <div className='footer_links1'>
            <ul>
              <h3>Company</h3>
              <Link to='/FAQ'>Frequently Asked Questions</Link>

              <li>
                <a href='/aboutUs'>About TEN HR Consulting</a>
              </li>
              <li>
                <a href='#'>Terms of Service</a>
              </li>
              <li>
                <a href='/privacy-policy'>Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className='footer_links2'>
            <ul>
              <h3>Services</h3>
              <li>
                <a
                  href='/services/peo&eor'
                  onClick={(event) => {
                    event.preventDefault();
                    handleClick("PEO & EoR");
                    window.location.href = "/services/peo&eor"; // Manually set the location if needed
                  }}
                >
                  PEO & EoR
                </a>
              </li>
              <li>
                <a
                  href='/services/recruitment'
                  onClick={() => handleClick("Recruitment")}
                >
                  Recruitment
                </a>
              </li>
              <li>
                <a
                  href='/services/hrConsulting'
                  onClick={() => handleClick("HR Consulting")}
                >
                  HR Consulting
                </a>
              </li>
              <li>
                <a
                  href='/services/payrollProcessing'
                  onClick={() => handleClick("Payroll Processing")}
                >
                  Payroll Processing
                </a>
              </li>
              <li>
                <a
                  href='/services/managedServices'
                  onClick={() => handleClick("Managed Services")}
                >
                  Managed Services
                </a>
              </li>
            </ul>
          </div>

          <div className='footer_links3'>
            <ul>
              <h3>Contact</h3>
              <li>
                <a href='mailto:hr@entrepreneurshipnetwork.net'>
                  hr@entrepreneurshipnetwork.net
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/company/ten-hr-consulting/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Follow Our LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
