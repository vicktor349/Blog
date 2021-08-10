import {useEffect, useState} from 'react';



const useFetch = (url) => {
    const [data,setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortcont = new AbortController();
            fetch(url,{ signal: abortcont.signal})
                .then(res => {
                    if(!res.ok){
                        throw Error("Couldn't Fetch Data...")
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('Fetch Aborted')
                    }else{
                        setIsLoading(false)
                        setError(err.message)
                    }
                })
        return () => abortcont.abort();
    },[url])
    return {data, isLoading, error};
}
 
export default useFetch;