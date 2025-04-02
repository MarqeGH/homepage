import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col items-center w-1/2 text-center pt-5 mx-auto">
            <Image
                className="rounded-lg"
                alt="tormod and a cat"
                src="/images/tormod_and_cat.JPG"
                width={250}
                height={250}
            />
            <h1 className="text-4xl font-bold mt-4">Tormod's place</h1>
            <p className="mt-2 text-center">
                Hi, I'm Tormod. I'm a web and game developer. I do various things which you can read all about on my <a href="https://blog.tormod.dev" className="text-blue-500 underline">dev blog</a>
            </p>
            <p className="mt-2 text-center">
                Here are my <a href="https://notes.tormod.dev" className="text-blue-500 underline">notes</a> from stuff I read or work on.
            </p>
        </div>
    );
}