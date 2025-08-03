export function startFastRefresh() {
  const ws = new WebSocket("/_next/fast-refresh");
  ws.addEventListener('message', (event) => {
    console.log(event);
    if (event.data === "refresh") {
      location.reload();
    }
  });
}

startFastRefresh();