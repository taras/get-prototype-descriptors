import 'jest';
import 'object.getownpropertydescriptors/shim';

import getPrototypeDescriptors from 'get-prototype-descriptors';

it('is a function', () => {
  expect(getPrototypeDescriptors).toBeInstanceOf(Function);
});

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

let descriptors = getPrototypeDescriptors(C);

it('has descriptors from all classes', () => {
  expect(descriptors).toMatchObject({
    one: { value: expect.any(Function), enumerable: false, configurable: true },
    two: { value: expect.any(Function), enumerable: false, configurable: true },
    three: { value: expect.any(Function), enumerable: false, configurable: true },
    getterOnA: { get: expect.any(Function), enumerable: false, configurable: true },
    getterOnC: { get: expect.any(Function), enumerable: false, configurable: true }
  });
});

let created = Object.create(Object.prototype, descriptors);

it('respects inheritance by allowing getterA on B to overload getterA on A', () => {
  expect(created.getterOnA).toEqual('B');
});

