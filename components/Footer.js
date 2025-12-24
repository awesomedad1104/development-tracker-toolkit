import Link from "next/link";
import { organization, siteTitle } from "../toolkit.config";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="w-full pt-4 text-center">
          <h1>{siteTitle}</h1>
          <Link href="/contact-us">
            <button style={{ fontSize: "1.25rem" }}>Contact us</button>
          </Link>
          <p className="text-xs leading-6 text-center">
            &copy; {new Date().getFullYear()} {organization}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
