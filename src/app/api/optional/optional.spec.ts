import {Optional} from './optional';

describe('OptionalSpec', () => {

  const originalValue = 'value';
  const providedValue = 'providedValue';

  it('should be present', () => {
    Optional.of(originalValue).ifPresent(value => expect(value).toEqual(originalValue))
  });

  it('should not be present', () => {
    let iterator = 0;
    Optional.of(null)
      .ifPresent(() => iterator--)
      .orElse(() => iterator++);
    Optional.of(undefined).ifPresent(() => iterator--)
      .orElse(() => iterator++);
    expect(iterator).toEqual(2);
  });

  it('should get original value ', () => {
    const value = Optional.of(originalValue).getOrProvide(() => providedValue);
    expect(value).toEqual(originalValue);
  });

  it('should get provided value ', () => {
    const value = Optional.of(null).getOrProvide(() => providedValue);
    const value2 = Optional.of(undefined).getOrProvide(() => providedValue);
    expect(value).toEqual(providedValue);
    expect(value2).toEqual(providedValue);
  });

});
