import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    )
    return (
        <div
            css={css`
      margin: 0 auto;
      max-width: 700px;
    `}
        >
            <Link to={`/`}>
                <h3
                    css={css`
          display: inline-block;
          font-style: normal;
        `}
                >
                    {data.site.siteMetadata.title}
      </h3>
            </Link>
            {children}
        </div>
        )
}