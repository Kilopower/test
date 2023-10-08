function GoodsItem(props) {
  const { mainId, displayName, displayDescription, displayAssets, price } =
    props;
  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={displayAssets.full_background} alt={displayName} />
        <span className="card-title">{displayName}</span>
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
        <div className="card-action">
          <button className="btn">Buy</button>
          <span className="right">{price.regularPrice}</span>
        </div>
      </div>
    </div>
  );
}
export { GoodsItem };
