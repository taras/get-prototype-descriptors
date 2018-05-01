import getOwnPropertyDescriptors from 'object.getownpropertydescriptors';

const { getPrototypeOf, assign } = Object;

export default function getPrototypeDescriptors(constructor) {
  let prototype = getPrototypeOf(constructor);
  if (prototype && prototype !== getPrototypeOf(Object)) {
    return assign(getPrototypeDescriptors(prototype), getOwnPropertyDescriptors(constructor.prototype));
  } else {
    return getOwnPropertyDescriptors(constructor.prototype);
  }
}