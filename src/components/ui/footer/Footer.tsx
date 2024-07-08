import { titleFont } from "@/config/fonts"

export const Footer = () => {
    return(
        <div className="flex w-full justify-center text-xs mb-10">
            <a href="/">
                <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                <span>| shop</span>
                <span>© { new Date().getFullYear()}</span>
            </a>

            <a href="/"
            className="mx-3">
                Privacidad & Legal
            </a>
        </div>
    )
}