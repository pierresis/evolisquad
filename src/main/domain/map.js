const _ = require('underscore');

module.exports = (() => {
    const Map = (width, height, biome) => {
        const tiles = _.range(width)
            .map(() => _.range(height)
                .map(() => biome.generateTileType()));

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