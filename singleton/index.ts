export class Singleton {
    private static instance: Singleton;

    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    foo() {
        console.log(12);
    }
}

// Usage:
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

console.log(`Are Singleton works: ${s1 === s2}`); // true
s1.foo(); // 12
