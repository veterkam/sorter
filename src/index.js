class Sorter {
  constructor() {
    this.array = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array.slice();
  }

  sort(indices) {
    indices.sort( (a, b) => a - b );
    let buf = [];
    for(let i = 0; i < indices.length; i++) {
      buf.push(this.array[indices[i]]);
    }

    buf.sort(this.comparator);

    for(let i = 0; i < indices.length; i++) {
      this.array[indices[i]] = buf[i];
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;