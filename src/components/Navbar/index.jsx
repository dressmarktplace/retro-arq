import { Plus } from "lucide-react"
import { Store } from "lucide-react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg border-b-amber-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <figure className="bg-linear-to-r from-amber-600 to-amber-800 p-2.5 rounded-xl shadow-md group-hover:shadow-lg duration-300 transition-all group-hover:scale-110">
                            <Store className="w-7 h-7 text-white" />
                        </figure>
                        <h2 className="text-3xl font-bold bg-linear-to-r from-amber-700 to-amber-800 bg-clip-text text-transparent">
                            Retroarq
                        </h2>
                    </Link>

                    <Link to="/novo-brecho" className="flex items-center space-x-2 bg-linear-to-r from-amber-600 to-amber-800 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                        <Plus className="w-8 h-8" />
                        Cadastrar Brechó
                    </Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
                    <Link to="/guia" className="flex items-center space-x-2 bg-linear-to-r from-amber-600 to-amber-800 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                        <Plus className="w-8 h-8" />
                        Guia de Brechós
                    </Link>
                </div>
        </nav>
    )
}
