import * as React from 'react'
import Layout from '../components/layout/layout'

// const jsdom = require('jsdom');
// let $;

// jsdom.env('<html></html>', function (error, window) {
//     if (error) {
//         // handle this somehow
//     } else {
//         $ = require('jQuery')(jsdom().parentWindow);
//         // now you have it...
//     }
// });

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
    </Layout>
  )
}

export default IndexPage