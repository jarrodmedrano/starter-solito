import { assert, beforeAll, describe, expect, it, vi } from 'vitest';
import { renderHook, cleanup, fireEvent, screen, waitFor } from '@testing-library/react';
import { useDarkSide } from './useDarkSide';

describe('useDarkSide', () => {
  beforeAll(() => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true,
      media: '(prefers-color-scheme: dark)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });
  it('should default to dark theme', () => {
    const { result } = renderHook(() => useDarkSide());
    expect(result.current[0]).toBe('dark');
  });
});
