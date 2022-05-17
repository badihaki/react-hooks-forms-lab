import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  //
  const [form, setForm] = useState({
    id: 0,
    name : "name",
    category : "Produce"
  });

  function handleFormSubmit(event){
    event.preventDefault();
    const newItem={
      id: uuid(),
      name: form.name.toString(),
      category: form.category.toString(),
    }
    onItemFormSubmit(newItem)
  }

  function handleChange(event){
    const key = event.target.name;
    const value = event.target.value;
    setForm({...form, [key]: [value]});
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
