# WABPS 2

Same as [WABPS](https://github.com/grz0zrg/WABPS)

Web Audio high quality spectogram from biquad bandpass filters

This is a complete demo of a real-time version (mic input) of my high quality spectogram implementation.

It use an audio worklet to capture N samples from audio input continuously and pass it to the main context as a SharedArrayBuffer, the data is then windowed to avoid abrupt start & end analysis and a set of bandpass filters (which equal to the canvas height) are then applied over to extract each frequency bands.

The demo contain code for up to 96db bp rolloff by simple biquad filters cascade, this may improve quality considerably however it is not perfect due to filter design thus it may cause ringing issues as order increase (spectrum may look delayed / smoothed), one can only reduce this by slightly increasing the bandwidth

The bank filters default rolloff is 12db by default, a function argument name must be changed to select rolloff (24db, 48db, 96db)

Advantages over Web audio analyzer node :

* not limited to a fixed number of samples (not even need to be power of two)
* higher quality since you can cascade bandpass filters (this may come with other inconvenient due to the filter design)
* just higher quality and way more flexible (and slower, still fine for realtime by chosing parameters carefully)

The demo can get unstable if there is not enough processing power, this can be solved by reducing context sample rate, by increasing window size or by reducing canvas height.

Both bandpass & web audio analyzer node are compared.

The example code is straightforward and support linear and logarithmic rendering.