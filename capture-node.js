class CaptureNode extends AudioWorkletProcessor {
    static get parameterDescriptors() {
      return [{ name: 'analysisWindowSize', defaultValue: 1024 }];
    }
  
    constructor() {
      super()
    }
  
    process(inputs, outputs, parameters) {
      const input = inputs[0][0];

      const analysis_window_size = parameters.analysisWindowSize[0]

      if (!this.shared_analysis_buffer) {
        this.shared_analysis_buffer = new SharedArrayBuffer(Float32Array.BYTES_PER_ELEMENT * analysis_window_size)
        this.analysis_samples_index = 0
      }

      const analysis_samples = new Float32Array(this.shared_analysis_buffer)

      for (let i = 0; i < input.length; i += 1) {
        analysis_samples[this.analysis_samples_index] = input[i]
        this.analysis_samples_index += 1

        if (this.analysis_samples_index === analysis_window_size) {
            this.port.postMessage(this.shared_analysis_buffer)
            this.analysis_samples_index = 0
        }
      }

      return true
    }
  }
  
  registerProcessor('capture-node', CaptureNode)