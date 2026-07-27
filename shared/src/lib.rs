use std::sync::Arc;

pub struct Peer {}

pub trait Discovery {
    fn start(&self, listener: Arc<dyn PeerListener>);
    fn advertise(&self, name: String);
    fn stop(&self);
}

pub trait PeerListener {
    fn on_found(&self, peer: Peer);
    fn on_lost(&self, peer_id: String);
}
