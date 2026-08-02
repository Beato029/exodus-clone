const coins = [
  { name:"Bitcoin",     symbol:"BTC",  color:"#F0B90B", src:"img/bitcoin.svg",    address:"bc1q2qhlvny8al85lhpqnuhxds0ecvexkcadv0mdrg",      val:"0", usd:"0.00", active:true},
  { name:"Ethereum",    symbol:"ETH",  color:"#8C9EFF", src:"img/ethereum.svg",   address:"0x03c682F3AFB134405A21C00EC99BD718Ae59CDa7",      val:"0", usd:"0.00"},
  { name:"Tether USD",  symbol:"USDT", color:"#26A17B", src:"img/tether.svg",     address:"0x03c682F3AFB134405A21C00EC99BD718Ae59CDa7",      val:"0", usd:"0.00"},
  { name:"BNB",         symbol:"BNB",  color:"#F7931A", src:"img/bnb.svg",        address:"terra1w4mv4357keym5c4zaxc9qakfn9mzme7z0gxckh",    val:"0", usd:"0.00"}, 
  { name:"USDC",        symbol:"USDC", color:"#2775CA", src:"img/usdc.svg",       address:"5uoQLgYThRh6KRQhtD2jzCHWbKpwDzfrMpoVQWs2t14o",    val:"0", usd:"0.00"},
  { name:"Solana",      symbol:"SOL",  color:"#14F195", src:"img/solana.svg",     address:"5uoQLgYThRh6KRQhtD2jzCHWbKpwDzfrMpoVQWs2t14o",    val:"0", usd:"0.00"},
  { name:"Cardano",     symbol:"ADA",  color:"#2E6FF2", src:"img/cardano.svg",    address:"addr1qym88s0rw9l9jendwqewvawuvzruzpsq4gmnunyehd97qvyq9x5w3x37r0a0px3gggjhcueqheh8uvwkc09ft4awse7shc55ke", val:"0", usd:"0.00"},
  { name:"Dogecoin",    symbol:"DOGE", color:"#C9A227", src:"img/doge.svg",       address:"DDgzHfeMJzmxHQjAnmiJ6nu9eCTuRyCe3H",              val:"0", usd:"0.00"},
  { name:"TRON",        symbol:"TRX",  color:"#FF4757", src:"img/tron.svg",       address:"TQYAopHSFU4Tnb3wsaHwDtUysP3AW6P8FQ",              val:"0", usd:"0.00"},
  { name:"Polkadot",    symbol:"DOT",  color:"#E6007A", src:"img/polkadot.svg",   address:"1vSTg3nADResCzdbsAgaSbRMRpCW9bzRmT8i2zcPtrUon88", val:"0", usd:"0.00"},
  { name:"Polygon",     symbol:"POL",  color:"#9C6BFF", src:"img/polygon.svg",    address:"0x03c682F3AFB134405A21C00EC99BD718Ae59CDa7",      val:"0", usd:"0.00"},
  { name:"Litecoin",    symbol:"LTC",  color:"#4FB6E8", src:"img/lite.svg",       address:"ltc1q6qxcr2d7smf7kx2xqnm33q9t8c0ksnp6jpjzw5",     val:"0", usd:"0.00"},
  { name:"Avalanche",   symbol:"AVAX", color:"#E84142", src:"img/avalanche.svg",  address:"0x03c682F3AFB134405A21C00EC99BD718Ae59CDa7",      val:"0", usd:"0.00"},
  { name:"Shiba Inu",   symbol:"SHIB", color:"#FF7A3C", src:"img/shiba.svg",      address:"0x03c682F3AFB134405A21C00EC99BD718Ae59CDa7",      val:"0", usd:"0.00"},
  { name:"Toncoin",     symbol:"TON",  color:"#2AABEE", src:"img/ton.svg",        address:"0x03c682F3AFB134405A21C00EC99BD718Ae59CDa7",      val:"0", usd:"0.00"}
];

const tabsEl           = document.getElementById('tabs');
const arrowL           = document.getElementById('arrowLeft');
const arrowR           = document.getElementById('arrowRight');
const fadeL            = document.getElementById('fadeLeft');
const fadeR            = document.getElementById('fadeRight');
const coin_img         = document.getElementById("coin-image");
const mainBtns         = document.querySelectorAll(".main-button")
const coin_val         = document.querySelector(".coin-value");
const coin_name        = document.querySelector(".coin-name");
const coin_usd         = document.querySelector(".coin-usd");

const badgeSVG = `<svg viewBox="0 0 24 24"><path fill="#fff" d="M12 2 L15 5 L12 8 L9 5 Z M12 16 L15 19 L12 22 L9 19 Z M3 11 L6 8 L9 11 L6 14 Z M15 11 L18 8 L21 11 L18 14 Z M9.5 11 L12 8.5 L14.5 11 L12 13.5 Z"/></svg>`;

