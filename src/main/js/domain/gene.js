class Gene {
    alleleScale = 100;

    constructor(allele) {
        this.allele = allele;
    }

    mutate() {
        let mutatedAllele = this.allele;
        if (Math.random() < 0.02 ) {
            mutatedAllele += Math.floor(Math.random() * this.alleleScale) - Math.round(this.alleleScale / 2);
            mutatedAllele = Math.max(0, mutatedAllele);
            mutatedAllele = Math.min(this.alleleScale, mutatedAllele);
        }
        return new this.constructor(mutatedAllele);
    }
}

export class SENSOR extends Gene {
    sense(individual, world, ctx) {
        const [x, y] = individual.getPosition();
        const minX = x - this.allele;
        const maxX = x + this.allele;
        const minY = y - this.allele;
        const maxY = y + this.allele;
        for(let posX = minX;  posX < maxX; posX++) {
            for(let posY = minY;  posY < maxY; posY++) {
                ctx[posX, posY] = world.getTile(posX, posY);
            }
        }
    }
};

export class BRAIN extends Gene {};
export class DIGESTIVES extends Gene {};
export class LOCOMOTOR extends Gene {};

function randomAlleleFrom(gene, left, right) {
    const ancestor = Math.random() < 0.5 ? left : right;
    return ancestor.genes[gene];
}

class SEX extends Gene {
    isCompatible(left, right) {
        throw new Error("Not Implemented");
    }

    isFemale() {
        throw new Error("Not Implemented");
    }

    isMale() {
        throw new Error("Not Implemented");
    }

    mutate() {
        // noop
    }
};

export class MALE extends SEX {
    constructor() {
        super(1);
    }

    isCompatible(male, other) {
        return other.isFemale();
    }

    isFemale() {
        return false;
    }

    isMale() {
        return true;
    }
}

export class FEMALE extends SEX {
    constructor() {
        super(0);
    }

    isCompatible(male, other) {
        return other.isMale();
    }

    isFemale() {
        return true;
    }

    isMale() {
        return false;
    }
}




function conceive(male, female) {
    const childGenes = [];
    for(gene in left.genes) {
        childGenes.push(
            randomAlleleFrom(gene, male, female).mutate()
        );
    }
    return childGenes;
}

export class REPRODUCTOR extends Gene {
    mate(male, female) {
        const children = [];
        for(let child = 0; child < this.allele; child++) {
            children.add(new Organisme(conceive(male, female)));
        }
        female.startPregnancy(children);
    }

    mutate() {
        // noop
    }
};