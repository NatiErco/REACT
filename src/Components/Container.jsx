import React, { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggle() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="container">
      <div>
        {title} <button onClick={handleToggle}>Toggle</button>
      </div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}

