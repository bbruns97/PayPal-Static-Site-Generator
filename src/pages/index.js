import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import styled from "styled-components"
import PaypalButton from "../components/paypalButton"
import ItemThumbnail from "../components/itemThumbnail"


const ThumbnailsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
`

export default ({ data }) => {
    console.log(data);
    return (
        <Layout>

            <ThumbnailsWrapper>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <ItemThumbnail key={node.fields.slug} link={node.fields.slug} heading={node.frontmatter.title} price={node.frontmatter.price} imageThumb={node.frontmatter.image.childImageSharp.fluid}/>

                    <label for="product_quantity">Quantity:</label>
                    <input id={"quantity_"+node.frontmatter.title} type="text" placeholder="Quantity" name="product_quantity" defaultValue={1}></input><br></br>

                    <label for="options_drop_down">Options: </label>
                    <select id="options_drop_down">
                      <option value="invalid_option">No Option</option>
                      {
                        (node.frontmatter.options).map((data) =>
                          <option value={data}>{data}</option>
                        )
                      }
                    </select>
                    
                    <div>
                      <PaypalButton price={node.frontmatter.price}/>
                    </div>
                </div>
                
            ))}
            </ThumbnailsWrapper>
        </Layout>
    )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            price
            options
            image{
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`