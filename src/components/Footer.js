import "../styles/general.css";
function Footer() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
      />
      <div className="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Not a</a>
                  </li>
                  <li>
                    <a href="#">Real</a>
                  </li>
                  <li>
                    <a href="#">Website</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Better</a>
                  </li>
                  <li>
                    <a href="#">Faster</a>
                  </li>
                  <li>
                    <a href="#">Stronger</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 item social">
                <a href="https://www.linkedin.com/in/robyn-danglos-850423146/">
                  <i className="icon ion-social-linkedin"></i>
                </a>
                <p className="copyright">
                  Robyn Danglos - Blog Poincaré © 2024
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default Footer;
