wsurl = "wss://testnet.bitmex.com/realtime";

subs = '{"op": "subscribe", "args": ["quote", "tradeBin1m", "tradeBin5m", "tradeBin1h", "tradeBin1d"]}';

var ws = new WebSocket("wsurl");

ws.onopen = function (event) {
    ws.send(subs)
}

ws.onmessage = function (event) {
    console.log(event.data);
}

