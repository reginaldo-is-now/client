import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { courses } from "../../resources/courses";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Courses" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#edd60973] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((courses, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#edd60973] py-3"
                    : "text-white"
                }`}
              >
                {courses.title}
              </h1>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center gap-10 sm:flex-col'>
            <img src={courses[selectedItemIndex].image} alt="" className='h-60 w-72' />
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-3xl">
            {courses[selectedItemIndex].title}
          </h1>
          <h1 className="text-white text-2xl">
            {courses[selectedItemIndex].link}
          </h1>
          <p className="text-white text-xl">
            {courses[selectedItemIndex].description}
          </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses
