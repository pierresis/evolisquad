const { setWorldConstructor } = require("cucumber");

class EvoliWorld {
    constructor() {
    }

    getMap() {
        return {
            getTiles: () => []
        };
    }

    getPopulationCount() {
        return 0;
    }
}

setWorldConstructor(EvoliWorld);