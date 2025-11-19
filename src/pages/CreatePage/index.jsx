import { Store } from "lucide-react"
import { TextField } from "../../components/TextField"
import { SelectField } from "../../components/SelectField"
import { TextareaField } from "../../components/TextAreaField"
import { useState } from "react"
import { Upload } from "lucide-react"
import { Plus } from "lucide-react"
import { X } from "lucide-react"
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet"

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMarker = ({ position, setPosition }) => {
    useMapEvents({
        click(e) {
            setPosition([e.latlng.lat, e.latlng.lng]);
        },
    });

    return position ? <Marker position={position} /> : null;
}


export const CreateThriftStorePage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [position, setPosition] = useState([-21.7909353, -48.1769214]);
    const [imageUrls, setImageUrls] = useState(['']);
    const [primaryImageIndex, setPrimaryImageIndex] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        address: '',
        city: '',
        uf: '',
        phone: '',
        email: '',
        website: '',
        socialMedia: '',
        categoryId: '',
        openingHours: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageUrlChange = (index, value) => {
        const newUrls = [...imageUrls];
        newUrls[index] = value;
        setImageUrls(newUrls);
    };

    const addImageUrl = () => {
        setImageUrls([...imageUrls, '']);
    };

    const removeImageUrl = (index) => {
        if (imageUrls.length > 1) {
            const newUrls = imageUrls.filter((_, i) => i !== index);
            setImageUrls(newUrls);
            if (primaryImageIndex >= newUrls.length) {
                setPrimaryImageIndex(0);
            } else if (primaryImageIndex > index) {
                setPrimaryImageIndex(primaryImageIndex - 1);
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log({formData})
    }

    return (

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-neutral-50 rounded-2xl shadow-2xl p-8">
                <div className="flex items-center space-x-3 mb-8">
                    <figure className="bg-linear-to-r from-amber-600 to-amber-800 p-2.5 rounded-xl shadow-md group-hover:shadow-lg duration-300 transition-all group-hover:scale-110">
                        <Store className="w-7 h-7 text-white" />
                    </figure>
                    <h1 className="text-4xl font-bold text-gray-900">Cadastro de novo Brechó</h1>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                    <section className="grid md:grid-cols-2 gap-6">
                        <TextField onChange={handleChange} label="Nome do brechó" id="name" name="name" type="text" />
                        <SelectField onChange={handleChange} label="Selecione uma categoria" id="category" name="category" />
                    </section>

                    <TextareaField onChange={handleChange} label="Descrição" id="description" name="description" type="text" placeholder="Descreva seu brechó, o que você oferece, diferencias..." />

                    <section className="grid md:grid-cols-2 gap-6">
                        <TextField onChange={handleChange} label="Endereço" id="address" name="address" type="text" placeholder="Ex. Rua das Flores, 913" />
                        <TextField onChange={handleChange} label="Estado" id="uf" maxLength={2} name="uf" type="text" placeholder="Ex. SP" />
                    </section>

                    <section className="grid md:grid-cols-2 gap-6">
                        <TextField onChange={handleChange} label="Cidade" id="city" name="city" type="text" placeholder="Ex. Araraquara" />
                        <TextField onChange={handleChange} label="Telefone" id="phone" name="phone" type="tel" placeholder="16 91234-5678" />
                    </section>

                    <section className="grid md:grid-cols-2 gap-6">
                        <TextField onChange={handleChange} label="E-mail" id="email" name="email" type="email" placeholder="email@brecho.com" />
                        <TextField onChange={handleChange} label="Horário de Atendimento" id="openingHours" name="openingHours" type="text" placeholder="Seg-Sex: 9hr-18h, Sab: 9hr-14hr" />
                    </section>

                    <section className="grid md:grid-cols-2 gap-6">
                        <TextField onChange={handleChange} label="Site" id="website" name="website" type="text" placeholder="Ex. www.brechó.com.br" />
                        <TextField onChange={handleChange} label="Redes Sociais" id="socialMedia" name="socialMedia" type="text" placeholder="Ex. instagram, facebook" />
                    </section>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Imagens (URLs)
                        </label>
                        <div className="space-y-3">
                            {imageUrls.map((url, index) => (
                                <fieldset key={index} className="flex items-center space-x-2">
                                    <div className="flex-1 flex items-center space-x-2">
                                        <Upload className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="url"
                                            value={url}
                                            onChange={(e) => handleImageUrlChange(index, e.target.value)}
                                            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none"
                                            placeholder="https://exemplo.com/imagem.jpg"
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setPrimaryImageIndex(index)}
                                        className={`px-4 py-3 rounded-xl font-semibold transition-all ${primaryImageIndex === index
                                            ? 'bg-linear-to-r from-amber-500 to-orange-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        Principal
                                    </button>

                                    {imageUrls.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeImageUrl(index)}
                                            className="p-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}
                                </fieldset>
                            ))}
                            <button
                                type="button"
                                onClick={addImageUrl}
                                className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold"
                            >
                                <Plus className="w-5 h-5" />
                                <span>Adicionar mais uma imagem</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Localização no Mapa * (Clique no mapa para definir)
                        </label>
                        <p className="text-sm text-gray-600 mb-3">
                            Latitude: {position[0].toFixed(6)}, Longitude: {position[1].toFixed(6)}
                        </p>
                        <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                            <MapContainer
                                center={position}
                                zoom={13}
                                style={{ height: '100%', width: '100%' }}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <LocationMarker position={position} setPosition={setPosition} />
                            </MapContainer>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 pt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-linear-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Cadastrando...' : 'Cadastrar Brechó'}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="px-8 py-4 bg-gray-200 text-gray-700 rounded-xl font-bold text-lg hover:bg-gray-300 transition-colors"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div >
    )
}