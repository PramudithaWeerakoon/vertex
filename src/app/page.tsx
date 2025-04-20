'use client';
import HomepageAboutUs from '@/components/Homepage/AboutUs';
import HomepageBanner from '@/components/Homepage/Banner/Banner';
import ContactUsForm from '@/components/Homepage/ContactUs/ContactUsForm';
import HomepageExamples from '@/components/Homepage/Examples';
import HomepageFooter from '@/components/Homepage/Footer';
import HomepageHeader from '@/components/Homepage/Header';
import HomepageReviews from '@/components/Homepage/Reviews';
import HomepageTechnologies from '@/components/Homepage/Technologies';
import '@/components/Homepage/styles/spotlights.css';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      {/* Schema.org Organization & LocalBusiness markup */}
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://vertex-software-enterprise.com/#organization',
                'name': 'Vertex Software Enterprise',
                'url': 'https://vertex-software-enterprise.com',
                'logo': {
                  '@type': 'ImageObject',
                  'url': 'https://vertex-software-enterprise.com/assets/logo.png'
                },
                'description': 'Vertex Software Enterprise delivers custom software solutions, web applications, and e-commerce platforms with cutting-edge technologies.',
                'sameAs': [
                  'https://www.instagram.com/vertex_software_enterprise/',
                  'https://www.linkedin.com/company/vertex-software-enterprise/',
                  'https://web.facebook.com/profile.php?id=61575011651686&mibextid=ZbWKwL&_rdc=1&_rdr#'
                ]
              },
              {
                '@type': 'LocalBusiness',
                '@id': 'https://vertex-software-enterprise.com/#business',
                'name': 'Vertex Software Enterprise',
                'url': 'https://vertex-software-enterprise.com',
                'telephone': '+94 77 520 6659',
                'email': 'Contact@vertex-software-enterprise.com',
                'priceRange': '$$',
                'description': 'Custom software development services specializing in web applications, e-commerce platforms, and business solutions.',
                'image': 'https://vertex-software-enterprise.com/assets/logo.png',
                'serviceArea': 'Global',
                'parentOrganization': {
                  '@id': 'https://vertex-software-enterprise.com/#organization'
                }
              },
              {
                '@type': 'WebSite',
                '@id': 'https://vertex-software-enterprise.com/#website',
                'url': 'https://vertex-software-enterprise.com',
                'name': 'Vertex Software Enterprise Solutions',
                'description': 'Custom software development and web applications',
                'publisher': {
                  '@id': 'https://vertex-software-enterprise.com/#organization'
                }
              }
            ]
          })
        }}
      />
      
      {domLoaded && (
        <div className='flex h-full w-full flex-col gap-5'>
          <HomepageHeader />
          <HomepageBanner className='mt-52' />
          <HomepageExamples />
          <HomepageTechnologies />
          <HomepageReviews />
          <HomepageAboutUs />
          <ContactUsForm />
          <HomepageFooter />
        </div>
      )}
    </>
  );
}
