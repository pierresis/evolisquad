const _ = require('underscore');

module.exports = (() => {
    let simulationSingleton = null;

    const Simulation = () => {
        let isStarted = false;
        const pauseKeyFrames = [];
        let currentCycle = 0;
        let maxCycle = 0;

        const shouldPause = () => (!_.isEmpty(pauseKeyFrames) && pauseKeyFrames[0] == currentCycle) ? true : false;
    
        const run = () => {
            if (!isStarted) throw new Error('Simulation is stopped');
            if (maxCycle != 0 && maxCycle <= currentCycle) {
                isStarted = false;
                console.log(`Stopping simulation at round ${currentCycle}/${maxCycle}`);
                return;
            }

            console.log(`Running simulation round ${currentCycle}/${maxCycle}`);

            if(shouldPause()) {
                pauseKeyFrame = pauseKeyFrames.shift();
                console.log('pausing ...');
                return;
            }
            setTimeout(() => run(currentCycle+=1, maxCycle));
        }

        return Object.freeze({
            start: () => {
                isStarted = true;
                setTimeout(() => run(0, maxCycle));
            },
            pause: pauseCycle => {
                pauseKeyFrames.push(pauseCycle);
                pauseKeyFrames.sort((a, b) => a - b);
            },
            resume: () => {
                setTimeout(() => {
                    console.log('Resuming...');
                    run(currentCycle, maxCycle);
                })
            },
            stop: stopCycle => {
                if (maxCycle != 0) {
                    throw new Error(`Simulation has already beeln scheduled to stop at cycle ${maxCycle}`);
                }
                console.log('setting maxCycle');
                maxCycle = stopCycle;
            }
        });
    }

    const SimulationStaticAPI = {
        of: () => {
            if (simulationSingleton == null) {
                simulationSingleton = Simulation();
            }
            return simulationSingleton;
        }
    };

    return Object.freeze(SimulationStaticAPI);
})();