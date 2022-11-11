import GoodsItem from './GoodsItem';

function GoodsList({ goods, addGood }) {
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.offerId} {...item} addGood={addGood} />
      ))}
    </div>
  );
}

export default GoodsList;
