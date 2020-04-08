module.exports = (() => {
    const Population = (initialCount) => {
        const individuals = Array(initialCount);

        return Object.freeze({
            getPopulationCount: () => individuals.length
        });
    };


    const PopulationStaticAPI = {
        of: Object.freeze(Population)
    }

    return Object.freeze(PopulationStaticAPI);
})();