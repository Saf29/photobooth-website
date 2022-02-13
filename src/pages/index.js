import * as React from "react"
import Content from "../components/Content"
import Email from "../components/Email"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Content heading="Our Content"/>
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
