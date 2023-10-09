
import PokemonGrid from '@/components/pokemon-grid'
import Image from 'next/image'
import { getPokemonList } from '@/lib/pokemonAPI'

export default async function Home() {
    const pokemonList = await getPokemonList();
      // 데이터를 로드합니다.
      // 클라이언트 컴포넌트에 데이터를 전달할 수 있습니다.
      // 텍스트 입력: 해당하는 포켓몬 카드를 필터링합니다.
      // 텍스트 입력 -> "use client": 입력을 처리하기 위해 useState에 액세스해야 합니다.
      // 텍스트가 입력되면 -> 현재 포켓몬 데이터를 필터링합니다.
      // ("use client") PokemonGrid -> (Text input, 검색 결과로 표시되는 모든 카드 표시)
 
      // 서버 컴포넌트에서 151개 포켓몬의 데이터를 가져올 것입니다.
      // PokemonGrid에 데이터를 전달합니다.

      // 1. PokemonGrid 컴포넌트를 생성합니다 (그리고 더 많은 컴포넌트).
      // 2. Pokemon API에서 데이터를 로드합니다 (151마리 포켓몬).
      // 3. 데이터를 PokemonGrid에 전달하여 API 호출 결과로 모든 포켓몬을 표시합니다.

      
  return (

    <PokemonGrid pokemonList={pokemonList} />
  )
}
