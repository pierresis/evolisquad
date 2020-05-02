const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const sinon = require('sinon');
const _ = require('underscore');

const { Map } = require('../../main/domain/map');

describe('A Map', () => {
    const aBiomeFullOfGrass = () => ({
        generateTileType: sinon.fake.returns({type: 'GRASS'})
    });

    it('should be initialized with a Width, a Height and a Biome', () => {
        // Given
        const aBiome = aBiomeFullOfGrass();
        const aMap = new Map(10, 25, aBiome);

        // Then
        expect(aMap.width).to.equal(10);
        expect(aMap.height).to.equal(25);
        expect(aMap.biome).to.equal(aBiome);
    });

    it('should be initialied with a number of tiles equals to width x height', () => {
        // Given
        const width = 10;
        const height = 25;
        const aMap = new Map(width, height, aBiomeFullOfGrass());

        // When
        const tilesCount = _.reduce(aMap.tiles, (accum, row) => accum + row.length, 0);

        // Then
        expect(aMap.tiles.length).to.equal(width);
        expect(aMap.tiles[0].length).to.equal(height);
        expect(tilesCount).to.equal(width * height);
    });

    it('should infer its tile type from biome', () => {
         // Given
         const biome = aBiomeFullOfGrass();
         
         // When
         const aMap = new Map(10, 10, biome);

         // Then
         aMap.tiles.forEach(column => column.forEach(tile => expect(tile.type).to.equal('GRASS')));
    });
});
