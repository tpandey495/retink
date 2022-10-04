import logo from '../Assets/img/logo.svg';
import Retink from '../Assets/img/Retink.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header=()=>{
return(
    <div className="Header">
       <div className="logo">
        <img src={logo} className="logo"/>
       </div>
       
       <Row>
        <Col md="5" sm="12">
   
     <div className="sub-text">Get Advanced AI+
        Expert Created <span className="cl">Logo</span>
       </div>
    
    <div className="rem-text">
       <p>Boost your sales <span className="cl">10x faster</span> with content customized by our <br></br> 
        unique partnership of <span className="cl">human creativity and AI optimization.</span></p>
      <h1> <span className="cl">Sign Up for The BETA!</span></h1>
      
      <h6><span className="bord">Business Name</span> would like a beta invite sent to <span className="bord"> @gmai address</span> when  it's ready!</h6>

      <div className="btn-not">
        <button className="btn1">Notify Me</button>
        <button className="btn2"><u>Sign Up as a freelance partner</u></button>
      </div>
      </div>
</Col>
       
   <Col md="4" sm="10">
    <div className="svg-img">
      <img src={Retink} />
    </div>  
   </Col>
        
    </Row>

    </div>
)
};

export default Header;