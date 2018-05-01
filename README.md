# get-prototype-descriptors

[![Build Status](https://travis-ci.org/taras/get-prototype-descriptors.svg?branch=master)](https://travis-ci.org/taras/get-prototype-descriptors) [![npm version](https://badge.fury.io/js/get-prototype-descriptors.svg)](https://badge.fury.io/js/get-prototype-descriptors)

Returns all descriptors of a prototype chain while respecting prototype inheritance. 

## Installation

```
npm install --save get-prototype-descriptors
```

## Usage

```js
class A {
  one() {}
  get getterOnA() {
    return 'A';
  }
}

class B extends A {
  two() {}
  get getterOnA() {
    return 'B';
  }
}

class C extends B {
  three() {}
  get getterOnC() {
    return 'C'
  }
}

import getPrototypeDescriptors from 'get-prototype-descriptors';

let descriptors = getPrototypeDescriptors(C);
```

The descriptors will be flattened and descriptors from child classes will overload those of the parent.

## License

MIT License
