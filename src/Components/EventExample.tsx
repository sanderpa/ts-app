import React, { FC, useState } from "react";

const EventExample: FC = () => {
  const [value, setValue] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" />
      <button onClick={clickHandler}> Click there</button>
    </div>
  );
};

export default EventExample;
