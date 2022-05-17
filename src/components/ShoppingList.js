import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSeachText] = useState("Search...");
  const [itemList, setItemList] = useState([...items]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSeachText(event.target.value);
  }

  /*
  function handleItemListChange(event){
    event.preventDefault();
    console.log(event.target.children[0].children[0].value);
  }
  */

  function handleItemListChange(newItem){
    const newItemList = [...itemList, newItem];
    setItemList(newItemList);
  }
  
  const itemsSearchedFor = itemList.filter((item)=> {
    if (searchText === "" || searchText === "Search...") return true;
    else{
      return item.name.toLowerCase().includes(searchText.toLowerCase())
      /*
      let compareText = item.name.slice(0,searchText.length);
      return compareText.toLowerCase() === searchText.toLowerCase();
      */
    }
  })
  
  const itemsToDisplay = itemsSearchedFor.filter((item) => {
    if (selectedCategory === "All") return true;
    
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit ={handleItemListChange} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchText} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
