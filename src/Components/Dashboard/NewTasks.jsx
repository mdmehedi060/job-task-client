/* eslint-disable react/jsx-no-comment-textnodes */
import { useForm } from "react-hook-form"

const NewTasks = () => {
    const {
        register,
        handleSubmit,
        
      } = useForm()
    
      const onSubmit = (data) => console.log(data)

    return (
        <div>
            <section className=" relative  ">


                <div className="container mx-auto ">
                    <div className="flex  flex-wrap lg:justify-around ">

                        <div data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className=" lg:mt-20   px-4">
                            <div className="shadow-2xl border-stone-400  relative rounded-lg p-8 sm:p-12 ">
                                <h1 className='text-3xl font-semibold mb-3  text-black'>// Create A New Task</h1>

                                <form onSubmit={handleSubmit(onSubmit)} className="lg:flex lg:gap-10" >
                                    <div>
                                        <div className="mb-6">
                                            <label className='text-xl  text-black'>Titles</label>
                                            <input type="text" {...register("titles", { required: true })}name="titles" placeholder="Your Titles" className=" mt-3
                  w-full
                  rounded
                  py-3
                  px-[14px]
                   text-black text-base
                  border border-stone-400 
                  outline-none
                  bg-white 
                  focus-visible:shadow-none
                  
                  " />
                                        </div>
                                        <div className="mb-6">
                                            <label className='text-xl  text-black'>Deadlines(DD-MM-YYYY)</label>
                                            <input type="text" {...register("deadlines", { required: true })} id="date" data-format="DD-MM-YYYY" data-template="D MMM YYYY" name="date" value="01-01-2024"
                                                className="mt-3
                  w-full
                  rounded
                  py-3
                  px-[14px]
                   text-black text-base
                  border border-stone-400  
                  outline-none
                  bg-white
                  focus-visible:shadow-none
                  
                  " />
                                        </div>
                                        <div className="mb-6">
                                            <label className='text-xl  text-black'>Priority</label>
                                            <select name="priority" {...register("priority", { required: true })} className="mt-3
                  w-full
                  rounded
                  py-3
                  px-[14px]
                   text-black text-base
                  border border-stone-400  
                  outline-none
                  bg-white
                  focus-visible:shadow-none
                  
                  " >
                                            <option disabled selected>Priority</option>
                                            <option>Low</option>
                                            <option>Moderate</option>
                                            <option>High</option>
                                        </select>

                                    </div>
                            </div>

                            <div>
                                <div className="mb-6">
                                    <label className='text-xl  text-black'>Descriptions</label>
                                    <textarea rows={6} name="descriptions" {...register("descriptions", { required: true })} placeholder="Your Descriptions" className="mt-3
                  w-full
                  rounded
                  py-3
                  px-[14px]
                   text-black text-base
                  border border-stone-400 
                  resize-none
                  bg-white
                  outline-none
                  focus-visible:shadow-none
                  
                  " defaultValue={""} />
                                </div>
                                <div>



                                    <button type="submit" value="Send" className="
                  w-full
                  text-white
                  bg-[#3B82F6]
                  rounded
                  
                  p-3
                  transition
                  hover:bg-opacity-90
                  ">
                                        Create
                                    </button>
                                </div>
                            </div>
                            {/* <ToastContainer></ToastContainer> */}
                        </form>
                        <div>


                        </div>
                    </div>
                </div>
        </div>
                </div >
            </section >
        </div >
    );
};

export default NewTasks;