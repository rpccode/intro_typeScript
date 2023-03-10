export class Pokemon1 {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
import axios from 'axios';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // public imageUrl: string,
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves() {
        // const moves = 10;
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        
        return data.moves;
    }

}

export const charmander = new Pokemon( 4, 'Charmander' );

// charmander.id = 10;
// charmander.name = 'Mew';
// console.log(charmander.imageUrl);

// charmander.scream();
// charmander.speak();

// console.log( charmander.getMoves() );
charmander.getMoves();