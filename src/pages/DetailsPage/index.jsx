import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"
import { Phone } from "lucide-react"
import { Clock } from "lucide-react"
import { Instagram } from "lucide-react"
import { Globe } from "lucide-react"
import { Mail } from "lucide-react"
import { MapPin } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export const DetailsThriftStorePage = () => {
    const { id: thriftStoreId } = useParams()

    const [thriftStore, setThriftStore] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/thrift-store/${thriftStoreId}`, { baseURL: import.meta.env.VITE_API_URL })
            .then(response => setThriftStore(response.data))
            .catch(error => console.error({ getThriftStoresError: error }))
            .finally(() => setLoading(false))
    }, [])

    const handleNextImage = () => {
        if (thriftStore.images) {
            setCurrentImageIndex(prev => (prev + 1) % thriftStore.images.length)
        }
    }

    const handlePrevImage = () => {
        if (thriftStore.images) {
            setCurrentImageIndex(prev => (prev - 1 + thriftStore.images.length) % thriftStore.images.length)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-amber-600"></div>
                    <p className="mt-4 text-gray-600 text-lg">Carregando informações...</p>
                </div>
            </div>
        );
    }

    if (!thriftStore) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Brechó não encontrado</h2>
                    <Link to="/" className="text-amber-600 hover:text-amber-700 font-semibold">
                        Voltar para a página inicial
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold mb-6 group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Voltar
            </Link>

            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="relative h-[500px] bg-gray-900">
                    {thriftStore?.images.length > 0 && (
                        <>
                            <img
                                src={thriftStore.images[currentImageIndex].imageUrl}
                                alt={thriftStore.name}
                                className="w-full h-full object-cover"
                            />
                            {thriftStore.images.length > 1 && (
                                <>
                                    <button
                                        onClick={handleNextImage}
                                        className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all">
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>

                                    <button
                                        onClick={handlePrevImage}
                                        className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all">
                                        <ChevronRight className="w-5 h-5" />
                                    </button>

                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                        {
                                            thriftStore.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`w-3 h-3 cursor-pointer rounded-full transition-all
                                                    ${index === currentImageIndex ?
                                                            'bg-white w-8' :
                                                            'bg-white/50 hover:bg-white/75'}
                                                        `} />
                                            ))
                                        }
                                    </div>
                                </>
                            )}
                        </>
                    )}

                    {thriftStore?.category.name && (
                        <span className="absolute top-6 left-6 bg-linear-to-r from-amber-500 to-amber-600 text-white px-5 py-2.5 rounded-full text-base font-bold shadow-xl">
                            {thriftStore?.category.name}
                        </span>
                    )}
                </div>

                <div className="p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{thriftStore.name}</h1>

                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                        {thriftStore.description}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Informações de contato</h2>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-xl">
                                    <MapPin className="w-6 h-6 text-amber-600 mt-1 shrink-0" />

                                    <article>
                                        <p className="font-semibold text-gray-900">Endereço</p>
                                        <p className="text-gray-700">{thriftStore.address}</p>
                                        <p className="text-gray-700">{thriftStore.city} - {thriftStore.uf}</p>
                                    </article>
                                </div>

                                {thriftStore.phone &&
                                    <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-xl">
                                        <Phone className="w-6 h-6 text-amber-600 mt-1 shrink-0" />

                                        <article>
                                            <p className="font-semibold text-gray-900">Telefone</p>
                                            <a href={`tel:${thriftStore.phone}`} className="text-gray-700 hover:text-amber-600">{thriftStore.phone}</a>
                                        </article>
                                    </div>
                                }

                                {thriftStore.email &&
                                    <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-xl">
                                        <Mail className="w-6 h-6 text-amber-600 mt-1 shrink-0" />

                                        <article>
                                            <p className="font-semibold text-gray-900">E-mail</p>
                                            <a href={`mailto:${thriftStore.email}`} className="text-gray-700 hover:text-amber-600">{thriftStore.email}</a>
                                        </article>
                                    </div>
                                }

                                {thriftStore.openingHours &&
                                    <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-xl">
                                        <Clock className="w-6 h-6 text-amber-600 mt-1 shrink-0" />

                                        <article>
                                            <p className="font-semibold text-gray-900">Horário de funcionamento</p>
                                            <p className="text-gray-700">{thriftStore.openingHours}</p>
                                        </article>
                                    </div>
                                }


                                {thriftStore.website &&
                                    <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-xl">
                                        <Globe className="w-6 h-6 text-amber-600 mt-1 shrink-0" />

                                        <article>
                                            <p className="font-semibold text-gray-900">Website</p>
                                            <a href={thriftStore.website} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 break-all">{thriftStore.website}</a>
                                        </article>
                                    </div>
                                }

                                {thriftStore.socialMedia &&
                                    <div className="flex items-start space-x-3 p-4 bg-amber-50 rounded-xl">
                                        <Instagram className="w-6 h-6 text-amber-600 mt-1 shrink-0" />

                                        <article>
                                            <p className="font-semibold text-gray-900">Rede Social</p>
                                            <a href={thriftStore.socialMedia} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-amber-600 break-all">{thriftStore.socialMedia}</a>
                                        </article>
                                    </div>
                                }
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Localização</h2>

                            <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
                                <MapContainer
                                    center={[thriftStore.latitude, thriftStore.longitude]}
                                    zoom={15}
                                    style={{ height: '100%', width: '100%' }}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[thriftStore.latitude, thriftStore.longitude]}>
                                        <Popup>
                                            <div className="text-center">
                                                <p className="font-bold">{thriftStore.name}</p>
                                                <p className="text-sm text-gray-6000">{thriftStore.address}</p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

