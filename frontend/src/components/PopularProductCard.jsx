import {star} from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex shrink-0 flex-col
    w-100 max-sm:w-full">
        <img
            src={imgURL}
            alt={name}
            className="w-[280px] h-[280px]"        
        
        />
        <div className="mt-8 flex
        justify-start gap-2.5">
            <img
               src={star}
               alt="rating"
               width={24}
               height={24}
            
            
            
            />
            <p className='font-monserrat
            text-xl leading-normal text-slate-gray'>(4.5)</p>

        </div>
        <div>
          
        </div>
        <div className="w-[280px]">
        <h3 className='mt-2 text-2xl
        leading-normal font-semibold 
        font-palanquin text-wrap:break-word'>{name}</h3>
        <p>{price}</p>
        </div>
        
         
    </div>
  )
}

export default PopularProductCard