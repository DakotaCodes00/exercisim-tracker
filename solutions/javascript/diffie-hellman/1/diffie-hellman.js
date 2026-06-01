//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPrime = (number) => {
  if (number <= 1){
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i ++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}

export class DiffieHellman {
  
  constructor(p, g) {
    if (p < 2 || g > p){
      throw new Error();
    }
    if (isPrime(p) && isPrime(g)){
      this.p = p;
      this.g = g;
    }
  }

  getPublicKey(privateKey) {
    if (privateKey < 2 || privateKey >= this.p){
      throw new Error();
    }
    return Math.pow(this.g, privateKey) % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p;
  }

  static getPrivateKey(p){
    return (Math.random() * (p - 1) + 1);
  }
  
}
