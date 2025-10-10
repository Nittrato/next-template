import { peliculas } from '@/lib/data';
import Link from 'next/link';
import { Add } from 'iconsax-reactjs';

export default function PeliculaPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const pelicula = peliculas.find(p => p.id === id);
    if (!pelicula) return <div>Película no encontrada</div>;

    const { name, image, review, description } = pelicula;

    return (
        <main>
            <Link className="btn-trans fixed anim top-0 right-0 m-4 z-10" href="/">
                <Add className="transform rotate-45" />
            </Link>
            <div className="relative">
                <img src={image} alt={name} className="w-full h-[480px] object-cover mb-4 opacity-80" />
                <div className="absolute h-40 mt-auto inset-0 bg-gradient-to-t from-[#111]/100 to-transparent" />
            </div>

            <div className="mx-4">
                <p className="text-p text-gray-400">{review}</p>
                <h1 className="text-h1 font-medium mb-4">{name}</h1>
                <h2 className="text-gray-400 text-h2 mt-2 text-balance">{description}</h2>
            </div>
        </main>
    );
}
