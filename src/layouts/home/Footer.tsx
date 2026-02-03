const ListsFooter =  [
    {
        id: 1,
        title : "Product",
        content1 : "Features",
        content2 : "Integrations",
        content3 : "Pricing",
        content4 : "Changelog"
    },

    {
        id: 2,
        title : "Container",
        content1 : "About Us",
        content2 : "Careers",
        content3 : "Blog",
        content4 : "Contact"
    },

    {
        id: 3,
        title : "Legal",
        content1 : "Privacy Policy",
        content2 : "Terms of Service",
        content3 : "Cookie Policy",
        content4 : ""
    },


]

function Footer(){
    return <>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 md:py-20 mt-10 py-5 px-1 border-t border-t-gray-700">
            <div className=" flex flex-col gap-3">
                <div className="flex flex-row gap-2">
                    <img src="" alt="" />
                    <h1 className="text-3xl text-white md:text-4xl"> Nexus </h1>
                </div>
                <p className=" text-gray-400 text-lg md:text-xl md:ml-2">  The ultimate productivity suite for hight-growth teams. Built for focus, designed for results. </p>

                <div>
                    <div>

                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
                {
                    ListsFooter.map((element)=>(
                        <div className="flex flex-col gap-2 ">
                            <h1 className="text-xl text-white md:text-2xl "> {element.title} </h1>
                            <p className="text-gray-500 md:text-lg"> {element.content1} </p>                            
                            <p className="text-gray-500 md:text-lg"> {element.content2} </p>                            
                            <p className="text-gray-500 md:text-lg"> {element.content3} </p>                            
                            <p className="text-gray-500 md:text-lg"> {element.content4} </p>                            
                        </div>
                        
                    ))
                }
            </div>

            <div className=" grid grid-cols-1  md:grid-cols-2  gap-2 ">
                <p className="text-gray-400 text-sm text-center md:hidden"> 2024 Nexus Inc. All rights reserved. </p>
                <div className="flex flex-row gap-10 justify-between md:hidden ">
                    <p className="text-gray-400 text-sm "> System Operational </p>
                    <p className="text-gray-400 text-sm"> English (US) </p>
                </div>
                
            </div>
        </div>
    </>
}

export default Footer