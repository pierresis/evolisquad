const BRAIN = new Symbol("BRAIN");
const DIGESTIVES = new Symbol("DIGESTIVES");
const LOCOMOTOR = new Symbol("LOCOMOTOR");
const REPRODUCTOR = new Symbol("REPRODUCTOR");
const SENSOR = new Symbol("SENSOR");
const SEX = new Symbol("SEX");

function initContext(sensor) {
    const ctx = new Array(sensor.allele);
    for(let i = 0; i < ctx.length; i++) {
        ctx.push(new Array(sensor.allele));
    }

    return ctx;
}

class Organisme {
    constructor(genes) {
        this.genes  = genes;
        this.ctx = initContext(genes[SENSOR]);
        this.position = [0, 0];
        this.clock = 0;
    }

    setPosition(x, y) {
        this.position = [x, y];
    }

    sense(world) {
        this.genes[SENSOR].sense(this, world, this.ctx);
    }

    mate(other) {
        const sex = this.genes[SEX];
        if(sex.isCompatible(this, other)) {
            sex.mate(this, other);
        }
    }
    
    eat(other) {
        this.genes[DIGESTIVES].eat(this, other);
    }

    act(ctx) {
        this.genes[BRAIN].act(this, ctx);
    }
}