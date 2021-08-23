//import { red } from '@material-ui/core/colors';
import { Form, FormGroup, FormControl, ControlLabel, Button, HelpBlock, Icon } from 'rsuite';
import { Container, Header, Navbar, Content, FlexboxGrid, Panel, ButtonToolbar, Footer } from 'rsuite';

import './list.css';

export default function Login() {

    const logo2 = './cookbook2-2021.png'




    return (
        <>

            <container className="rescon3">

                <div className="show-fake-browser login-page">
                    <Container>
                        <Header>
                            <Navbar appearance="default" >
                                {/* <Navbar.Header ></Navbar.Header> */}
                                    <div className="rescon4">
                                    <div>
                                        <img src={logo2} className="App-logo" alt="logo" />
                                    </div>
                                    
                                    <div className="rescon4"> Khaled + Luis Top Recipies </div>
                                    </div>
                                    
                                
                            </Navbar>
                        </Header>
                        <Content>
                            {/* <FlexboxGrid justify="center"> */}
                                {/* <FlexboxGrid.Item colspan={12}> */}
                                    <Panel header={<h3>Login</h3>} bordered style={{ display: 'inline-block', width:'80vh' }} >
                                        <Form fluid>
                                            <FormGroup>
                                                <ControlLabel>Username or email address</ControlLabel>
                                                <FormControl name="name" />
                                            </FormGroup>
                                            <FormGroup>
                                                <ControlLabel>Password</ControlLabel>
                                                <FormControl name="password" type="password" />
                                            </FormGroup>
                                            <FormGroup>
                                                <ButtonToolbar>
                                                    <Button appearance="ghost">Sign in</Button>
                                                    <Button appearance="link">Forgot password?</Button>
                                                </ButtonToolbar>
                                            </FormGroup>
                                        </Form>
                                    </Panel>
                                {/* </FlexboxGrid.Item> */}
                            {/* </FlexboxGrid> */}
                        </Content>
                        <Footer><Icon icon="youtube-play" size="2x" />{'  '}<Icon icon="twitter" size="2x" />{'  '}<Icon icon="whatsapp" size="2x" />{'  '}<Icon icon="facebook-official" size="2x" /></Footer>
                    </Container>
                </div>


            </container>




        </>
    )

}