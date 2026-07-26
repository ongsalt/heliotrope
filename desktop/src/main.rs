use freya::prelude::*;

fn main() {
    // *Start* your app with a window and its root component
    launch(LaunchConfig::new().with_window(WindowConfig::new(app)))
}

fn app() -> impl IntoElement {
    let mut count = use_state(|| 0);

    rect()
        .width(Size::fill())
        .height(Size::fill())
        .background(Color::WHITE)
        .color(Color::BLUE)
        .padding(Gaps::new_all(12.))
        .on_mouse_up(move |_| *count.write() += 1)
        .child(format!("Click to increase -> {}", count.read()))
}
