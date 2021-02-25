import React , {useEffect , useState} from 'react'


export const useLocalStorage = (key , initialvalue) => {
    const item = JSON.parse(localStorage.getItem(key))
    const [Value, setValue] = useState(item || initialvalue)

    useEffect(() => {
        localStorage.setItem(key , JSON.stringify(Value))
    }, [Value , key])
    return[Value , setValue]

}
