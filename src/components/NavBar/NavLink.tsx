import React from "react";

const NavLink = (props: any) => {
  if (!props?.link?.href || !props?.link?.text) return null;
  const { href, text } = props.link;
  return (
    <li>
      <a href={href}>
        <span role="img" aria-label="navigation link icon">
          😎
        </span>
        <span>{text}</span>
      </a>
    </li>
  );
};

export default NavLink;
