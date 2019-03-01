import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

//import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import canvg from 'canvg';
//import ReactDOMServer from 'react-dom/server';

class App extends Component {
    resume;  
    constructor() {
        super();
       // this.iconsToConvert = [
          //  {
          //      icon: faGithub,
            //    alt: 'github icon'
           // },
           // {
            //    icon: faMedium,
            //    alt: 'medium icon'
          //  }
     //   ]
     //   this.canvLoaded = false;
    }

    exportPDF = () => {
        this.resume.save();       
    }

  /*  convertSvgToImage = (arr) => {
        let canv = this.refs.canvas;
        if (!this.canvLoaded) {
            this.canvLoaded = true;
            canv.getContext("2d");
            arr.forEach((d, i) => {
                let htmlString = ReactDOMServer.renderToStaticMarkup(
                    <FontAwesomeIcon icon={d.icon} size={"3x"} style={{ color: '#005696', height: '500px', width: '500px' }} />
                );
                canvg(canv, htmlString);
                d.icon = canv.toDataURL("image/png");
            });
            this.setState({});
        }
    }*/

    componentDidMount() {
      //  this.convertSvgToImage(this.iconsToConvert);
    }

    render() {
        return (
         <div style={{ height: '100vh', width: '100vw', paddingTop: 30, backgroundColor: 'gray' }}>
            {!this.canvLoaded && <canvas ref="canvas" style={{ display: 'none' }}>
            </canvas>}                
           <div style={{ textAlign: 'center', marginBottom: 10 }}><button onClick={this.exportPDF} style={{ margin: 'auto' }}>print</button></div>
           <PDFExport paperSize={'Letter'}
                fileName="___bill.pdf"
                title=""
                subject=""
                keywords=""
                ref={(r) => this.resume = r}>
                <div style={{
                    height: 792, width: 612, padding: 'none',
                    backgroundColor: 'white',boxShadow: '5px 5px 5px black',
                    margin: 'auto', overflowX: 'hidden',
                        overflowY: 'hidden'
                    }}>Hi  ,     This is a Wonderful day!!! 
                    <br></br>
                    <br></br>
                    <div>     
                        <Row> 
                            <title>AutoSplash Car Wash</title>      
                        <Table style={{ border: "3", padding: "5",textAlign: "left",width:"100%"}}>    
                        <thead>                  
                        <tr>
                        <th scope="col">Greeter:jhon</th>
                        <th scope="col"> Empid:8736 </th>
                        </tr>                 
                        <tr>
                        <th scope="col"> shif:2 </th>
                        <th scope="col"> 03/01/2019  </th>
                        <th scope="col"> 10.30AM </th>
                        </tr>                        
                        <tr style={{borderBottom:"100"}}>
                        <th scope="col">work order #092888 </th>
                        <th scope="col"> Empid:8736 </th>
                        <th scope="col"> Invoice #23309765</th>
                        </tr>
                        </thead>   
                        <hr/>
                        <tr>    
                        <th scope="col"> Service</th>
                        <th scope="col">Amount</th>          
                        </tr>  <tbody>
                        <tr>
                          <td>Quick Full Service</td>
                          <td>$20.00</td>
                        </tr>    
                        <tr>
                          <td>Super Wash</td>
                          <td>$10.00</td>
                         </tr>    
                         <tr>
                           <td>Quick Full Service Discount</td>
                           <td>-$10.00</td>
                         </tr>   
                         </tbody> 
                         <br/>
                         <br/>
                         <br/>
                         <hr></hr>  
                         <tr><th>Total</th>
                         <td>$20.0</td></tr>  
                         <hr></hr>
                         <tr> <th>Paid</th>
                         <td>$20.0</td></tr>     
                         <hr></hr>   
                        </Table>  
                        </Row>                     
                    </div>                               
                    </div>
                </PDFExport>
            </div>
        );
    }
}

export default App;
//{this.canvLoaded && this.iconsToConvert.map((iconObject, index) => {
  //  return <img src={iconObject.icon} key={'img-' + index} alt={iconObject.alt} style={{ height: 25, width: 25 }} />
//})}