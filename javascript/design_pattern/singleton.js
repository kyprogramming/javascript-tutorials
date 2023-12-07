class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  
    // Other methods and properties can be added here
    Count;
  }
  
  const instance1 = new Singleton();
  instance1.Count = 1;
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2); // true

  console.log('Acess count from Instance2', instance2.Count);