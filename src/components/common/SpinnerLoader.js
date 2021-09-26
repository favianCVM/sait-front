import Loader from "@components/common/Loader";

const SpinnerLoader = ({isOpen}) => {

  return(
    <div className={`${isOpen ? 'fixed' : 'hidden'} top-0 left-0 flex items-end  justify-end w-full bg-gray-500 min-h-screen bg-opacity-70 z-50`}>
      <Loader/>
    </div>
  )
}

export default SpinnerLoader;