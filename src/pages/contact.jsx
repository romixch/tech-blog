import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'


const ContactPage = () => {
  const emailEncoded = 'cm9tYW4uc2NoYWxsZXJAZ21haWwuY29t'; // my email address encoded with function btoa() => spam secured
  const [email, setEmail] = useState(emailEncoded);
  useEffect(() => {
    setEmail(atob(emailEncoded));
  });

  return (
    <Layout>
      <main>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <h1>Contact me</h1>
        <p>
          You can reach me at <a href="https://www.twitter.com/romixch">Twitter</a>. Or you can simply send me an email to <a href={`mailto:${email}`}>{email}</a>.
        </p>
      </main>
    </Layout>
  )
}
export default ContactPage;
