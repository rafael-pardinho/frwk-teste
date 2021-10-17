import { ReadLine } from 'readline';
import { MathFunctions } from './helper/mathFunctions';
import Input from './helper/inputs';

const rl: ReadLine = Input.getInput();

rl.question('Digite um número: ', (value: any) => {
  const math = new MathFunctions();
  const divisors = math.getDivisorsFromNumber(value);
  const primers = math.getPrimerNumbersFromDivisors(divisors);

  console.log('Números Divisores: \n', divisors);
  console.log('Divisores Primos: \n', primers);

  rl.close();
});
