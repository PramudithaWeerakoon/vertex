import contacts from '@/data/contacts.json';
import { CommonAssets } from '@/lib/assetUtils';
import { Tooltip } from 'flowbite-react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  PiCheckCircleBold,
  PiEnvelopeSimpleBold,
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiPhoneBold,
  PiTwitterLogo,
  PiYoutubeLogo
} from 'react-icons/pi';

interface HomepageFooterProps {
  className?: string;
}

export default function HomepageFooter(props: HomepageFooterProps) {
  const { className } = props;
  const [sectionId, setSectionId] = useState('');

  useEffect(() => {
    if (sectionId.length)
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: '#banner' === sectionId ? 0 : sectionId,
          autoKill: false
        }
      });
    setSectionId('');
  }, [sectionId]);

  return (
    <div
      className={`${className} flex h-full w-full flex-col items-center justify-center gap-10 p-10`}
    >
      <div className='flex flex-row gap-5 font-coiny text-4xl uppercase text-secondary'>
        <div className='text-primary'>our</div>
        contacts
      </div>
      <div className='flex flex-row gap-10 text-5xl text-secondary md:text-6xl'>
        <Link
          href='https://www.instagram.com/vertex_software_enterprise/'
          className='cursor-pointer text-secondary hover:text-primary'
          target='_blank'
        >
          <PiInstagramLogo />
        </Link>
        <Link
          href='https://www.linkedin.com/company/vertex-software-enterprise/'
          className='cursor-pointer text-secondary hover:text-primary'
          target='_blank'
        >
          <PiLinkedinLogo />
        </Link>
        <Link
          href='https://web.facebook.com/profile.php?id=61575011651686&mibextid=ZbWKwL&_rdc=1&_rdr#'
          className='cursor-pointer text-secondary hover:text-primary'
          target='_blank'
        >
          <PiFacebookLogo />
        </Link>
        <Link
          href='https://www.youtube.com/@vertexsoftwareenterprise'
          className='cursor-pointer text-secondary hover:text-primary'
          target='_blank'
        >
          <PiYoutubeLogo />
        </Link>
        <Link
          href='https://twitter.com/VertexSoftwareE'
          className='cursor-pointer text-secondary hover:text-primary'
          target='_blank'
        >
          <PiTwitterLogo />
        </Link>
      </div>
      <div className='flex w-full flex-col items-center justify-center font-dongle text-2xl text-secondary'>
        <div className='address flex items-center gap-2 text-center md:text-left'>
          <span className='text-primary'>Address:</span> Colombo, Sri Lanka
        </div>
        <div className='business-hours flex items-center gap-2 text-center md:text-left'>
          <span className='text-primary'>Business Hours:</span> Mon-Fri: 9am - 6pm
        </div>
      </div>
      <span className='cursor-default self-center font-dongle text-5xl text-primary md:self-start md:px-20'>
        Service
      </span>
      <div className='flex w-full flex-col-reverse items-center justify-between font-dongle text-3xl text-secondary md:flex-row md:px-20'>
        <div className='hidden w-full flex-col md:flex md:text-start'>
          <div
            onClick={() => {
              setSectionId('#technologies');
            }}
            className={`cursor-pointer  text-secondary hover:text-primary`}
          >
            Technologies
          </div>
          <div
            onClick={() => {
              setSectionId('#examples');
            }}
            className={`cursor-pointer  text-secondary hover:text-primary`}
          >
            Examples
          </div>
          <div
            onClick={() => {
              setSectionId('#reviews');
            }}
            className={`cursor-pointer  text-secondary hover:text-primary`}
          >
            Reviews
          </div>
          <div
            onClick={() => {
              setSectionId('#aboutUs');
            }}
            className={`cursor-pointer  text-secondary hover:text-primary`}
          >
            About Us
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center md:items-end'>
          <Tooltip
            placement={window.innerWidth >= 500 ? 'left' : 'top'}
            trigger='click'
            className='bg-gradient-to-br from-primary px-2 py-0'
            content={
              <div className='flex items-center justify-center gap-1 font-dongle text-xl'>
                <PiCheckCircleBold />
                <span className=' text-2xl'>Copied!</span>
              </div>
            }
          >
            <div
              className='flex cursor-pointer flex-row items-center gap-2 hover:text-primary md:flex-row-reverse'
              onClick={() => {
                navigator.clipboard.writeText(contacts.email);
              }}
            >
              <PiEnvelopeSimpleBold /> {contacts.email}
            </div>
          </Tooltip>
          <Tooltip
            placement={window.innerWidth >= 500 ? 'left' : 'top'}
            trigger='click'
            className='bg-gradient-to-br from-primary px-2 py-0'
            content={
              <div className='flex items-center justify-center gap-1 font-dongle text-xl'>
                <PiCheckCircleBold />
                <span className=' text-2xl'>Copied!</span>
              </div>
            }
          >
            <div
              className='flex cursor-pointer flex-row items-center gap-2 decoration-primary hover:underline  md:flex-row-reverse'
              onClick={() => {
                navigator.clipboard.writeText(contacts.number);
              }}
            >
              <PiPhoneBold /> {contacts.number}
            </div>
          </Tooltip>
          <div className='cursor-default opacity-0'>placeholder</div>
          <div
            className='flex cursor-pointer flex-row-reverse items-center self-end text-end'
            onClick={() => {
              setSectionId('#banner');
            }}
          >
            <Image
              width={50}
              height={50}
              alt='logo'
              className='h-11 w-auto md:h-14 md:w-auto'
              src={CommonAssets.logo}
            />
            <div className='font-coiny text-lg leading-5 tracking-wider text-secondary md:text-xl md:leading-6'>
              <div className='whitespace-nowrap text-primary'>{'Vertex Software Enterprise '}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
