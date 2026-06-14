export const Movies = () => {
  return (
    <section id="films" className="flex flex-col items-center w-screen h-screen gap-8">

        <div className="text-2xl">
            Filmography
        </div>

        <div className="grid grid-cols-2 grid-rows-6 gap-3">

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">1998</div>
                <div className="film-title">Following</div>
                <div className="text-[10px] w-50">A young writer follows strangers through London, blurring the line between observer and predator.</div>
            </div>

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2000</div>
                <div className="film-title">Memento</div>
                <div className="text-[10px] w-50">A man with short-term memory loss hunts his wife's killer — told backwards.</div>
            </div>

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2002</div>
                <div className="film-title">Insomnia</div>
                <div className="text-[10px] w-50">A detective's guilt unravels under an Alaskan midnight sun that never sets.</div>
            </div>

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2005</div>
                <div className="film-title">Batman Begins</div>
                <div className="text-[10px] w-50">Fear, identity, and myth — a superhero reborn as a noir tragedy.</div>
            </div>

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2006</div>
                <div className="film-title">The Prestige</div>
                <div className="text-[10px] w-50">Two rival magicians destroy everything they love in pursuit of the perfect trick.</div>
            </div>

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2008</div>
                <div className="film-title">The Dark Knight</div>
                <div className="text-[10px] w-50">Chaos versus order — a crime epic that haunts the genre it transcended.</div>
            </div>

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2010</div>
                <div className="film-title">Inception</div>
                <div className="text-[10px] w-50">A thief enters dreams to plant an idea, descending through layers of shared reality.</div>
            </div>

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2014</div>
                <div className="film-title">Interstellar</div>
                <div className="text-[10px] w-50">Love and gravity — the only forces that transcend the dimensions of space-time.</div>
            </div>

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2017</div>
                <div className="film-title">Dunkirk</div>
                <div className="text-[10px] w-50">Three time scales, one beach — survival stripped to its rawest frequency.</div>
            </div>
            
            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2020</div>
                <div className="film-title">Tenet</div>
                <div className="text-[10px] w-50">An unnamed Protagonist navigates a world where entropy flows in both directions.</div>
            </div>

            <div className="flex flex-col gap-2 items-center bg-gray-800 border-2 pt-3">
                <div className="film-year">2023</div>
                <div className="film-title">Oppenheimer</div>
                <div className="text-[10px] w-50">The man who split the atom — and fractured the conscience of civilisation.</div>
            </div>

        </div>
    </section>
  )
}

export default Movies;