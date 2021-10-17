import readline from 'readline';

class Input {
  getInput() : readline.Interface {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return rl;
  }
}

export default new Input();
