import { FC, ReactElement } from "react";

interface profileInterface {
    name?: string
}

const Profile:FC<profileInterface> = (props):ReactElement => {
    const { name } = props

    return (
        <section className="w-5/6 mx-auto">
            
            <div className="mx-auto w-20 h-20 rounded-full flex justify-center items-center bg-purple-800 mb-2">
               {typeof name === 'string' && <h1 className="text-xl font-bold text-white"> { name[0] } </h1> }
            </div>

            <h3 className="text font-bold text-center"> Welcome, {name} </h3>

            <p className="text-center text-sm"> Hello world, my name is {name} </p>

        </section>
    );
}
 
export default Profile;