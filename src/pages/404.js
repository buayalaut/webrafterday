import React from "react"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <DefaultLayout>
    <SEO title="Not Found" />
    <h1>-</h1>
    <p>why u see this messages? back to home</p>
  </DefaultLayout>
)

export default NotFoundPage
