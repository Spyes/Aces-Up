import { Socket } from 'phoenix';

let socket, channel;

export function setupSocket() {
  socket = new Socket('/socket', {params: {token: window.userToken}});
  socket.connect();
  channel = socket.channel("rooms:lobby", {});
  channel.join()
    .receive("ok", resp => {
      // set initial state
      console.log(resp);
    })
    .receive("error", resp => {
      alert("unable to join");
    });
}

export function sendMessage(msg, params = {}) {
  channel.push(msg, params).then(resp => {console.log(resp)});
}

export function getMessage(msg, callback = () => {}) {
  channel.on(msg, callback);
}
