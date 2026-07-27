# Heliotrope
hehe

# Design Notes
`shared` must:
- publish app state (ui request)
- manage sqlite
- expose data api: mutation and querying
- handle sync: negotiation, merge
- own data directory

Platform must
- subscribe app state (per domain)
- request sync
- implement Discovery, SocketBinder, SecretStore
- ui
  - sync: discover, pair, transfer
  - query
  - view
  - add
  - edit

SocketBinder: pin sockets to the Wi-Fi network; noop on desktop
Local peer simulation

## `shared` API
- init()

### Data
- add image
- remove image
- `query(offset, limit) -> Flow<Vec<Image>>`
- update image (associate with tag). mark the entire table `dirty` for ui
- add tag
- update tag
- remove tag

### Sync
- init(Discovery)
- `list_pairable() -> Flow<Vec<PeerInfo>>`
- `pair(PeerInfo) -> Result<Peer, ...>`
- start(self: &Peer)
- drop()