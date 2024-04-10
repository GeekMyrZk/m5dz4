import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setUserInfo } from '../redux/slices/FormSlice'

const Form = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: '',
		age: '',
		gender: ''
  })
  const handleSubmit = () => {
    dispatch(setUserInfo(user))
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
      <label htmlFor='name'>Name</label>
      <input id='name' type='text' value={user.name} onChange={handleChange}/>
      <label htmlFor='age'>Age</label>
      <input id='age' type='text' value={user.age} onChange={handleChange}/>
      <label htmlFor='gender'>Gender</label>
      <input id='gender' type='text' value={user.gender} onChange={handleChange}/>
      <button onClick={handleSubmit}>Подтвердить</button>
    </div>
  )
}

export default Form