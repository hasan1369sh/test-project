import { memo, useState } from "react";
import CategoryItem from "../categoryItem/CategoryItem";
import RequestApi from "../../api/requestApi";
function Category() {
  const [categories, setCategories] = useState([]);
  RequestApi(
    setCategories,
    "https://run.mocky.io/v3/3414a7d1-f71a-43f9-91e8-721a776811ec"
  );
  return (
    <div className="category">
      <p className="categoryTitle">دسته بندی ها</p>
      <div className="categoryContainer">
        {categories.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
export default memo(Category);
