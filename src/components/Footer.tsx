import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-palm-dark-green w-full">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-8 gap-y-8 xl:justify-between md:px-15 lg:py-20 xl:px-30 py-8 text-gray-50 lg:px-20 px-6">
        <div className="grid grid-cols-subgrid lg:flex lg:flex-col col-span-4 lg:col-span-3 lg:col-start-1 justify-between lg:items-start">
          <div className="col-span-2">
            <Link to={`/`}>
              <img src="/footerLogo.png" alt="Palm Logo" width={326} height={81} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col col-span-full lg:col-span-3 lg justify-evenly gap-3 lg:gap-10">
          <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold uppercase font-expanded whitespace-nowrap">
            Quick links
          </h2>
          <div className="flex flex-col justify-between gap-3 lg:gap-2 h-full ">
            <Link
              className="hover:text-cultiv-yellow duration-300 ease-in-out text-sm sm:text-base md:text-xl xl:text-xl"
              to={`#`}
            >
              Home
            </Link>
            <Link
              className="hover:text-cultiv-yellow duration-300 ease-in-out text-sm sm:text-base md:text-xl xl:text-xl"
              to={`#`}
            >
              Why palm
            </Link>
            <Link
              className="hover:text-cultiv-yellow duration-300 ease-in-out text-sm sm:text-base md:text-xl xl:text-xl"
              to={`#`}
            >
              pricing
            </Link>
            <Link
              className="hover:text-cultiv-yellow duration-300 ease-in-out text-sm sm:text-base md:text-xl xl:text-xl"
              to={`#`}
            >
              Find a Job
            </Link>
          </div>
        </div>
        <div className="flex flex-col col-span-full lg:col-span-5 lg:col-start-8 items-start gap-3 lg:gap-10">
          <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold font-expanded uppercase">
            Find Us
          </h2>
          <div className="flex flex-col justify-between h-full gap-4">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <img src="/Linkedin.svg" alt="Linkedin" width={20} height={20} />
            </a>
            <a href="mailto:talent@palmoutsourcing.com">talent@palmoutsourcing.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
