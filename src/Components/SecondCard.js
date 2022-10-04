import Card from 'react-bootstrap/card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import secondcarddata from './SecondCardData';


const App=()=>{

 return (
    
<div className="secondcard-component">
        
     <div className="main-text">
        <h1>Transform Your Creation Process</h1>
        <p>With a new approach toordering content, you can now stop juggling multiple <br></br>
          documents and meetings and start publishing content faster and on demand.</p>
       </div>

       <div className="main-text1">
       <h1>Activate Your Business Growth With RetinkContent</h1>
        <p>Save time and maintain your brand identity within your budget range or <br></br>
          sign up for affordable plans and still access multiple content services like:</p>
        </div>
        <div className="check">
        <Row>
      {
      secondcarddata.map(element => {
                
        return (
       <Col md="4" sm="10" className="secondcard-group" >
      
       <Card className="secondcard">
        <div>
        <Card.Img className="secondcard-img" variant="top" src={element.logo} />
        </div>

        <Card.Body>
        <Card.Title className="secondcard-name">{element.Name}</Card.Title>
        <Card.Text className="secondcard-desc">{element.Description}</Card.Text>
        </Card.Body>
    </Card>
    
    </Col>

        );
      })
      }
      </Row>
      </div>
      </div>
    );
}

export default App;