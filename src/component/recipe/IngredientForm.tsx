import React from "react";
import { useState, useEffect } from "react";

const units = ["g", "kg", "lb", "cup", "TeaSpoon", "TableSpoon", "oz", "unit"];
interface Props {}
export const IngredientForm = () => {
  function handleCreateClick(): void {}

  function handleCancelClick(): void {}

  return (
    <form onSubmit={handleCreateClick} className="creat-form">
      <div>
        <h2>Create Item</h2>
        <label htmlFor="item">Item:</label>
        <input type="text" name="name" pattern="^[A-Za-z0-9]{2,16}$" />
        <span>Contain invalid characters</span>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="text" name="amount" pattern="[0-9]*[.,]?[0-9]*" />
      </div>
      <div>
        <label htmlFor="unit">Unit:</label>
        <select name="unit" id="unit">
          {units.map((unit) => (
            <option value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <div className="form-button">
        <button type="submit">Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </form>
  );
};
