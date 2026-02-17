import { ArrowRight } from "lucide-react"


function CardList({}){
    return <>
    <div className=" flex flex-col  border border-gray-400 rounded-xl  ">
        <div className="flex flex-row justify-between ">
            <div>
                <div>
                    
                </div>
                
                <div className="flex flex-col ">
                    <h1>  </h1>
                    <p>  </p>
                </div>
            </div>

            <ArrowRight size={24} />
        </div>

        <div className="flex ">

                <div>
                    
                </div>
                
                <p>  </p>
        </div>
    </div>     
    </>
}

export default CardList