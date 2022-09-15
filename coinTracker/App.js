import { useState, useEffect } from "react";

function PurchaseInput({ price, symbol }) {
  const [dollar, setDollar] = useState(0);
  const [amount, setAmount] = useState(0);
  const onInput = (event) => {
    setDollar(event.target.value);
    setAmount((event.target.value / price).toFixed(8));
  };
  useEffect(() => {
    setDollar(0);
    setAmount(0);
  }, [price]);
  return (
    <div>
      <h5>주문 가격 : {price.toFixed(8)}</h5>
      <h5>
        주문 수량 : {amount > 0 ? amount : 0} {symbol}
      </h5>
      <label htmlFor="dollar">USD </label>
      <input
        id="dollar"
        type="number"
        placeholder="0"
        onInput={onInput}
        value={dollar > 0 ? dollar : ""}
      ></input>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setSelectedCoin(json[0]);
        setLoading(false);
      });
  }, []);
  const onChange = (event) => {
    setSelectedCoin(coins[event.target.selectedIndex]);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}: ${coin.quotes.USD.price.toFixed(3)}
              USD)
            </option>
          ))}
        </select>
      )}
      <hr />
      {selectedCoin ? (
        <PurchaseInput
          price={selectedCoin.quotes.USD.price}
          symbol={selectedCoin.symbol}
        />
      ) : null}
      {/* <PurchaseInput price={selectedCoin.quotes.USD.price} /> */}
    </div>
  );
}

export default App;
