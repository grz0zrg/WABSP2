# WABPS 2

Same as [WABPS](https://github.com/grz0zrg/WABPS)

Web Audio high quality spectogram from biquad bandpass filters

This is a complete demo of a real-time version (mic input) of my high quality spectogram implementation.

It use an audio worklet to capture N samples from audio input continuously and pass it to the main context as a SharedArrayBuffer, the data is then windowed to avoid abrupt start & end analysis and a set of bandpass filters (which equal to the canvas height) are then applied over to extract each frequency bands.

The demo can get unstable if there is not enough processing power, this can be solved by reducing context sample rate, by increasing window size or by reducing canvas height.

Both bandpass & web audio analyzer node are compared, bandpass implementation is much slower but there is much less limitations and it produce higher general quality.

The example code is straightforward and support linear and logarithmic rendering.