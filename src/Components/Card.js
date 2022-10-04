import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import carddata from './CardData';


const App=()=>{
 return (
    <div className="card-component">
         <Row>
      {
      carddata.map(element => {
               
        return (
         <Col md="4" sm="10" className="card-group" >
       <Card className="card">
        <div className="card-img-par">
        <Card.Img className="card-img" variant="top" src={element.logo} />
        </div>

        <Card.Body className="card-body">
        <Card.Title className="card-name">{element.Name}</Card.Title>
        <Card.Text className="card-desc">{element.Description}</Card.Text>
        </Card.Body>
    </Card>
    </Col>
        );
      })
      }
      </Row>
    </div>
  );
}

export default App;