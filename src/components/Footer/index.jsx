import { Store } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-zinc-600 to-zinc-800 mt-20 text-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <section className="flex items-center justify-center space-x-2 mb-4" >
                        <Store className="w-6 h-6" />
                        <p className="text-xl font-bold">RetroArq</p>
                    </section>

                    <p className="text-sm">&copy; 2025 Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    )
}