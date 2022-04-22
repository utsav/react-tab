import React, { useContext } from "react";
import TabContext from "../../contexts/TabContext";
import s from "./Tab.module.scss";

const Tab = ({ children, tabIndex, disabled }) => {
  const { activeIndex, handleTabChange } = useContext(TabContext);

  const handleTabClick = () => {
    if (disabled) {
      return;
    }
    handleTabChange(tabIndex);
  };

  return (
    <div
      disabled={disabled}
      className={`${s.container} ${
        tabIndex === activeIndex ? s.activeTab : ""
      }`}
      onClick={handleTabClick}
    >
      {children}
    </div>
  );
};

Tab.tabType = "Tab";
export default Tab;
