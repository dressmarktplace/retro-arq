import { Search } from "lucide-react"

export const HomePage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <article className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    Encontre o <span className="bg-linear-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">Brechó perfeito</span>
                </h1>
                <h2 className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Descubra brechós incriveis perto de você. Moda sustentável, peças únicas e preços acessíveis
                </h2>
            </article>

            <div className="mb-8">
                <form>
                    <fieldset className="relative max-2xl mx-auto mb-6">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />

                        <input
                        type="text"
                        placeholder="Buscar por nome, cidade ou descrição..."
                        className=" w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 text-lg shadow-sm focus:border-zinc-800 focus:outline-none"
                        />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
