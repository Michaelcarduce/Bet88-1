// import React, { useState, useRef, useEffect } from "react";
// import "../styles/global.css";
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const headerRef = useRef(null);
//     const [menuActive, setMenuActive] = useState(false);

//     const toggleMenu = () => {
//         setMenuActive(!menuActive);
//         document.body.classList.toggle('scroll_fix', !menuActive); // Toggle body scroll fix
//     };

//     const handleScroll = () => {
//         if (window.scrollY > 0) {
//             headerRef.current.classList.add('scrolled');
//         } else {
//             headerRef.current.classList.remove('scrolled');
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//         window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//   return (
//     <header className="special-header" ref={headerRef}>
//       <div className="navigation">
//         <div className="alignment">
//           <a href="#">
//             <img
//               className="logo"
//               src="/assets/logo.png"
//               alt="PANALOBET Logo"
//               title="PANALOBET Logo"
//             />
//           </a>
//         </div>
//         <div className="alignment">
//           <div className="alignment mr20">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               className="social-link"
//             >
//               <img src="/assets/socialicons1.png" alt="Bet88" title="Bet88" />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               className="social-link"
//             >
//               <img src="/assets/socialicons2.png" alt="Bet88" title="Bet88" />
//             </a>
//             <a
//               href="https://telegram.com"
//               target="_blank"
//               className="social-link"
//             >
//               <img src="/assets/socialicons3.png" alt="Bet88" title="Bet88" />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               className="social-link"
//             >
//               <img src="/assets/socialicons4.png" alt="Bet88" title="Bet88" />
//             </a>
//           </div>
//           <div className="alignment gap20">
//             <a className="ctaButton" href="#" target="_blank">
//               <span className="ctaButtonMes">Login</span>
//             </a>
//             <a className="ctaButton2" href="#" target="_blank">
//               <span className="ctaButtonMes">Signup</span>
//             </a>
//           </div>
//         </div>
//         <div
//           id="nav-icon"
//           className={menuActive ? "active" : ""}
//           onClick={toggleMenu}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//       <div className={`navigation2 ${menuActive ? "active" : ""}`}>
//         <div
//           className={`alignment navigationlinks ${menuActive ? "active" : ""}`}
//         >
//           <nav>
//             <ul className={`nav-menu topnav ${menuActive ? "active" : ""}`}>
//               <li>
//                 <Link to="/">HOME</Link>
//               </li>
//               <li className="nav-dropdown">
//                 <Link to="slot.html">SLOT</Link>
//                 <ul className="nav-dropdown-content">
//                   <li>
//                     <Link to="fc-slot.html">FC SLOT</Link>
//                   </li>
//                   <li>
//                     <Link to="slot.html"> SLOT</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <Link to="sp-app.html">SP APP</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

//////////////////////

// import React, { useState, useRef, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "../styles/global.css";

// const Header = () => {
//   const headerRef = useRef(null);
//   const [menuActive, setMenuActive] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//     document.body.classList.toggle("scroll_fix", !menuActive); // Toggle body scroll fix
//   };

//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       headerRef.current.classList.add("scrolled");
//     } else {
//       headerRef.current.classList.remove("scrolled");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Function to add 'active' class based on current route
//   const isActive = (path) => (location.pathname === path ? "active" : "");

//   return (
//     <header className="special-header" ref={headerRef}>
//       <div className="navigation">
//         <div className="alignment">
//           <a href="#">
//             <img
//               className="logo"
//               src="/assets/logo.png"
//               alt="PANALOBET Logo"
//               title="PANALOBET Logo"
//             />
//           </a>
//         </div>
//         <div className="alignment">
//           <div className="alignment mr20">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               className="social-link"
//             >
//               <img src="/assets/socialicons1.png" alt="Bet88" title="Bet88" />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               className="social-link"
//             >
//               <img src="/assets/socialicons2.png" alt="Bet88" title="Bet88" />
//             </a>
//             <a
//               href="https://telegram.com"
//               target="_blank"
//               className="social-link"
//             >
//               <img src="/assets/socialicons3.png" alt="Bet88" title="Bet88" />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               className="social-link"
//             >
//               <img src="/assets/socialicons4.png" alt="Bet88" title="Bet88" />
//             </a>
//           </div>
//           <div className="alignment gap20">
//             <a className="ctaButton" href="#" target="_blank">
//               <span className="ctaButtonMes">Login</span>
//             </a>
//             <a className="ctaButton2" href="#" target="_blank">
//               <span className="ctaButtonMes">Signup</span>
//             </a>
//           </div>
//         </div>
//         <div
//           id="nav-icon"
//           className={menuActive ? "active" : ""}
//           onClick={toggleMenu}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//       <div className={`navigation2 ${menuActive ? "active" : ""}`}>
//         <div
//           className={`alignment navigationlinks ${menuActive ? "active" : ""}`}
//         >
//           <nav>
//             <ul className={`nav-menu topnav ${menuActive ? "active" : ""}`}>
//               <li className={isActive("/")}>
//                 <Link to="/">HOME</Link>
//               </li>
//               <li className={isActive("/live-casino")}>
//                 <Link to="/live-casino">LIVE CASINO</Link>
//               </li>
//               <li className={isActive("/slots")}>
//                 <Link to="/slots">SLOTS</Link>
//               </li>
//               {/* <li className={`nav-dropdown ${isActive("/slot.html")}`}>
//                 <Link to="/slot.html">SLOT</Link>
//                 <ul className="nav-dropdown-content">
//                   <li className={isActive("/fc-slot.html")}>
//                     <Link to="/fc-slot.html">FC SLOT</Link>
//                   </li>
//                   <li className={isActive("/slot.html")}>
//                     <Link to="/slot.html">SLOT</Link>
//                   </li>
//                 </ul>
//               </li> */}
//               {/* <li className={isActive("/sp-app.html")}>
//                 <Link to="/sp-app.html">SP APP</Link>
//               </li> */}
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