coins.forEach((coin, i) => {
  const btn = document.createElement('button');
  btn.className = 'tab' + (coin.active ? ' active' : '');
  btn.setAttribute('role','tab');
  btn.setAttribute('aria-selected', coin.active ? 'true' : 'false');
  btn.dataset.index = i;
  btn.style.setProperty('--accent', coin.color);

  btn.innerHTML = `
    <span class="row">
      <span class="label">${coin.name}</span>
      ${coin.badge ? `<span class="chain-badge">${badgeSVG}</span>` : ''}
    </span>
    <span class="value">0 ${coin.symbol}</span>
    <span class="underline"></span>
  `;

  btn.addEventListener('click', () => {
    tabsEl.querySelectorAll('.tab').forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected','false');
    });

    btn.classList.add('active');
    btn.setAttribute('aria-selected','true');

    activeCoin = coin;

    coin_img.src = coin.src;
    coin_val.textContent = `${coin.val}`;
    coin_val.style.setProperty("color", coin.color);
    coin_name.textContent = `${coin.symbol}`;
    coin_name.style.setProperty("color", coin.color);
    coin_usd.textContent = `${coin.usd}`;

    btn.scrollIntoView({ behavior:'smooth', inline:'nearest', block:'nearest' });

    mainBtns.forEach(btn => {
      btn.style.setProperty("border-color", coin.color)
    });
  });

  tabsEl.appendChild(btn);
});

let activeCoin = coins.find(c => c.active) || coins[0];
coin_img.src = activeCoin.src;
coin_val.textContent = `${activeCoin.val}`;
coin_val.style.setProperty("color", activeCoin.color);
coin_name.textContent = `${activeCoin.symbol}`;
coin_name.style.setProperty("color", activeCoin.color);
coin_usd.textContent = `${activeCoin.usd}`;


mainBtns.forEach(btn => {
  btn.style.setProperty("border-color", activeCoin.color);
})


function updateScrollUI(){
  const max = tabsEl.scrollWidth - tabsEl.clientWidth;
  const x = tabsEl.scrollLeft;
  arrowL.disabled = x <= 1;
  arrowR.disabled = x >= max - 1;
  fadeL.style.opacity = x <= 1 ? '0' : '1';
  fadeR.style.opacity = x >= max - 1 ? '0' : '1';
}

function scrollByTab(direction){
  const amount = 280 * direction;
  tabsEl.scrollBy({ left: amount, behavior:'smooth' });
}

arrowL.addEventListener('click', () => scrollByTab(-1));
arrowR.addEventListener('click', () => scrollByTab(1));
tabsEl.addEventListener('scroll', updateScrollUI, { passive:true });
window.addEventListener('resize', updateScrollUI);

updateScrollUI();

// Overlay
function openReceiveOverlay() {
  const overlay                 = document.getElementById("overlay");
  const coin_img_overlay        = document.getElementById("coin-image-overlay"); 
  const coin_name_overlay       = document.getElementById("coin-name-overlay");
  const receive_address_overlay = document.querySelector(".receive-address-overlay");

  overlay.style.display = "flex";
  coin_img_overlay.src = activeCoin.src;
  
  coin_name_overlay.textContent = `Your ${activeCoin.name} Wallet`;
  receive_address_overlay.textContent = `${activeCoin.address}`;
  receive_address_overlay.style.setProperty("color", activeCoin.color);

  setTimeout(() => {
    overlay.classList.add("active");
  }, 10);
}

function closeReceiveOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("active");
  
  setTimeout(() => {
    overlay.style.display = "none";
  }, 400); // durata animazione
}

function copyAddress() {
  const currentAddress = `${activeCoin.address}`; // ← cambia qui

  navigator.clipboard.writeText(currentAddress);

  const container = document.querySelector(".receive-address-nav-overlay");

  container.classList.add("copied");

  setTimeout(() => {
    container.classList.remove("copied");
  }, 1000);
}

function openSendOverlay() {
  const sendOverlay = document.getElementById("send");  
  sendOverlay.style.display = "flex";

  const error_no_fund = document.getElementById("error-no-fund");
  error_no_fund.textContent = `You don't hold ${activeCoin.name}`;
  

  setTimeout(() => {
    sendOverlay.classList.add("active");
  }, 10);
}

function closeSendOverlay() {
  const sendOverlay = document.getElementById("send");
  sendOverlay.classList.remove("active");

  setTimeout(() => {
    sendOverlay.style.display = "none";
  }, 400);
}