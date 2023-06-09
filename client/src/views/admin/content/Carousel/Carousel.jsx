import React from 'react'
import CardCarasoul from './CardCarasoul';
import Card from "components/card";
import { AiOutlinePlus } from 'react-icons/ai'
import AddEditCarousel from './AddEditCarousel';
export default function Carousel({ data }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(!open);
  return (
    <div>
      {/* <Upload /> */}
      <Card extra={"w-full h-full p-3"}>
        <AddEditCarousel open={open} handleOpen={handleOpen} isAdd={true} />
        <div className="relative mb-3 flex items-center justify-between pt-1">
          <h4 className="text-3xl font-bold text-navy-700 dark:text-white">
            Carousel Layout
          </h4>
          <button
            onClick={handleOpen}
            className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-none  text-brand-200 hover:cursor-pointer"
          >
            <AiOutlinePlus />
          </button>

        </div>
        <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
          {data.map(item =>
            <CardCarasoul image={item.image} h_text={item.h_text} s_text={item.s_text} link={item.link} id={item._id} key={item.link} />
          )
          }
        </div>
      </Card>
    </div>
  )
}
