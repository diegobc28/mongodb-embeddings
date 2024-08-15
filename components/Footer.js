import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";
import twitterIcon from "@/public/images/x_icon.png";
import instagramIcon from "@/public/images/ig_icon.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Image
            src={logo}
            alt={`${config.appName} logo`}
            priority={true}
            className="w-6 h-6"
            width={24}
            height={24}
          />
          <p className="text-sm text-base-content/60">
            &copy; {new Date().getFullYear()} CASADEPAW, Inc.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacidad
          </Link>
          <Link href="/tos" className="hover:underline">
            Términos
          </Link>
          <Link href="/pricing" className="hover:underline">
            Precios
          </Link>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.twitter.com/casadepaw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Image
              src={twitterIcon}
              alt="Twitter"
              className="h-6"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.instagram.com/casadepaw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Image
              src={instagramIcon}
              alt="Instagram"
              className="h-6"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
