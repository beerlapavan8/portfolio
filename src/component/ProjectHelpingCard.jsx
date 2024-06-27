import React from 'react'
const ProjectHelpingCard = (props) => {

 
  return (
    <div>
     
      <div class="flex flex-col justify-center items-center bg-gray-100 mb-14 hover:scale-[1.1]  shadow-2xl ">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <img src={props.image} alt="Mountain" class="w-full h-64 object-cover"/>
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">{props.prjt}</h2>
            <p class="text-gray-700 leading-tight mb-4">
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                vehicula elit. Nunc et ex at turpis rutrum viverra. */}
                {props.desc}
            </p>
            <div class="flex justify-evenly items-center mt-3">
              
<a href={props.git} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">GitHub</a>

<a href={props.demo1} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Demo</a>

            </div>
        </div>
    </div>
</div> 
    </div>  
  )
}

export default ProjectHelpingCard
