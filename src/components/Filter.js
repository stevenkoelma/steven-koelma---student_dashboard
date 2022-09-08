import React, { useState } from "react";

const Filter = (showchart) => {
  const [chart, setChart] = useState(showchart);

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setChart((current) => !current);
  };

  return (
    <div className="filters">
      <p>Select your filters here:</p>
      <div>
        <label>
          <input
            type="checkbox"
            checked={chart.checkedDifficult}
            value={chart}
            onChange={handleChange}
          />
          Hoe moeilijk was de opdracht?
        </label>
        <label>
          <input
            type="checkbox"
            value={chart}
            checked={chart.checkedFunFactor}
            onChange={handleChange}
          />
          Hoe leuk was de opdracht?
        </label>
      </div>
    </div>
  );
};

export default Filter;
