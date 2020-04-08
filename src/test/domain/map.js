const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const _ = require('underscore');

const Map = require('../../main/domain/map');

describe('A Map', () => {
    it('should be initialized with a Width, a Height and a Biome', () => {
        // Given
        const aBiome = {};
        const aMap = Map.of(10, 25, aBiome);

        // When
        const width = aMap.getWidth();
        const height = aMap.getHeigth();
        const biome = aMap.getBiome();

        // Then
        width.should.equal(10);
        height.should.equal(25);
        biome.should.equal(aBiome);
    });

    it('should be initialied with a number of tiles equals to width x height', () => {
        // Given
        const width = 10;
        const height = 25;
        const aMap = Map.of(width, height, {});

        // When
        const tiles = aMap.getTiles();
        const tilesCount = _.reduce(tiles, (accum, row) => accum + row.length, 0);

        // Then
        tiles.length.should.equal(width);
        tiles[0].length.should.equal(height);
        tilesCount.should.equal(width * height);
    });
});
