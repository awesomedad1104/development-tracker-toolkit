import Link from "next/link";
import { siteTitle } from "../toolkit.config";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import { useEffect } from 'react';

// Add styles for social icons
const socialIconStyles = {
  width: '32px',
  height: '32px',
  fill: 'currentColor',
  transition: 'color 0.3s ease'
};

export const sections = [
  {
    href: `/map`,
    text: `Map`,
  },
  {
    href: `/projects`,
    text: `Projects`,
  },
  {
    href: `/submit-a-tip`,
    text: `Submit a tip`,
  },
  {
    href: `/about`,
    text: `About`,
  }
];

const Header = ({ nav, showNav }) => {
  const router = useRouter();

  return (
    <header>
      <div className="relative w-full">
        {/* Top Header Row */}
        <div className="flex items-center justify-between w-full px-4 py-2">
          {/* Social Icons */}
          <div className="flex space-x-4 social-icons">
            <a href="https://www.facebook.com/oviedocommunitynews/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <svg style={socialIconStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/oviedo-community-news/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <svg style={socialIconStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCz42mrQ4TE13-8W5JkYhhxg" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <svg style={socialIconStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/oviedocommunitynews/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-600">
              <svg style={socialIconStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
          </div>
          
          {/* Title - Commented out for later use */}
          {/* <Link href="/" className="text-center flex-grow">
            <h1 className="text-2xl md:text-4xl font-bold">{siteTitle}</h1>
          </Link> */}
          
          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/OCN-MainLogo-1.svg"
              width={388}
              height={104}
              alt="Logo"
              className="h-20 md:h-32 w-auto"
            />
          </div>

          {/* Header Actions */}
          <div className="header-actions hidden md:flex">
            <button className="donate-button">♥ Donate</button>
            <Link href="/login">Login</Link>
          </div>   
          
          {/* Hamburger Menu for Mobile */}
          <div onClick={() => showNav(true)} className="md:hidden">
            <FontAwesomeIcon icon={faBars} className="h-6" />
          </div>
        </div>

        {/* Navigation Sub-heading */}
        <nav className="header-nav">
          <div className="container mx-auto">
            <ul>
              {sections.map((s) => (
                <li key={s.text}>
                  <Link 
                    href={s.href}
                    className={s.href === router.pathname ? 'active' : ''}
                  >
                    {s.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
