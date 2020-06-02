import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'


const ContactMe = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Don't be shy and contact us!!</h1>
               
            </Layout>
        </div>
    )
}

export default ContactMe