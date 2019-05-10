export default class Complex {
    public im: number;
    public re: number;

    public constructor(a: number, b: number) {
        this.re = a;
        this.im = b;
    }
    
    public add(c: Complex): Complex {
      const re = this.re + c.re;
      const im = this.im + c.im;
      return new Complex(re, im);
    }
    
    public mult(c: Complex): Complex {
      const re = this.re * c.re - this.im * c.im;
      const im = this.re * c.im + this.im * c.re;
      return new Complex(re, im);
    }
  }
  
  export function dft(x: Complex[]): DFTResult[] {
    const X: DFTResult[] = [];
    const N = x.length;
    for (let k = 0; k < N; k++) {
      let sum = new Complex(0, 0);
      for (let n = 0; n < N; n++) {
        const phi = (TWO_PI * k * n) / N;
        const c = new Complex(cos(phi), -sin(phi));
        sum = sum.add(x[n].mult(c));
      }
      sum.re = sum.re / N;
      sum.im = sum.im / N;
      
      let freq = k;
      let amp = sqrt(sum.re * sum.re + sum.im * sum.im);
      let phase = atan2(sum.im, sum.re);
      X[k] = { re: sum.re, im: sum.im, freq, amp, phase };
    }
    return X;
  }

  export type DFTResult = {
    re: number;
    im: number;
    freq: number;
    amp: number;
    phase: number;
  };