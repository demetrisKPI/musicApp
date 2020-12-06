import React, { useState, useEffect } from 'react'
import Child from './Child'
//import axios from 'axios'

const Parent = () => {
    const [counter, setCounter] = useState(0);
    // const [url, setUrl] = useState('https://google.com/');
    // const [input, setInput] = useState('');
    // const [noUser, setNoUser] = useState(true);
     
    // const findUser: (res: { data: { data } }) => void = res => {
    //     setUrl(res.data.data[0].url);
    //     setNoUser(true);
    // }
    
    // useEffect(() => {
    //     if (input) {
    //         axios.get(`https://api.mixcloud.com/search/?q=${input};type=user`)
    //         .then(res => {
    //             res.data.data[0] ? findUser(res) : setNoUser(false);
    //         }).catch(error => {
    //             console.error(error.message);
    //         });
    //     } else { 
    //         setUrl('https://google.com')
    //     }
    // }, [input])

    // return (
    //     <div>
    //         <a href={url} style={{padding: '20px'}}>Open user page</a>
    //         <input itemType='text' placeholder='search user' 
    //             onChange={e => setInput(e.target.value)}></input>
    //             {!noUser ? <div>No user found</div> : <div></div>}
    //     </div>
        
    // );
    return (
        <main>
            <Child counter={counter} handleClick={() => {                
                setCounter(counter => counter + 1);
            }}/>
        </main>
    )
}

export default Parent;