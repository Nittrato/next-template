import { peliculas } from '@/lib/data';
import Link from 'next/link';

export default function Peliculas() {
    return (
        <main className="flex flex-col mx-4 my-8 gap-4">
            <h1 className="text-h1">Peliculas</h1>
            <section className="flex flex-wrap justify-between w-full">
                {peliculas.map(pelicula => (
                    <Link href={`/peliculas/${pelicula.id}`} key={pelicula.id} className="hover:scale-[1.03] anim  flex flex-col gap-2 sm:w-[200px] w-[48%] py-5">
                        <img className="rounded-2xl" src={pelicula.image} />
                        <h2 className="text-h2">{pelicula.name}</h2>
                    </Link>
                ))}
            </section>
        </main>
    );
}
