const _ = require('underscore');

const generateTiles = (width, height, biome) => {
    return _.range(width)
            .map(() => _.range(height)
                .map(() => biome.generateTileType()));
};

class Map {
    constructor(width, height, biome) {
        this.width = width;
        this.height = height;
        this.biome = biome;
        this.tiles = generateTiles(width, height, biome);
    }
}

module.exports = {
    Map
};