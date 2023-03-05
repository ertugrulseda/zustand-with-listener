
import { userStore } from 'store/userStore'

export default function Oylebircomp() {

    const userNameFromStore = userStore((state) => state.userName);
    const userPassFromStore = userStore((state)=>state.userPass)
    return (
        <>
            <div>
                Secret informations :
                {userNameFromStore+" "+userPassFromStore }

            </div>
        </>
    )
}
