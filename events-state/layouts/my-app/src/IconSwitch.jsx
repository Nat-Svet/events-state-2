import React from 'react';

function IconSwitch({ view, onSwitch }) {
  const iconName = view === 'grid' ? 'grid_view' : 'view_list';

  return (
    <div
      style={{
        position: 'fixed',  
        top: '20px',
        right: '20px',
        cursor: 'pointer',
        fontSize: '32px',
        color: '#555',
        userSelect: 'none',
      }}
      onClick={() => onSwitch(view === 'grid' ? 'list' : 'grid')}
      title={view === 'grid' ? 'Switch to list view' : 'Switch to grid view'}
      className="material-icons"
    >
      {iconName}
    </div>
  );
}

export default IconSwitch;
