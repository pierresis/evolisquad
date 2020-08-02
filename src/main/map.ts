import _ from "lodash";

interface Tile {
    toString(): string
}

class GrassTile implements Tile {
    toString() {
        return "#";
    }
}

interface Biome {
    fill(tiles: Tile[][]): Tile[][]
}

export class GrassBiome implements Biome {
    fill(tiles: Tile[][]): Tile[][] {
        for(let line = 0; line < tiles.length; line++) {
            for(let column = 0; column < tiles[line].length; column++) {
                tiles[line][column] = new GrassTile();
            }
        }
        return tiles;
    }

}

export class World {
    private width: number;
    private height: number;
    private biome: Biome;
    private tiles: Array<Array<Tile>>;

    private static generateTiles(width: number, height: number, biome: Biome): Array<Array<Tile>> {
        /*
        const map = [
            [0, 1, 2], //
            [0, 1, 2],
            [0, 1, 2]
        ];
        map[line][col] == map[y][x];
        */
        return biome.fill(_.range(height).map(i => _.range(width)));;
    }

    public constructor(width: number, height: number, biome: Biome) {
        this.width = width;
        this.height = height;
        this.biome = biome;
        this.tiles = World.generateTiles(width, height, biome);

    }

    public toString(): string {
        let repr: string = "";
        for(let line = 0; line < this.height; line++) {
            repr += "--";
            for(let column = 0; column < this.width; column++) {
                repr += "|";
                repr += this.tiles[line][column].toString();
            }
        }
        return repr;
    }
}