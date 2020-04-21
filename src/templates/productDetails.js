import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image";
import styled from "styled-components"
import PaypalButton from "../components/paypalButton"
import ItemThumbnail from "../components/itemThumbnail"

const DetailImgWrapper = styled.div`
    width: 60%;
`

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <DetailImgWrapper>
                  <Img class="product_details_img" fluid={post.frontmatter.image.childImageSharp.fluid} />
                </DetailImgWrapper>
                <p>{post.frontmatter.price}</p>
                {post.frontmatter.active == true &&
                    <div>
                        <label for="product_quantity">Quantity:</label>
                        <input id={"quantity_" + post.frontmatter.title} type="text" placeholder="Quantity" name="product_quantity" defaultValue={1}></input><br></br>

                        <label for="options_drop_down">Options:</label>
                        <select id="options_drop_down">
                            <option value="invalid_option">Select Option</option>
                            {
                                (post.frontmatter.options).map((data) =>
                                    <option value={data}>{data}</option>
                                )
                            }
                        </select>

                        <div>
                            <PaypalButton price={post.frontmatter.price} />
                        </div>
                    </div>
                }
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        image{
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
      }
    }
  }
`