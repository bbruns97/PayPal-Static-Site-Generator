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

function test(){
  alert('changed');
}

export default ({ data }) => {


  
  


    const post = data.markdownRemark;

    var pricesString = ''
    
    for (var i in post.frontmatter.price )
    {
        pricesString = pricesString + post.frontmatter.options[i] +' = $' + post.frontmatter.price[i] + " ";
    }
    



    var pp_options = <PaypalComponent options={post.frontmatter.options} title={post.frontmatter.title} price={post.frontmatter.price} />
  

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

          <Grid.Column width={4}>
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
                      <Header as="h4" content="PRICE" style={{fontSize: 30}} />
                      <p>QUANTITY AND OPTION MAY AFFECT YOUR TOTAL</p>
                      <br></br>
                      <p style={{color: 'black', fontSize: 24}}><span style={{color: 'green'}}>$</span>{pricesString} <span style={{color: 'green'}}>USD</span></p>
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