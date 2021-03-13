import React from "react"

import DefaultLayout from "../layouts/default"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <DefaultLayout>
  <meta http-equiv="REFRESH" content="5;url=https://rafterday.net">
    <SEO title="Not Found" />  
  <h1>-</h1>
    <p>why u see this messages? u will redirect in 5 second</p>
  </DefaultLayout>
)

export default NotFoundPage
