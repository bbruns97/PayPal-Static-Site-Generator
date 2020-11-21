import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import styled from "styled-components"
import PaypalComponent from "../components/paypalCheckoutOptions"
import {Segment, Container, Grid, List, Header} from 'semantic-ui-react'


const DetailImgWrapper = styled.div`
    width: 60%;
`

export default ({ data }) => {

    

    const post = data.markdownRemark;

    var pricesString = ''
    
    for (var i in post.frontmatter.price )
    {
        pricesString = pricesString + post.frontmatter.options[i] +' = $' + post.frontmatter.price[i] + " ";
    }

    var pp_options = <PaypalComponent options={post.frontmatter.options} title={post.frontmatter.title} price={post.frontmatter.price} imageThumb = {post.frontmatter.image.childImageSharp.fluid} />
    
    var i = -1

    function increaseCounter() {
      i = i + 1
    }

    return (
      
<Layout>
  <div>

    <Container style={{width: "90%", margin: "50px auto", fontFamily: "sans-serif"}}>
      <Grid stackable >
        <Grid.Row >

          <Grid.Column width={6}>
            <List>
                <List.Item>
                    <List.Content>
                      <Img class="product_details_img" fluid={post.frontmatter.image.childImageSharp.fluid} style={{borderRadius: 20, border: "2px solid lightgray", width: "100%", maxHeight: 500, objectFit: "contain"}} />
                    </List.Content>
                </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={5}>
            <List>
                <List.Item>
                    <List.Content>
                      <Header as="h4" content={post.frontmatter.title} style={{fontSize: 30}} />
                      <br></br>
                      <div style={{color: "#444", fontSize: 18}} dangerouslySetInnerHTML={{ __html: post.html }} />
                    </List.Content>
                </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={5}>
            <List>
                <List.Item>
                    <List.Content>
                      <Header as="h4" content="CUSTOMIZE" style={{fontSize: 30}} />
                      <br></br>
                      <br></br>
                      {post.frontmatter.active == true &&
                        pp_options
                      }
                      <br></br>
                      <br></br>
                      <Header as="h4" content="OPTIONS AND PRICES" style={{fontSize: 30}} />
                      <p>QUANTITY AND OPTIONS MAY AFFECT YOUR TOTAL</p>
                      <br></br>
                      <table style={{fontSize: '16px'}}>
                        <tr>
                          <th style={{backgroundColor: 'black', color: 'white', fontWeight: 'normal', width: '300px', padding: '10px'}}>Option</th>
                          <th style={{backgroundColor: 'black', color: 'white', fontWeight: 'normal', width: '150px', padding: '10px'}}>Price</th>
                        </tr>
                        {
                          (post.frontmatter.options).map((data) =>
                          
                            <tr onLoad={increaseCounter()} style={{}}>
                              <td style={{textAlign: 'center', padding: '10px', backgroundColor: "#EEE"}}>{data}</td>
                              <td style={{textAlign: 'center', padding: '10px', backgroundColor: "#EEE"}}>${post.frontmatter.price[i].toFixed(2)}</td>
                            </tr>
                          )
                        }
                      </table>
                    </List.Content>
                </List.Item>
            </List>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Container>
  </div>
</Layout>
)
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        price
        options
        active
        image{
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
      }
    }
  }
`
/*

*/