// import { FilterItems } from "./Filter.styled";

export const Filter = ({value, onChange}) => {
    return <label>
        Find contacts by name <input type="text" value={value} onChange={onChange} />
    </label>
};