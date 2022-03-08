import React, { useCallback, useState } from "react";
import Sub from "./Sub";

const UseMemo = () => {
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");

  const onChangeHandler = useCallback(
    (e) => {
      console.log("useCallback");
      if (e.target.id === "subject") {
        setSubject(e.target.value);
      } else {
        setYear(e.target.value);
      }
    },
    [year]
  );

  return (
    <div>
      <div>
        <input id="subject" value={subject} onChange={onChangeHandler} />
      </div>
      <div>
        <div>
          <input
            type="radio"
            name="year"
            value={"2019"}
            onChange={onChangeHandler}
          />
          2019
        </div>
        <div>
          <input
            type="radio"
            name="year"
            value={"2020"}
            onChange={onChangeHandler}
          />
          2020
        </div>
        <div>
          <input
            type="radio"
            name="year"
            value={"2021"}
            onChange={onChangeHandler}
          />
          2021
        </div>
        <div>
          <input
            type="radio"
            name="year"
            value={"2022"}
            onChange={onChangeHandler}
          />
          2022
        </div>
        <Sub subject={subject} year={year} />
      </div>
    </div>
  );
};

export default UseMemo;
