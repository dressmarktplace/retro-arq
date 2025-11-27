export const TextField = ({ label, id, ...props }) => {
    return (
        <fieldset>
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <input required id={id} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500" {...props} />
        </fieldset>
    )
}