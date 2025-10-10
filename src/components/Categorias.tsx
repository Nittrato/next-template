import { categorias } from '@/lib/data';

export default function Categorias() {
    return (
        <main className="flex flex-col mx-4 my-8 gap-4">
            <h1 className="text-h1">Categorias</h1>
            <section className="flex flex-row gap-5 overflow-x-auto overflow-hidden">
                {categorias.map(categoria => (
                    <div className="categoria" key={categoria.slug}>
                        <h2 className="text-h2">{categoria.name}</h2>
                    </div>
                ))}
            </section>
        </main>
    );
}
