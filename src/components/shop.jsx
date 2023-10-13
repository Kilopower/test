import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./config";
import { Preloader } from "./preloader";
import { GoodsList } from "./goodsList";
import { Cart } from "./cart";
function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState([]);
  const [order, setOrder] = useState([]);
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}
export { Shop };
//сделать функцию, котрая будет спускаться в каждый товар , вешаться на кнопку купить и по нажатию будет добавлять состояние в ордер, будет меняться ордер, в корзине будет меняться в количестве
//надо учесть , что один и тот же товар может быть добавлен несколько раз
