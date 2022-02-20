import React from "../../_snowpack/pkg/react.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {
  faStackOverflow,
  faLinkedin,
  faTwitter,
  faGithub
} from "../../_snowpack/pkg/@fortawesome/free-brands-svg-icons.js";
import {Container, Icon} from "./SocialIcons.styled.js";
const SocialIcons = () => /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Icon, {
  target: "_blank",
  href: "https://www.linkedin.com/in/mattycharlton/"
}, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
  icon: faLinkedin,
  size: "3x"
})), /* @__PURE__ */ React.createElement(Icon, {
  target: "_blank",
  href: "https://twitter.com/mattycharlton_/"
}, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
  icon: faTwitter,
  size: "3x"
})), /* @__PURE__ */ React.createElement(Icon, {
  target: "_blank",
  href: "https://github.com/mattycharlton/"
}, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
  icon: faGithub,
  size: "3x"
})), /* @__PURE__ */ React.createElement(Icon, {
  target: "_blank",
  href: "https://stackoverflow.com/users/12885512/matthew"
}, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
  icon: faStackOverflow,
  size: "3x"
})));
export default SocialIcons;
