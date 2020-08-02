import * as _ from 'lodash';
import {GrassBiome, World} from './main/map';

const world = new World(10, 15, new GrassBiome());

console.log(world.toString());