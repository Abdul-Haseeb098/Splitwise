import React from 'react'
import './css/Footer_mini.css'
const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer_content" style={{paddingBottom:"100px"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul style={{marginBottom:"25px"}}>
                <li>Splitwise</li>
                <a href="#">About</a><br />
                <a href="#">Press</a><br />
                <a href="#">Blog</a><br />
                <a href="#">Jobs</a><br />
                <a href="#">Calculators</a><br />
                <a href="#">API</a><br />
              </ul>
              <ul style={{marginLeft:"32px",marginTop:"10px"}}>
                <li style={{color:"#F67240"}}>Account</li>
                <a href="#">Log in</a><br />
                <a href="#">Sign up</a><br />
                <a href="#">Reset password</a><br />
                <a href="#">Settings</a><br />
                <a href="#">Splitwise Pro</a><br />
                <a href="#">Splitwise Pay</a><br />
                <a href="#">Splitwise Card</a><br />
              </ul>
              <ul style={{marginLeft:"32px",marginBottom:"50px"}}>
                <li style={{color:"#373B3F"}}>More</li>
                <a href="#">Contact us</a><br />
                <a href="#">FAQ</a><br />
                <a href="#">Terms of Services</a><br />
                <a href="#">Privacy Policy</a><br />
                <div className="icons">
                  <a href="#">
                <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#">
                <i class="fa-brands fa-instagram"></i>
                </a>
                </div>
              </ul>
            </div>
            <div className="col-lg-6" style={{paddingLeft:"140px"}}>
              <div className="store_img">
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
    </>
  )
}

export default Footer
