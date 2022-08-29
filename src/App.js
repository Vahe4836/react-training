import { useSelector,useDispatch } from 'react-redux';

function App() {

  const name = useSelector((state) => {
    return state.currentUser.name;
  })

  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(evt) => {
          dispatch({
            type: "edit-current-user-name",
            payload: {
              name: evt.target.value
            }
          })
        }}
      />
    </div>
  );}

export default App;