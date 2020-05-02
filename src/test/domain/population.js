const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

const { Population } = require('../../main/domain/population');

describe('A Population', () => {
    it('should return the number of individuals in population', () => {
        // Given
        const aPopulation = new Population(10);

        // When
        const count = aPopulation.populationCount;

        // Then
        count.should.equal(10);
    });
});
