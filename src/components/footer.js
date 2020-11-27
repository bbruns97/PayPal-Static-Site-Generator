import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'
import GatsbyConfig from "../../gatsby-config"
import pplogo from "../assets/pp.png"
import sitelogo from "../images/logo.jpg"

var config = require('./headerFooterInformation.json');

const twitterLink = (
  <a href={config.twitterLink} alt="twitter link">
    
  </a>
)
const facebookLink = (
  <a href={config.facebookLink} alt="facebook link">
    
  </a>
)
const instagramLink = (
  <a href={config.instagramLink} alt="instagram link">
    
  </a>
)

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >

      
    <Container>
      <Grid stackable >
        <Grid.Row >
          <Grid.Column width={5}>
            <Header as="h4" content="CONTACT INFORMATION" style={{fontSize: 20}} />
            <List>
                <List.Item style={{marginBottom: 10}}>
                    <List.Icon name='marker' style={{fontSize: 16}}/>
                    <List.Content style={{color: "#777777", fontSize: 16}}>{config.address}</List.Content>
                </List.Item>
                <List.Item style={{marginBottom: 10}}>
                    <List.Icon name='phone' style={{fontSize: 16}} />
                    <List.Content style={{color: "#777777", fontSize: 16}}>{config.phoneNumber}</List.Content>
                </List.Item>
                <List.Item>
                     <List.Icon name='mail' style={{fontSize: 16}} />
                    <List.Content style={{color: "#777777", fontSize: 16}}>
                         <a href='mailto:mailto:john@example.com'>{config.email}</a>
                     </List.Content>
                 </List.Item>
            </List>
            <br></br>
          </Grid.Column>
          
          <Grid.Column width={5}>
            <Header as="h4" content="HOURS OF OPERATION" style={{fontSize: 20}} />
            <List>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Monday: {config.mondayHours}</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Tuesday: {config.tuesdayHours}</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Wednesday: {config.wednesdayHours}</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Thursday: {config.thursdayHours}</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Friday: {config.fridayHours}</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                  <List.Content style={{color: "#777777", fontSize: 16}}>Saturday: {config.saturdayHours}</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                  <List.Content style={{color: "#777777", fontSize: 16}}>Sunday: {config.sundayHours}</List.Content>
              </List.Item>
            </List>
            <br></br>
          </Grid.Column>
          
          <Grid.Column width={5}>
            <Header as="h4" style={{fontSize: 20}}>STAY CONNECTED</Header>
            <p style={{color: "#777777", fontSize: 16, marginBottom: 20}}>
              Follow us and connect on social media
            </p>
            <List horizontal style={{display: 'flex'}}>
              <a href={config.twitterLink} alt="twitter link">
                <List.Item
                icon="twitter"
                style={{display: 'flex', fontSize: 30, marginRight: 10, color: "#1DA1F2"}}
                content={twitterLink}
              />
              </a>
              <a href={config.instagramLink} alt="instagram link">
                <List.Item
                icon="instagram"
                style={{display: 'flex', fontSize: 30, marginRight: 10, color: "#bc2a8d"}}
                content={instagramLink}
              />
              </a>
              <a href={config.facebookLink} alt="facebook link">
                <List.Item
                icon="facebook"
                style={{display: 'flex', fontSize: 30, marginRight: 10, color: '#3b5998'}}
                content={facebookLink}
              />
              </a>
            </List>
            <br></br>
            <Header as="h4" style={{fontSize: 20}}>POWERED BY</Header>
            <img src={pplogo} style={{width: 70}}></img>
            <br></br>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
