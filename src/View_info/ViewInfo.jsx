import { useSelector } from 'react-redux';
import View_Header from './View_Header/ViewHeader';
import { selectBackgrounds } from '../Features/Main_settings/BackgroundsSlice';
import './ViewInfo.scss';


export default function View_info({ profileImg, setProfileImg }) {

    // const background_id = useSelector((state) => {
    //     return state.background.background_id
    // });

    const background_id = useSelector(selectBackgrounds);

    return (
        <div className='view_info_div'>
            <div className='view_info'>
                <div className={`view_info_resume_background${background_id}`}>
                    <div>
                        <View_Header
                            profileImg={profileImg}
                            setProfileImg={setProfileImg}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}