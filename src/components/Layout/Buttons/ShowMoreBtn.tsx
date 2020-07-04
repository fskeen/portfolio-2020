import React from "react";
import "./_ShowMoreBtn.scss";

interface ShowMoreProps {
  showMore: string | number | boolean;
  setShowMore: Function;
  toggleValue?: string | number | boolean;
  defaultValue?: string | number | boolean;
  className?: string;
  expandMessage?: string;
  collapseMessage?: string;
}

const ShowMoreBtn = (props: ShowMoreProps) => {
  const {
    showMore,
    setShowMore,
    toggleValue = true,
    defaultValue = false,
    className,
    expandMessage = "+ Show more",
    collapseMessage = "- Show less"
  } = props;

  let value = showMore ? defaultValue : toggleValue;
  let messageToShow = showMore ? collapseMessage : expandMessage;
  return (
    <button
      className={className || "show-more-button"}
      onClick={() => setVisibility(setShowMore, value)}
    >
      {messageToShow}
    </button>
  );
};

const setVisibility = (setter: Function, value: string | number | boolean) => {
  setter(value);
};

export default ShowMoreBtn;
