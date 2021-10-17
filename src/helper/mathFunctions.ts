export class MathFunctions {
  getDivisorsFromNumber(value: number) {
    const divisors : number[] = [];

    for (let index: number = 1; index <= value; index++) {
      if (value % index === 0) {
        divisors.push(index);
      }
    }

    return divisors;
  }

  getPrimerNumbersFromDivisors(divisors: number[]) {
    const primers = divisors.filter((number) => {
      let index: number;

      for (index = 2; index <= Math.sqrt(number); index++) {
        if (number % index === 0) return false;
      }
      return true;
    });

    return primers;
  }
}
