// Autobind decorator
export function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
  ) {
      const origionalMethod = descriptor.value;
      const adjDescriptor: PropertyDescriptor = {
          configurable: true,
          get(){
              const boundFn = origionalMethod.bind(this);
              return boundFn;
          }
      };
      return adjDescriptor;
  }
