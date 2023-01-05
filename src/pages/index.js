import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout'
import useSiteMetadata from '../hooks/use-siteMetadata'

const IndexPage = () => {
  const {title, description} = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Layout pageTitle="Home Page">
      </Layout>
    </>
  )
}

export default IndexPage