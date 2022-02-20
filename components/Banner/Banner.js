import React from "../../_snowpack/pkg/react.js";
import Social from "../SocialIcons/SocialIcons.js";
import logo from "../../images/tertiary-logo.png.proxy.js";
import {
  BannerWrapper,
  Container,
  Heading,
  SubHeading,
  Logo
} from "./Banner.styled.js";
const Banner = () => /* @__PURE__ */ React.createElement(BannerWrapper, null, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Logo, {
  src: logo
}), /* @__PURE__ */ React.createElement(Heading, null, "Matty Charlton"), /* @__PURE__ */ React.createElement(SubHeading, null, "Front End Engineer"), /* @__PURE__ */ React.createElement(Social, null)));
export default Banner;
