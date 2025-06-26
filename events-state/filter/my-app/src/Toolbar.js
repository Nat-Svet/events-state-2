import React, { useState } from 'react';

function Toolbar({ filters, onSelectFilter }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleClick = (filter) => {
    setActiveFilter(filter);
    onSelectFilter(filter);
  };

  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`filter-button ${filter === activeFilter ? 'active' : ''}`}
          onClick={() => handleClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
