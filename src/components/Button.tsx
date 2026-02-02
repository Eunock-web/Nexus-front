interface ButtonInterface{
  className?:string,
  children : string
  disabled? : boolean
}


function Button({className, children} : ButtonInterface){
  return <>
    <div>
      <button className={"btn justify-center items-center p-2 border border-blue-600 bg-blue-600 rounded-xl text-xl font-bold text-white " + className} >{children}</button>
    </div>
  </>
}

export default Button