import GoodsItem from './GoodsItem';

function GoodsList(goods) {
  console.log(goods.goods);
  if (!goods.goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.goods.map((item) => (
        <GoodsItem key={item.offerId} {...item} />
      ))}
    </div>
  );
}

export default GoodsList;
