const sayHelloWorld = require('./sayHelloWorld')

describe('Say Hello tests', () => {
    it('Deve dizer Hello World', () => {
        const response = sayHelloWorld.sayHello()
        expect(response).toBe('Hello World!')
    })
    it('Deve dizer Hello Maxwell', () => {
        const response = sayHelloWorld.sayHello('Maxwell')
        expect(response).toBe('Hello Maxwell!')
    })
})