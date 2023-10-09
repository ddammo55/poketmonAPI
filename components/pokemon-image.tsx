"use client";

import Image from "next/image";

export default function PokemonImage({image, name} : {image:string, name:string}) {
    return (
        <div>
                <Image 
                src={image}
                // src={pokemonObject.sprites.other['official-artwork'].front_default} 
                alt={`Picture of + ${name}`}
                priority
                fill
                style={{ "objectFit": "contain" }}
                className="transition-opacity opactity-0 duration-[2]"
                onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                 />
        </div>
    );
}

