import React, { Component } from 'react';
import { Container, Card, Row, Col, Nav, NavItem, NavLink, UncontrolledTooltip, Input, Label, Button, CardBody, Modal, ModalHeader, ModalBody} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import API from '../../api_test';
//import API from '../../api_mcx';

//import { MDBDataTable } from "mdbreact";



//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Dashboard extends Component {
  async table123(){
    
    var config = {
      method: 'get',
      url: 'getalphavantage/',
      
      
    };

    
    
    function setData(response) {
      console.log("this.state",this)
      
  }
     await  API(config)
     .then(response => this.resultData(response))
        .catch(function (error) {
          if(error.response){
              console.log('error msg ',error);
          //  setError({'name':error.response.data.message})
          }
  });
}

  

   resultData(response) {
    var test = {};
    var i=0;
    var one = response.data["Time Series (1min)"];
    
    console.log('one',one.length);
    var test = {}
    var i =0;
    for (let key in one) {
      

      for (let key2 in one[key]) {
        console.log("key"+key2, one[key][key2]);
        
        test[i] = one[key][key2];
        i++;

        for (let key3 in one[key]) {
          console.log("key"+key3, one[key][key3]);
          
          test[i] = one[key][key3];
          i++;
        }
      }

      

      
    }
    this.setState({response123:test})
    
   var rows =       [
     {
       checkbox:
                   <div className="custom-control custom-checkbox">
                       <Input type="checkbox" className="custom-control-input" id="ordercheck12"/>
                       <Label className="custom-control-label" htmlFor="ordercheck12">&nbsp;</Label>
                   </div>,
       id: <Link to="#" className="text-dark font-weight-bold">#NZ1563</Link>,
       date: "04 Apr, 2020",
       billingName: "Walter Brown",
       total: "$172",
       status : <div className="badge badge-soft-warning font-size-12">unpaid</div>,
       invoice : <Button type="button"
       color="primary" className="waves-effect waves-light"
      
     >
       Trade
   </Button>,
       action : <><Link to="#" className="mr-3 text-primary" id="edit12"><i className="mdi mdi-pencil font-size-18"></i></Link>
                   <UncontrolledTooltip placement="top" target="edit12">
                       Edit
                   </UncontrolledTooltip >
               <Link to="#" className="text-danger" id="delete12"><i className="mdi mdi-trash-can font-size-18"></i></Link>
                   <UncontrolledTooltip placement="top" target="delete12">
                       Delete
                   </UncontrolledTooltip >
       </>
     },
     
     
   ]
   var arr = {columns:this.state.columns,rows:rows}
   this.setState({data:arr})
  
  }
    constructor(props) {
        super(props);
        this.state={
           data : {
            columns: [
              {
                label: <div className="custom-control custom-checkbox"> 
                <Input type="checkbox" className="custom-control-input" id="ordercheck"/>
                <Label className="custom-control-label" htmlFor="ordercheck">&nbsp;</Label></div>,
                field: "checkbox",
                sort: "asc",
                width: 28
              },
              {
                label: "Name",
                field: "id",
                sort: "asc",
                width: 78
              },
             
              {
                // label: "OPEN",
                field: "invoice",
                sort: "asc",
                width: 110
              },
              {
                label: "Open",
                field: "id",
                sort: "asc",
                width: 78
              },
              {
                label: "LTP",
                field: "date",
                sort: "asc",
                width: 93
              },
              {
                label: "CHG",
                field: "billingName",
                sort: "asc",
                width: 109
              },
              {
                label: "HIGH",
                field: "total",
                sort: "asc",
                width: 48
              },
              {
                label: "LOW",
                field: "status",
                sort: "asc",
                width: 135
              },
              
              {
                label: "CLOSE",
                field: "action",
                sort: "asc",
                width: 120
              },
            ],
            rows:[]
        },
            visible: false,
            response123:[],
            response12:[],
      modal_standard: false,
      modal_large: false,
      modal_xlarge: false,
      modal_small: false,
      modal_center: false,
      modal_scroll: false,
      modal_static: false,
            breadcrumbItems : [
                { title : "ONYXTRADE", link : "#" },
                { title : "Stock", link : "#" },
            ],
           // activeTab: '1',
        }
        
        this.toggleTab = this.toggleTab.bind(this);
        this.tog_center = this.tog_center.bind(this);
    }
   
    
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    
    componentDidMount(){

      
       this.table123();
      
    }  
    

    tog_static() {
        this.setState(prevState => ({
          modal_static: !prevState.modal_static
        }));
        this.removeBodyCss();
      }
    
      tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
        this.removeBodyCss();
      }
      removeBodyCss() {
        document.body.classList.add("no_padding");
      }
    
      // tog_large() {
      //   this.setState(prevState => ({
      //     modal_large: !prevState.modal_large
      //   }));
      //   this.removeBodyCss();
      // }
      // tog_xlarge() {
      //   this.setState(prevState => ({
      //     modal_xlarge: !prevState.modal_xlarge
      //   }));
      //   this.removeBodyCss();
      // }
      // tog_small() {
      //   this.setState(prevState => ({
      //     modal_small: !prevState.modal_small
      //   }));
      //   this.removeBodyCss();
      // }
      tog_center() {
        this.setState(prevState => ({
          modal_center: !prevState.modal_center
        }));
        this.removeBodyCss();
      }
      tog_scroll() {
        this.setState(prevState => ({
          modal_scroll: !prevState.modal_scroll
        }));
        this.removeBodyCss();
      }
      show() {
        this.setState({ visible: true });
      }
      hide() {
        this.setState({ visible: false });
      }

    
    render()
     {
      
      
        
      
         return (
           
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Stock" breadcrumbItems={this.state.breadcrumbItems} />
                    
                        <Row>
                            <Col lg={12}>
                                <Card>
                                    <CardBody className="pt-0">
                                                                    
                                    <table id="simple-board" className="table table-dark">
                                          <thead>
                                            <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Open</th>
                                            <th scope="col">LTP</th>
                                            <th scope="col">CHG</th>
                                            <th scope="col">HIGH</th>
                                            <th scope="col">LOW</th>
                                            <th scope="col">CLOSE</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                          { Object.values(this.state.response123).map(bl => 
                    
                                          <tr>
                                            <td>{bl}</td>
                                            <td><Button type="button" color="primary" className="waves-effect waves-light"
                                            onClick={this.tog_center}>Trade</Button></td>
                                            <td>{bl}</td>
                                            <td>{bl}</td>
                                            <td>{bl}</td>
                                            <td>{bl}</td>
                                            <td>{bl}</td>
                                          </tr>
                  
                 
                 )}


                  
                                           
                                          </tbody>
                                        </table>
                                    
                                    
                                    {/* <table id="simple-board">
                                      <tr>
                                        <th>First</th>
                                        <th>second</th>
                                        <th>third</th>
                                      </tr>
                    <tbody>
                                        
                                    { Object.values(this.state.response123).map(bl => 
                    
                     <tr><td>{bl}</td></tr>
                   
                  )}
                  </tbody>
                  </table> */}
                       
               
                                
                                        
                                        
                                        <Modal
                          isOpen={this.state.modal_center}
                          toggle={this.tog_center}
                          centered={true}
                        >
                          <ModalHeader toggle={() => this.setState({ modal_center: false })}>
                          NICKEL21JUNFUT 
                          </ModalHeader>
                          <ModalBody>
                              

                          <div className="toggle-switch">
                                <input
                                type="checkbox"
                                className="toggle-switch-checkbox"
                                name="toggleSwitch"
                                id="toggleSwitch"
                                />
                                <label className="toggle-switch-label" htmlFor="toggleSwitch">
                                <span className="toggle-switch-inner" />
                                <span className="toggle-switch-switch" />
                                </label>
                            </div>

                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur ac,
                              vestibulum at eros.
                          </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque nisl
                              consectetur et. Vivamus sagittis lacus vel augue
                              laoreet rutrum faucibus dolor auctor.
                          </p>
                            <p className="mb-0">
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque nisl
                              consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                          </p>
                          </ModalBody>
                        </Modal>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;