//////////////////////

import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/global.css";

const Header = () => {
  const headerRef = useRef(null);
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.classList.toggle("scroll_fix", !menuActive); // Toggle body scroll fix
  };

  const closeMenuOnLinkClick = () => {
    setMenuActive(false);
    document.body.classList.remove("scroll_fix"); // Remove scroll fix when navigating
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current.classList.add("scrolled");
    } else {
      headerRef.current.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to add 'active' class based on current route
  // const isActive = (path) => (location.pathname === path ? "active" : "");
  const isActive = (path) => {
    if (path === "/blogs") {
      // Correct path: "/blogs"
      return location.pathname.startsWith("/blogs/") ||
        location.pathname === "/blogs"
        ? "active"
        : ""; //Check if pathname is exactly /blogs
    } else {
      return location.pathname === path ? "active" : "";
    }
  };
  return (
    <header className="special-header" ref={headerRef}>
      <div className="navigation">
        <div className="alignment">
          <a href="#">
            <img
              className="logo"
              src="/assets/logo.png"
              alt="PANALOBET Logo"
              title="PANALOBET Logo"
            />
          </a>
        </div>
        <div className="alignment">
          <div className="alignment mr20">
            <a
              href="https://facebook.com"
              target="_blank"
              className="social-link">
              <img src="/assets/socialicons1.png" alt="Bet88" title="Bet88" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="social-link">
              <img src="/assets/socialicons2.png" alt="Bet88" title="Bet88" />
            </a>
            <a
              href="https://telegram.com"
              target="_blank"
              className="social-link">
              <img src="/assets/socialicons3.png" alt="Bet88" title="Bet88" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="social-link">
              <img src="/assets/socialicons4.png" alt="Bet88" title="Bet88" />
            </a>
          </div>
          <div className="alignment gap20">
            <a className="ctaButton" href="#" target="_blank">
              <span className="ctaButtonMes">Login</span>
            </a>
            <a className="ctaButton2" href="#" target="_blank">
              <span className="ctaButtonMes">Signup</span>
            </a>
          </div>
        </div>
        <div
          id="nav-icon"
          className={menuActive ? "active" : ""}
          onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navigation2 ${menuActive ? "active" : ""}`}>
        <div
          className={`alignment navigationlinks ${menuActive ? "active" : ""}`}>
          <nav>
            <ul className={`nav-menu topnav ${menuActive ? "active" : ""}`}>
              <li className={isActive("/")}>
                <Link to="/" onClick={closeMenuOnLinkClick}>
                  HOME
                </Link>
              </li>
              <li className={isActive("/live-casino")}>
                <Link to="/live-casino" onClick={closeMenuOnLinkClick}>
                  LIVE CASINO
                </Link>
              </li>
              <li className={isActive("/slots")}>
                <Link to="/slots" onClick={closeMenuOnLinkClick}>
                  SLOTS
                </Link>
              </li>
              <li className={isActive("/bingo")}>
                <Link to="/bingo" onClick={closeMenuOnLinkClick}>
                  BINGO
                </Link>
              </li>
              <li className={isActive("/fishing-games")}>
                <Link to="/fishing-games" onClick={closeMenuOnLinkClick}>
                  FISHING GAMES
                </Link>
              </li>
              <li className={isActive("/affiliate")}>
                <Link to="/affiliate" onClick={closeMenuOnLinkClick}>
                  AFFILIATE
                </Link>
              </li>
              <li className={isActive("/promotion")}>
                <Link to="/promotion" onClick={closeMenuOnLinkClick}>
                  PROMOTION
                </Link>
              </li>
              <li className={isActive("/blogs")}>
                <Link to="/blogs" onClick={closeMenuOnLinkClick}>
                  BLOGS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
