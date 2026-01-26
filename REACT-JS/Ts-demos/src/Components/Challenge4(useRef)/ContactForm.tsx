import { useState, type ChangeEvent, type FormEvent } from "react"

interface Info {
    name: string;
    email: string;
}
 
function ContactForm() {

    const [formData, setformData] = useState<Info>({
        name: "",
        email:"",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setformData((prevState) => ({...prevState, [name]: value}))
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submited", formData)
    }

  return (
    <form onSubmit={handleSubmit}><div>
        <label >Name: 
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </label>

    </div></form>
  )
}

export default ContactForm