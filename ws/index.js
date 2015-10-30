var wsUrl = 'ws://localhost:3000';
var ws;
var writeMsg = function writeMsg(string){
	var p = document.createElement('p');
	p.style.wordWrap = "break-word";
	p.innerHTML = string;
	document.body.appendChild(p);
}
var onOpen = function onOpen (e) {
	writeMsg('connected');
}
var onClose = function onClose(e){
	writeMsg('disconnected');
}
var onMessage = function onMessage(e){
	writeMsg("<span style='color:blue;'>respond:"+e.data+"</span>");
}
var onError = function onError(e){
	writeMsg("<span style='color:red;'>respond:"+e.data+"</span>");
}
var webSocket = function webSocket(){
	ws = new WebSocket(wsUrl);
	ws.onopen = function(e){
		onOpen(e);
	};
	ws.onclose = function(e){
		onClose(e);
	};
	ws.onmessage = function(e){
		onMessage(e);
	};
	ws.onerror = function(e){
		onError(e);
	};
}

var open = document.getElementById('wsOpen');
var close = document.getElementById('wsClose');
var send = document.getElementById('wsSend');
var msg = document.getElementById('wsMsg');

open.addEventListener('click',function(e){
	if(!ws){
		webSocket();
	}
},false);
close.addEventListener('click',function(e){
	if(ws){
		ws.close();
		ws = null;
		// console.log('closeWs:'+ws);
	}
},false);
send.addEventListener('click',function(e){
	if(ws){
		var sendMsg = msg.value;
		ws.send(sendMsg);
	}
})