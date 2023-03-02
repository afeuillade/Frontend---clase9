import { useState } from 'react'

const Form = () => {

    /*const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')*/
    const [user,setUser] = useState({
        email : '',
        pass: ''
    })

    const [show,setShow] = useState(false)
    const [err,setErr] = useState(false)

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(user.pass.length > 6) {
            setShow(true)
            setErr(false)
        }else setErr(true)
    }
    /*const handleChangeEmail =(event ) =>{
        setEmail (event.target.value)
            EN LA LINEA 27 
        -<input type="email" onChange={handleChangeEmail} />
    }*/

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label >Email</label>
            <input type="email" onChange={(event) => setUser({...user, email: event.target.value})} />
            <label >Password</label>
            <input type="password" onChange={(event) => setUser({...user, pass: event.target.value})} />
            {err && 'La contraseña no es correcta'}
            <button>Enviar</button>
        </form>

        {
            show 
            ?
            <>
            <h4>Se ha logeado con éxito!</h4>
            <h4>Email: {user.email}</h4>
            <h4>Password: {user.pass}</h4>
            </>
            :
            null
        }
        
        
    </>
  )
}

export default Form