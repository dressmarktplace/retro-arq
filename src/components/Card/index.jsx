import { Phone } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom"

export const Card = ({ id, images, name, category, description, city, uf, phone, openingHours }) => {
    const getPrimaryImage = (images) => {
        if (!images || images.length === 0) {
            return 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800';
        }
        const primary = images.find(img => img.isPrimary);
        return primary ? primary.imageUrl : images[0].imageUrl;
    };

    return (
        <Link
            key={id}
            to={`/brecho/${id}`}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={getPrimaryImage(images)}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {category && (
                    <span className="absolute top-4 right-4 bg-linear-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {category.name}
                    </span>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                        <MapPin className="w-5 h-5 text-amber-600 mr-2 shrink-0" />
                        <span className="text-sm">{city}, {uf}</span>
                    </div>

                    {phone && (
                        <div className="flex items-center text-gray-700">
                            <Phone className="w-5 h-5 text-amber-600 mr-2 shrink-0" />
                            <span className="text-sm">{phone}</span>
                        </div>
                    )}

                    {openingHours && (
                        <div className="flex items-center text-gray-700">
                            <Clock className="w-5 h-5 text-amber-600 mr-2 shrink-0" />
                            <span className="text-sm">{openingHours}</span>
                        </div>
                    )}
                </div>
            </div>
        </Link>
    )
}