import { Server, Model } from "miragejs"

export function makeServer({ environment = "local" } = {}) {
  if (window.server) {
    window.server.shutdown()
  }

  window.server = new Server({
    environment,
    logging: true,

    models: {
      pokemon: Model,
    },

    seeds(server) {
      server.create( "pokemon", {
        number: '1',
        name: 'Bulbasaur',
        photoUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        type: 'grass'
      })
      server.create( "pokemon", {
        number: '4',
        name: 'Charmander',
        photoUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        type: 'fire'
      })
      server.create( "pokemon", {
        number: '7',
        name: 'Squirtle',
        photoUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        type: 'water'
      })
    },

    routes() {
      this.namespace = "api"

      this.get("/pokemons", schema => {
        return schema.pokemons.all()
      })
    },
  })

  // return server
}