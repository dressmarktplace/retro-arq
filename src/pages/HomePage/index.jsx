import axios from "axios"
import { Search } from "lucide-react"
import { useState, useEffect } from "react"
import { Card } from "../../components/Card"

export const HomePage = () => {
    const [categories, setCategories] = useState([])
    const [thriftStores, setThriftStores] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchThriftStores()

        fetchCategories()
    }, [searchTerm, selectedCategory])

    const fetchThriftStores = async () => {
        try {
            const response = await axios.get("/thrift-store", {
                baseURL: import.meta.env.VITE_API_URL,
                params: {
                    q: searchTerm,
                    categoryId: selectedCategory === "all" ? null : selectedCategory
                }
            })

            setThriftStores(response.data)
        } catch (error) {
            console.error({ getThriftStoresError: error })
        }
    }

    const fetchCategories = async () => {
        try {
            const response = await axios.get("/category", { baseURL: import.meta.env.VITE_API_URL })

            setCategories(response.data)
        } catch (error) {
            console.error({ getCategoriesError: error })
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <article className="text-center mb-12">
                <h1 className="text-5xl font-bold text-amber-800 mb-4">
                    Encontre o <span className="bg-linear-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">Brechó perfeito</span>
                </h1>
                <h2 className="text-xl text-amber-600 max-w-2xl mx-auto">
                    Descubra brechós incriveis perto de você. Moda sustentável, peças únicas e preços acessíveis
                </h2>
            </article>

            <div className="mb-8">
                <form>
                    <fieldset className="relative max-2xl mx-auto mb-6">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400 h-5 w-5" />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={event => setSearchTerm(event.target.value)}
                            placeholder="Buscar por nome, cidade ou descrição..."
                            className=" w-full pl-12 pr-4 py-4 rounded-xl border-2 border-amber-200 text-lg shadow-sm focus:border-amber-800 focus:outline-none"
                        />
                    </fieldset>
                </form>

                <div className="flex flex-wrap gap-3 justify-center">
                    <button
                        onClick={() => setSelectedCategory("all")}
                        className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${selectedCategory === "all" ? "bg-linear-to-r from-amber-600 to-zinc-800 text-white scale-105" : "bg-white text-amber-700 hover:bg-amber-50"}`}
                    >
                        Todas
                    </button>

                    {categories.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedCategory(item.id)}
                            className={`px-6 py-3 cursor-pointer rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${selectedCategory === item.id ? "bg-linear-to-r from-amber-600 to-amber-800 text-white scale-105" : "bg-white text-amber-700 hover:bg-gray-50"}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {thriftStores.map(item => <Card key={item.id} {...item} />)}
            </div>
        </div>
    )
}
