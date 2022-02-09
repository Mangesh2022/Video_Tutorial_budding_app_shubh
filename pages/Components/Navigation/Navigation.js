import Link from "next/link";

const Navigation = () => {
  return (
    <div className="h-auto   font-thin text-sm  ">
      <nav className="">
        <ul className="flex justify-center text-stone-700 align-middle text-center items-center  ">
          <li className=" px-4 py-1 border-b border-stone-800 ">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>

          <li className="m-2 px-4 py-1  ">
            <Link href="/ResidencialServices">
              <a>Residential Services</a>
            </Link>
          </li>

          <li className="m-2 px-4 py-1 ">
            <Link href="/CommercialServices">
              <a>Commercial Services </a>
            </Link>
          </li>

          <li className="m-2 px-4 py-1 ">
            <Link href="/HomeImprovementServices">
              <a>Home Improvements</a>
            </Link>
          </li>

          <li className="m-2 px-4 py-1 ">
            <Link href="/Why-us">
              <a>Why us</a>
            </Link>
          </li>
          <li className="m-2 px-4 py-1 ">
            <Link href="blogs">
              <a>Blogs and News</a>
            </Link>
          </li>

          <li className="m-2 px-4 py-1 ">
            <Link href="contact-us">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
