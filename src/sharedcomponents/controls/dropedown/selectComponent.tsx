// App.tsx
// Kindacode.com
import React, { useState } from "react";

export interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
  selects?: [];
}

function Select({ selects }: any) {
  return (
    <div>
      <div>
        {selects.map((value: any) => (
          <select style={styles.select}>
            {value.numberarray.map(
              (element: any, index: React.Key | null | undefined) => (
                <option key={index} value={element} selected={element}>
                  {element}
                </option>
              )
            )}
          </select>
        ))}
      </div>

      {/* <select onChange={selectChange} style={styles.select}>
        //{" "}
        <option selected disabled>
          // Choose one //{" "}
        </option>
        // <option value="blue">Blue</option>
        // <option value="red">Red</option>
        // <option value="green">Green</option>
        // <option value="yellow">Yellow</option>
        // <option value="kindacode.com">Kindacode.com</option>
        //{" "}
      </select>
      // {selectedOption && <h2 style={styles.result}>{selectedOption}</h2>} */}
    </div>
  );
}

export default Select;

// Just some styles
const styles: { [name: string]: React.CSSProperties } = {
  select: {
    padding: 5,
    width: 60,
  },
};
