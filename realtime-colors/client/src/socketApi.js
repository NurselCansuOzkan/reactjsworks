import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Sunucuya bağlanılıyor...");
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("Sunucuya bağlandı"));
};

export const send = (color) => {
  // emit->Clienttayken backende, backenddeyken clienta data gönderimi sağlar
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
    socket.on('receive', (color) =>{
        console.log(color);
        cb(color);
    })
}
