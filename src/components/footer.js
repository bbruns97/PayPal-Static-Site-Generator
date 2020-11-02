import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'
import GatsbyConfig from "../../gatsby-config"

const twitterLink = (
  <a href={GatsbyConfig.siteMetadata.twitterLink} alt="twitter link">
    Twitter
  </a>
)
const facebookLink = (
  <a href={GatsbyConfig.siteMetadata.facebookLink} alt="facebook link">
    Facebook
  </a>
)
const instagramLink = (
  <a href={GatsbyConfig.siteMetadata.instagramLink} alt="instagram link">
    Instagram
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
            <Header as="h4" content="Contact Information" />
            <List>
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>{GatsbyConfig.siteMetadata.address}</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='phone' />
                    <List.Content>{GatsbyConfig.siteMetadata.phoneNumber}</List.Content>
                </List.Item>
                <List.Item>
                     <List.Icon name='mail' />
                    <List.Content>
                         <a href='mailto:mailto:john@example.com'>{GatsbyConfig.siteMetadata.email}</a>
                     </List.Content>
                 </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Hours of Operation" />
            <List>
              <List.Item>
                <List.Content><i>Mon</i>: Closed</List.Content>
              </List.Item>
              <List.Item>
                <List.Content><i>Tues</i>: 5:00 AM - 4:30 PM</List.Content>
              </List.Item>
              <List.Item>
                <List.Content><i>Wed</i>: 5:00 AM - 4:30 PM</List.Content>
              </List.Item>
              <List.Item>
                <List.Content><i>Thurs</i>: 5:00 AM - 4:30 PM</List.Content>
              </List.Item>
              <List.Item>
                <List.Content><i>Fri</i>: 5:00 AM - 4:30 PM</List.Content>
              </List.Item>
              <List.Item>
                  <List.Content><i>Sat</i>: 7:00 AM - 2:00 PM</List.Content>
              </List.Item>
              <List.Item>
                  <List.Content><i>Sun</i>: 7:00 AM - 2:00 PM</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4">Stay in touch</Header>
            <p>
              Follow us and connect on social media
            </p>
            <List horizontal style={{display: 'flex'}}>
              <List.Item
                icon="twitter"
                style={{display: 'flex'}}
                content={twitterLink}
              />
              <List.Item
                icon="facebook"
                style={{display: 'flex'}}
                content={facebookLink}
              />
              <List.Item
                icon="instagram"
                style={{display: 'flex'}}
                content={instagramLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
