import { Zap } from "lucide-react"
import {motion} from "framer-motion"

const AppLoader = () => {
  return (
   <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2}}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <Zap className="w-12 h-12 text-green-400" />
        </motion.div>

        <motion.div
          className="h-1 w-32 bg-green-500 rounded-full"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <p className="text-gray-300 text-sm tracking-widest">
          Please Wait...
        </p>
      </motion.div>
    </div>
  )
}

export default AppLoader
