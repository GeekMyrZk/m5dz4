import { useSelector } from 'react-redux'

const FormInfo = () => {
  const { user } = useSelector(state => state.form)

  return (
    <div style={{width: '50%'}}>
      <p><span>Name: </span>{user.name}</p>
      <p><span>Age: </span>{user.age}</p>
      <p><span>Gender: </span>{user.gender}</p>
    </div>
  
  )
}

export default FormInfo