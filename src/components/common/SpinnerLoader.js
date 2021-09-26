
const SpinnerLoader = ({isOpen}) => {

  return(
    <div className={`${isOpen ? 'fixed' : 'hidden'} top-0 left-0 flex items-end  justify-end w-full bg-gray-500 min-h-screen bg-opacity-70 z-50`}>
      <div class="bg-white shadow-2xl pt-6 px-5 pb-2 rounded-md mr-6 mb-6 grid gap-x-2 grid-flow-col">
        <div
          class="bg-blue-600 p-2  w-8 h-8 rounded-full animate-bounce blue-circle"
        ></div>
        <div
          class="bg-green-600 p-2 w-8 h-8 rounded-full animate-bounce green-circle"
        ></div>
        <div
          class="bg-red-600 p-2  w-8 h-8 rounded-full animate-bounce red-circle"
        ></div>
      </div>
    </div>
  )
}

export default SpinnerLoader;