import { NavMenu } from "../assets/constant/menu";
import DarkModeToggle from "./toogle/dark-mode-toggle";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Premier League Fest
          </a>
          <DarkModeToggle />
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Your go-to source for the latest Premier League scores, standings,
            fixtures, player stats, and news. Stay updated with everything
            happening in the world's most exciting football league.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            {NavMenu.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="mr-4 hover:underline md:mr-6">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="#" className="hover:underline">
              Premier League Fest
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
