import { useState } from 'react';

import className from 'classnames';

type FixedTwoArray<T> = [T, T];
type PropTabs = {
  tabs: FixedTwoArray<string>;
};

const ToggleTab = (props: PropTabs) => {
  const [currentTabLabel, setCurrentTabLabel] = useState(props.tabs[0]);
  const [isOpen, setIsOpen] = useState(true);

  const updateTab = (openflag: boolean) => {
    setIsOpen(openflag);
    setCurrentTabLabel(openflag ? props.tabs[0] : props.tabs[1]);
  };

  const toggleBoxClasses = className({
    toggleTabBox: true,
    isOpen,
  });

  return (
    <div className={toggleBoxClasses}>
      <span className="cover-label">{currentTabLabel}</span>
      <button
        className="first-tab"
        onClick={() => {
          updateTab(true);
        }}
      >
        {props.tabs[0]}
      </button>
      <button
        className="second-tab"
        onClick={() => {
          updateTab(false);
        }}
      >
        {props.tabs[1]}
      </button>
    </div>
  );
};

export default ToggleTab;
