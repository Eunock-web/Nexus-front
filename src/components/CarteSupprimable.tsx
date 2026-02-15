import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

function CarteSupprimable() {
    const [show, setShow] = useState<boolean>(true);

    return <>
        <button onClick={()=>setShow(!show)} > Toggle </button>

        <AnimatePresence>
            {show && <motion.button
                className="btn p-3 bg-blue-500 border border-blue-500 rounded-xl text-white "
                initial = {{opacity : 0}}
                animate = {{opacity : 1}}
                exit={{y : 50, opacity : 0}}
                key="ma-carte"
                onClick={()=>setShow(!show)}
            >
                Fermer
            </motion.button>}
        </AnimatePresence>
    </>
}

export default CarteSupprimable