import { useSelector } from 'react-redux';
import { selectName } from "../../../Features/Header/Name_slice";
import { selectSurname } from '../../../Features/Header/Surname_slice';

export default function View_name_surname() {

    const name = useSelector(selectName);
    const surname = useSelector(selectSurname);

    // const name = useSelector((state) => {
    //     return state.name.name
    // });

    // const surname = useSelector((state) => {
    //     return state.surname.surname
    // });

    return (
        <>
            <p className='name_surname_text'> {name} {surname} </p>
        </>
    )
}