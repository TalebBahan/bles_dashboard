import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineAlignRight } from "react-icons/ai";
import {
  CloseButton,
  Container,
  HamButton,
  Logo,
  Menu,
  NavBar,
  NavItem,
} from "./NavbarElement";
import SignatureWhite from "../../assets/Nav/signature-white.svg";
import SignatureBlack from "../../assets/Nav/signature-black.svg";
import { HashLink } from "react-router-hash-link";

const WINDOW_HEIGHT = window.screen.height - 100;
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    const searchBox = document.getElementById('searchBox');
    const s = document.getElementById('s');
    const str = document.getElementById('str');
    if (window.scrollY > WINDOW_HEIGHT) {
      searchBox.classList.add('redFill');
      s.classList.add('redFill');
      str.classList.add('t');
      setActive(true);
    } else {
      searchBox.classList.remove('redFill');
      s.classList.remove('redFill');
      str.classList.remove('t');
      setActive(false);
    }
  };

  const toggle = () => {
    setShow((prev) => !prev);
  };

  const showContact = () => {
    let element = document.getElementById("contact-form");
    if (element) {
      element.style.display = "flex";
    }
  };
  const showSearch = () => {
    let element = document.getElementById("search-form");
    if (element) {
      element.style.display = "flex";
    }
  };
  return (
    <NavBar active={active}>
      <Container>
        <HashLink
          style={{ textDecoration: "none", color: "inherit" }}
          activeClass="active"
          smooth
          spy
          to="/#home"
        >
          <Logo src={active ? SignatureBlack : SignatureWhite} alt="logo" />
        </HashLink>

        <HamButton onClick={toggle} active={active}>
          <AiOutlineAlignRight />
        </HamButton>
        <Menu show={show}>
          <CloseButton onClick={toggle}>
            <AiOutlineClose fontSize={22} fontWeight={800} />
          </CloseButton>
          <NavItem active={active}>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              activeClass="active"
              to="/#about"
              smooth
              spy
            >
              About
            </HashLink>
          </NavItem>
          <NavItem active={active}>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              activeClass="active"
              smooth
              spy
              to="/#book"
            >
              Book
            </HashLink>
          </NavItem>
          <NavItem onClick={showContact} active={active}>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              activeClass="active"
              to="/#contact"
              smooth
              spy
            >
              Contact
            </HashLink>
          </NavItem>
          <NavItem active={active} onClick={showSearch}>

            <svg width="26" height="26" viewBox="0 0 26 26" fill="white" id="searchBox" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.8042 24.1733L17.7003 17.0889C19.2031 15.3178 20.0909 13.07 20.0909 10.6176C20.0909 5.09995 15.5826 0.604004 10.0499 0.604004C4.51709 0.603766 0.00878906 5.09977 0.00878906 10.6176C0.00878906 16.1354 4.51715 20.6311 10.0499 20.6311C12.5089 20.6311 14.7631 19.7456 16.4707 18.3152L23.5746 25.3315C23.7111 25.4676 23.9843 25.604 24.1892 25.604C24.3941 25.604 24.599 25.5358 24.8038 25.3315C25.0771 24.9908 25.0771 24.514 24.8038 24.1735L24.8042 24.1733ZM1.71652 10.6176C1.71652 6.05362 5.4735 2.30699 10.0499 2.30699C14.6264 2.30699 18.3833 6.05368 18.3833 10.6176C18.3833 15.1814 14.6263 18.9281 10.0499 18.9281C5.47344 18.9281 1.71652 15.2497 1.71652 10.6176Z" />
            </svg>
          </NavItem>
          <NavItem active={active}>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              activeClass="active"
              to="https://www.linkedin.com/in/eddyabboud/"
              smooth
              target="_blank"
              spy
            >
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <mask id="mask0_277_292" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="3" width="19" height="19">
                  <rect x="3.91504" y="3.91553" width="17.4699" height="17.4699" fill="url(#pattern0)" />
                </mask>
                <g mask="url(#mask0_277_292)">
                  <rect x="3.91504" y="3.91553" width="17.4699" height="17.4699" fill="white" id="s" />
                </g>
                <rect x="0.5" y="0.5" width="24" height="24" rx="4.5" stroke="white" id="str" />
                <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_277_292" transform="scale(0.00195312)" />
                  </pattern>
                  <image id="image0_277_292" width="512" height="512" xlinkHref="data:image/png;base64,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" />
                </defs>
              </svg>



            </HashLink>
          </NavItem>

        </Menu>
      </Container>
    </NavBar>
  );
};

export default Navbar;
