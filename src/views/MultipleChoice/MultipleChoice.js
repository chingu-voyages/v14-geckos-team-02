import React from "react";

export default ({
  question,
  choices,
  checkedOption,
  handleChecked,
  id,
  count
}) => {
  const myChoices = () => {
    return (
      <div key={id}>
        <label>
          <input
            type="radio"
            checked={checkedOption === `${choices[0]}`}
            onChange={e => handleChecked(e.target.value, count)}
            value={choices[0]}
          />{" "}
          {choices[0]}
        </label>
        <label>
          <input
            type="radio"
            checked={checkedOption === `${choices[1]}`}
            onChange={e => handleChecked(e.target.value, count)}
            value={choices[1]}
          />{" "}
          {choices[1]}
        </label>
        <label>
          <input
            type="radio"
            checked={checkedOption === `${choices[2]}`}
            onChange={e => handleChecked(e.target.value, count)}
            value={choices[2]}
          />{" "}
          {choices[2]}
        </label>
        <label>
          <input
            type="radio"
            checked={checkedOption === `${choices[3]}`}
            onChange={e => handleChecked(e.target.value, count)}
            value={choices[3]}
          />{" "}
          {choices[3]}
        </label>
      </div>
    );
  };
  return (
    <div>
      <h2>{question}</h2>
      {myChoices()}
    </div>
  );
};
