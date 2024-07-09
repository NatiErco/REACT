import React, { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setcollapsed] = useState(false);

  function handleToogle() {
    setcollapsed((t) => !t);
  }

  return (
    <div className="container">
      <div>
        {title} <button onClick={handleToogle}>Toggle</button>
      </div>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}
