// src/types/aos.d.ts
declare module 'aos' {
    interface AosOptions {
      duration?: number;
      offset?: number;
      once?: boolean;
      easing?: string;
      delay?: number;
      anchorPlacement?: string;
    }
  
    export function init(options?: AosOptions): void;
    export function refresh(): void;
  }