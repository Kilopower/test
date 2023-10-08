import { GoodsItem } from "./goodsItem";
function GoodsList(props) {
  const { goods = [] } = props;
  if (!goods.length) {
    return <h3>Nothing is here </h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}
export { GoodsList };
