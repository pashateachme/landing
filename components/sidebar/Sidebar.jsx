import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import sidebarData from "../../data/sidebarData";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import CopyRight from "../CopyRight";
import { Logo } from "../Logo";

const Sidebar = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="logo">
            <Link className="navbar-brand no-text-decoration" href="/">
              <Logo />
            </Link>
          </div>

          <div className="my_trigger" onClick={handleClick}>
            <div
              className={
                click
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={click ? "leftpart active" : "leftpart"}>
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand no-text-decoration" href="/">
              <Logo />
            </Link>
          </div>

          <div className="menu">
            <ul>
              {sidebarData.map((item) => (
                <li key={item.id} onClick={handleClick}>
                  <Link
                    className={`${
                      isActiveLink(item.routePath, router.asPath)
                        ? "active "
                        : ""
                    }`}
                    href={item.routePath}
                  >
                    <Image
                      width={15}
                      height={15}
                      className="svg"
                      src={item.icon}
                      alt="homerun"
                    />
                    <span className="menu_content">{item.menuName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <CopyRight />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
