import { useState } from "react";

export default function CardForm(props) {

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
  }

//   function makeUppercase(value) {
//     return value.toUpperCase();
//   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="theirName"></label>
        <input
          name="theirName"
          type="text"
          className="input"
          value={props.searchCriteria}
          onChange={(event) => props.setSearchCriteria(event.target.value)}
        />
      </form>
    </div>
  );
}