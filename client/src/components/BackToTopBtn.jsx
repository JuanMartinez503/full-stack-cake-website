import{useEffect, useState} from 'react'

export default function BackToTopBtn (){
    const [backToTopButton , setBackToTopButton] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    },[])
    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <div>
            {backToTopButton && ( <div className='d-flex justify-content-end'>
                <button id='scroll-Btn' className='btn' onClick={scrollUp}>Scroll to top</button>
            </div>
            
            )}
        </div>
    )
}