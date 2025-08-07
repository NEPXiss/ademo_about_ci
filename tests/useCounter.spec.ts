import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter hook behavior', () => {
  let hook: ReturnType<typeof renderHook<typeof useCounter>>['result'];

  beforeEach(() => {
    const { result } = renderHook(() => useCounter());
    hook = result;
  });

  it('starts with count = 0 and val = 1', () => {
    expect(hook.current.count).toBe(0);
    expect(hook.current.val).toBe(1);
  });

  it('increments count by 1 by default', () => {
    act(() => {
      hook.current.increment();
    });
    expect(hook.current.count).toBe(1);
  });

  it('respects updated increment value', () => {
    act(() => {
      hook.current.setVal(4);
    });

    act(() => {
      hook.current.increment();
    });

    expect(hook.current.count).toBe(4);
  });
});
