import { React } from "react";
import { Color } from "./Components/Color";
import { Colors } from "./Components/Colors";

export function App() {

  return (
    <div>
      <Colors
        colors={[
          { id: 1, name: "Red" },
          { id: 2, name: "Yellow" },
          { id: 3, name: "White" },
        ]}
      />
    </div>
  );
}
