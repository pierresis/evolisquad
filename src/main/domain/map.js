module.exports = (() => {
    const Map = (width, height, biome) => {
        const tiles = Array(width).fill(Array(height));

        return Object.freeze({
            getWidth: () => width,
            getHeigth: () => height,
            getBiome: () => biome,
            getTiles: () => tiles
        });
    };


    const MapStaticAPI = {
        of: Object.freeze(Map)
    }

    return Object.freeze(MapStaticAPI);
})();