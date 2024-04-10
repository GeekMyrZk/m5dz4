import Form from "../components/Form"
import FormInfo from "../components/FormInfo"

const MainPage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', width:'100vw'}}>
      <Form/>
      <FormInfo/>
    </div>
  )
}

export default MainPage