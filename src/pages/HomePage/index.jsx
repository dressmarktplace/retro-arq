import { Search } from "lucide-react"
import { useState } from "react"

export const HomePage = () => {
const [selectedCategory, setSelectedCategory]=useState("all")

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

                <div className="flex flex-wrap gap-3 justify-center">
                    <button
                    onClick={() => setSelectedCategory("all")}
                    className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${selectedCategory === "all" ? "bg-linear-to-r from-zinc-600 to-zinc-800 text-white scale-105" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                    >
                        Todas
                    </button>
                     <button
                    onClick={() => setSelectedCategory("others")}
                    className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${selectedCategory === "others" ? "bg-linear-to-r from-zinc-600 to-zinc-800 text-white scale-105" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                    >
                        Outros
                    </button>
                </div>
            </div>
        </div>
    )
}
