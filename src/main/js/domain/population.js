class Population {
    constructor(initialCount) {
        this.individuals = Array(initialCount);
    }

    get populationCount() {
        return this.individuals.length;
    }
}

module.exports = {
    Population
};