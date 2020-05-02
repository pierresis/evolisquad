const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();
const sinon = require('sinon');
const _ = require('underscore');

const Simulation = require('../../main/domain/simulation');

describe('A Simulation', () => {
    it('should be initialized with a Width, a Height and a Biome', (done) => {
        // Given
        const aSimulation = Simulation.of();

        // When
        console.log('will start');
        aSimulation.start();
        console.log('will pause');
        aSimulation.pause(99);
        setTimeout(() => {
            console.log('will resume');
            aSimulation.resume();
        }, 10);
        console.log('will stop');
        aSimulation.stop(100);
        // Then
        setTimeout(() => done(), 5000);
    });
});
