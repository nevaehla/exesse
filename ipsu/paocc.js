class Example {
    constructor() {
        this._n = 42; // Initialize the property _n
        this._m = 24; // Another property for demonstration
    }

    someMethod() {
        let n = this._n,
            m = this._m,
            sum = n + m;

        console.log(`n: ${n}, m: ${m}, sum: ${sum}`);
    }
}

const example = new Example();
example.someMethod(); // Output: n: 42, m: 24, sum: 66
