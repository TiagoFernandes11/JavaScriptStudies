class Stopwatch {
  #duration;
  #started;
  #starttime;

  constructor() {
    this.#duration = 0;
    this.#started = false;
    this.#starttime = 0;
  }

  stop() {
    if (this.#started) {
      this.#started = false;
      console.log((Date.now() - this.#starttime) / 1000);
    } else {
      throw new Error();
    }
  }

  start() {
    if (!this.#started) {
      this.#started = true;
      this.#starttime = Date.now();
    } else {
      throw new Error();
    }
  }

  reset() {
    this.#duration = 0;
  }
}

stopwatch = new Stopwatch();
