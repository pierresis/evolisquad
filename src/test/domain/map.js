const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const sinon = require('sinon');
const _ = require('underscore');

const Map = require('../../main/domain/map');

describe('A Map', () => {
    const aBiomeFullOfGrass = () => ({
        generateTileType: sinon.fake.returns({type: 'GRASS'})
    });

    it('should be initialized with a Width, a Height and a Biome', () => {
        // Given
        const aBiome = aBiomeFullOfGrass();
        const aMap = Map.of(10, 25, aBiome);

        // When
        const width = aMap.getWidth();
        const height = aMap.getHeigth();
        const biome = aMap.getBiome();

        // Then
        expect(width).to.equal(10);
        expect(height).to.equal(25);
        expect(biome).to.equal(aBiome);
    });

    it('should be initialied with a number of tiles equals to width x height', () => {
        // Given
        const width = 10;
        const height = 25;
        const aMap = Map.of(width, height, aBiomeFullOfGrass());

        // When
        const tiles = aMap.getTiles();
        const tilesCount = _.reduce(tiles, (accum, row) => accum + row.length, 0);

        // Then
        expect(tiles.length).to.equal(width);
        expect(tiles[0].length).to.equal(height);
        expect(tilesCount).to.equal(width * height);
    });

    it('should infer its tile type from biome', () => {
         // Given
         const aMap = Map.of(10, 10, aBiomeFullOfGrass());

         // When
         const tiles = aMap.getTiles();

         // Then
        tiles.forEach(column => column.forEach(tile => expect(tile.type).to.equal('GRASS')));
    });
});
