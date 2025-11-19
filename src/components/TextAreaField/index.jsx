export const TextareaField = ({ label, id, ...props }) => {
    return (
        <fieldset>
            <label for={id} className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <textarea rows={4} id={id} className="w-full resize-none px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500" {...props}>

            </textarea>
        </fieldset>
    )
}