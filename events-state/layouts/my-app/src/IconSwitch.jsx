import React from 'react';

function IconSwitch({ icon, onSwitch }) {
  return (
    <span
  className="material-icons"
  style={{ cursor: 'pointer', fontSize: '36px', userSelect: 'none'}}
  onClick={onSwitch}
  role="button"
  tabIndex={0}
  aria-label="Switch layout"
>
  {icon}
</span>

  );
}

export default IconSwitch;
