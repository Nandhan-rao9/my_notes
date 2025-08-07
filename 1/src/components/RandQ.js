import React, {useEffect,useState} from 'react'

function RandomQuote(){
    const [url, setUrl] = useState('');
    const [count,setCount] = useState(0);
    useEffect(()=>{
        fetch('https://api.quotable.io/random')
          .then(res=>res.json())
          .then(data => {
            setUrl(data.content);
          });
    },[count]);
    return(
        <div>
            <h2>Random Quote</h2>
            <p>"{url}"</p>
            <button onClick={()=> setCount(count+1)}>
                NEXT
            </button>
        </div>
    );
}

export default RandomQuote;