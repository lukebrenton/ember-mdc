const emberMDC = {
  get(name) {
    if (!window.emberMDC) {
      window.emberMDC = {};
    }

    return window.emberMDC[name];
  },

  set(name, value) {
    if (!window.emberMDC) {
      window.emberMDC = {};
    }

    window.emberMDC[name] = value;
  }
};

export {emberMDC};
