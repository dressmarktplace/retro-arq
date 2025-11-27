export const SelectField = ({ label, id, options, ...props }) => {
    return (
        <fieldset>
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
            <select id={id} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-amber-500" {...props}>
                <option value="" hidden selected>Selecione uma opção</option>
                {options.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
        </fieldset>
    )
}