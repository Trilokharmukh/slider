import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {validation} from './validation';

export default function UserForm() {

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isValid } 
    } = useForm({
        resolver: yupResolver(validation),
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log(data);  
    }

    return (
        <>
            <div className="form-main-container">
                <div className="form-container">
                    <h2 className="form-header">User Details</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label>First Name</label>
                        <input {...register("firstName")} />
                        <span>{errors.firstName?.message}</span>

                        <label>Last Name</label>
                        <input {...register("lastName")} />
                        <span>{errors.lastName?.message}</span>


                        <label>Email Id</label>
                        <input {...register("email", { required: true})} />
                        <span>{errors.email?.message}</span>

                        <input className="submit" type="submit" disabled={!isValid}/>
                    </form>
                </div>

            </div>
        </>
    )
}