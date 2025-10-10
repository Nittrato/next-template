'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home2, SearchNormal1, Archive, Setting } from 'iconsax-reactjs';

export default function Navbar() {
    // sirve para acentuar los botones
    const pathname = usePathname();

    return (
        <main className="main-nav">
            <nav className="nav">
                <Link href="/" className="nav-item anim">
                    {pathname === '/' ? <Home2 variant="Bold" /> : <Home2 />}
                </Link>
                <Link href="/search" className="nav-item anim">
                    {pathname === '/search' ? <SearchNormal1 variant="Bold" /> : <SearchNormal1 />}
                </Link>
                <Link href="/save" className="nav-item anim">
                    {pathname === '/save' ? <Archive variant="Bold" /> : <Archive />}
                </Link>
                <Link href="/config" className="nav-item anim">
                    {pathname === '/config' ? <Setting variant="Bold" /> : <Setting />}
                </Link>
            </nav>
        </main>
    );
}
