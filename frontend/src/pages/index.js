import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/ui/layout"
import HeroBlock from "../components/Home/heroblock"
import PromotionalBlock from "../components/Home/promotionalblock"
import FeaturedProducts from "../components/Home/featuredProducts"
import MarketingButtons from "../components/Home/MarketingButtons"
import CallToAction from "../components/Home/callToAction"
const IndexPage = () => (
  <Layout>
    <HeroBlock />
    <PromotionalBlock />
    <FeaturedProducts />
    <MarketingButtons />
    <CallToAction />
  </Layout>
)

export default IndexPage
