import logo from '../Assets/img/logo.svg';

const App=()=>{
    return (
<div className="">
      
      <footer class="footer-distributed">
           <div class="footer-left">
               <h3><img src={logo} /></h3>
                 <p class="footer-links">
					<a href="#">Home</a><br></br>
					<a href="#">Blog</a>
				</p>
			</div>

			<div class="footer-center">
                <div>
					<i class="fa fa-map-marker"></i>
					<p>Get Early Access</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>Provided Feedback</p>
				</div>
                </div>

			<div class="footer-right">
                <p class="footer-company-about">
					<span>Connect with Us</span>
				</p>

				<div class="footer-icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
			    <a href="#"><i class="fa fa-twitter"></i></a>
				<a href="#"><i class="fa fa-linkedin"></i></a>
				<a href="#"><i class="fa fa-github"></i></a>
                </div>
        </div>
   </footer>
        </div>
)
}

export default App;