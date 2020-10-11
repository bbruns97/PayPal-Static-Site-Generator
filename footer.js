import React from 'react'
import {Link} from 'gatsby'
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'

const twitterLink = (
  <a href="https://twitter.com/parmsang" alt="twitter link">
    Twitter
  </a>
)
const facebookLink = (
  <a href="https://facebook.com/" alt="facebook link">
    Facebook
  </a>
)
const instagramLink = (
  <a href="https://instagram.com/" alt="instagram link">
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
                    <List.Content>9852 N Acme Way Tempe, AZ 85281</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='phone' />
                    <List.Content>(480)-453-8754</List.Content>
                </List.Item>
                <List.Item>
                     <List.Icon name='mail' />
                    <List.Content>
                         <a href='mailto:mailto:john@example.com'>bakery@example.com</a>
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
                <List.Content><i>Tues-Fri</i>: 5:00 AM - 4:30 PM</List.Content>
              </List.Item>
              <List.Item>
                  <List.Content><i>Sat-Sun</i>: 7:00 AM - 2:00 PM</List.Content>
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