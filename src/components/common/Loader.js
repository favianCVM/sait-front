const Loader = ({
  shadow="",
  background="bg-transparent",
  circleW="",
  circleH=""
}) => {
  return(
    <div class={`${background} ${shadow} pt-6 rounded-md place-content-center place-items-center grid gap-x-2 grid-flow-col`}>
      <div
        class={`bg-blue-900 p-2  ${circleW} ${circleH} rounded-full animate-bounce blue-circle`}
      ></div>
      <div
        class={`bg-green-900 p-2 ${circleW} ${circleH} rounded-full animate-bounce green-circle`}
      ></div>
      <div
        class={`bg-red-900 p-2  ${circleW} ${circleH} rounded-full animate-bounce red-circle`}
      ></div>
    </div>
  )
}

export default Loader;