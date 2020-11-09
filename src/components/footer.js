import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'
import GatsbyConfig from "../../gatsby-config"
import pplogo from "../assets/pp.png"
import sitelogo from "../images/logo.jpg"

const twitterLink = (
  <a href={GatsbyConfig.siteMetadata.twitterLink} alt="twitter link">
    
  </a>
)
const facebookLink = (
  <a href={GatsbyConfig.siteMetadata.facebookLink} alt="facebook link">
    
  </a>
)
const instagramLink = (
  <a href={GatsbyConfig.siteMetadata.instagramLink} alt="instagram link">
    
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
                    <List.Content style={{color: "#777777", fontSize: 16}}>{GatsbyConfig.siteMetadata.address}</List.Content>
                </List.Item>
                <List.Item style={{marginBottom: 10}}>
                    <List.Icon name='phone' style={{fontSize: 16}} />
                    <List.Content style={{color: "#777777", fontSize: 16}}>{GatsbyConfig.siteMetadata.phoneNumber}</List.Content>
                </List.Item>
                <List.Item>
                     <List.Icon name='mail' style={{fontSize: 16}} />
                    <List.Content style={{color: "#777777", fontSize: 16}}>
                         <a href='mailto:mailto:john@example.com'>{GatsbyConfig.siteMetadata.email}</a>
                     </List.Content>
                 </List.Item>
            </List>
            <br></br>
          </Grid.Column>
          
          <Grid.Column width={5}>
            <Header as="h4" content="HOURS OF OPERATION" style={{fontSize: 20}} />
            <List>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Monday: Closed</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Tuesday: 5:00 AM - 4:30 PM</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Wednesday: 5:00 AM - 4:30 PM</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Thursday: 5:00 AM - 4:30 PM</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                <List.Content style={{color: "#777777", fontSize: 16}}>Friday: 5:00 AM - 4:30 PM</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                  <List.Content style={{color: "#777777", fontSize: 16}}>Saturday: 7:00 AM - 2:00 PM</List.Content>
              </List.Item>
              <List.Item style={{marginBottom: 10}}>
                  <List.Content style={{color: "#777777", fontSize: 16}}>Sunday: 7:00 AM - 2:00 PM</List.Content>
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
              <a href={GatsbyConfig.siteMetadata.twitterLink} alt="twitter link">
                <List.Item
                icon="twitter"
                style={{display: 'flex', fontSize: 30, marginRight: 10, color: "#1DA1F2"}}
                content={twitterLink}
              />
              </a>
              <a href={GatsbyConfig.siteMetadata.instagramLink} alt="instagram link">
                <List.Item
                icon="instagram"
                style={{display: 'flex', fontSize: 30, marginRight: 10, color: "#bc2a8d"}}
                content={instagramLink}
              />
              </a>
              <a href={GatsbyConfig.siteMetadata.facebookLink} alt="facebook link">
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
