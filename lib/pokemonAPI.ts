

// getPokemonList -> Get the first 151 pokemon(처음 151마리의 포켓몬을 얻습니다.) 
export async function getPokemonList(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const data = await response.json()
    return data.results
}

// getPokemon -> given a string "pikachu", get the information of pikachu
// 문자열 "pikachu"라도 피카츄의 정보를 얻습니다.
export async function getPokemon(name: string){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    return data;
}