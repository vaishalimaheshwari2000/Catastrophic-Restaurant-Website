'use client'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import './Reservations.css'
import setHours from "date-fns/setHours";
import DatePicker from 'react-datepicker';
import setMinutes from "date-fns/setMinutes";
import 'react-datepicker/dist/react-datepicker.css';
import { Dropdown } from 'primereact/dropdown';
      
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import React from "react";
export default function Reservations() {


  const [selectedItem, setSelectedItem] = useState(null);
    const items = Array.from({ length: 15 }).map((_, i) => ({ label: `${i} Diner`, value: i }));


  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 9),
  );
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
     <div>
     
     <div className="relative bg-black isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
             Reservations
            </h1>
      
            <List className="flex-row ">
        <ListItem className="p-0 ">
          <label
            htmlFor="horizontal-list-react"
            className="flex w-full cursor-pointer items-center px-8 ml-10 py-5"
          >
            <ListItemPrefix className="mr-5">
              <Checkbox
                id="horizontal-list-react"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="white" className="font-medium">
              Indoor sitting
            </Typography>
          </label>
        </ListItem>
       



        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-vue"
            className="flex w-full cursor-pointer items-center p-2 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                id="horizontal-list-vue"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="white" className="font-medium">
             Outdoor Sitting
               </Typography>
               </label>
              </ListItem>
             </List>
           </div>
           
           <div className="card flex justify-content-center p-4 mr-5 border-white" >
        
                <DatePicker className='p-4 border-y-red-100 rounded-md border-white text-white bg-transparent'
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      filterTime={filterPassedTime}
      dateFormat="MMMM d, yyyy h:mm aa" 
    />
        
         
        
          {/* <Dropdown  value={selectedItem} onChange={(e) => setSelectedItem(e.value)} options={items} virtualScrollerOptions={{ itemSize: 38 }} 
                placeholder="No. of Diner" className="text-black ml-10 w-12rem bg-white rounded-md" /> */}
                 <div class="ml-10 relative h-13 w-72 min-w-[200px]">
  <select
    class="peer h-full w-full rounded-[7px] border-t-none  bg-transparent px-1 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 ">
    <option class='text-black' value="brazil">1 Dine</option>
    <option class='text-black' value="bucharest">2 Dine</option>
    <option class='text-black' value="london">3 Dine</option>
    <option class='text-black' value="washington">4 Dine</option>
    <option class='text-black' value="brazil">5 Dine</option>
    <option class='text-black' value="bucharest">6 Dine</option>
    <option class='text-black' value="london">7 Dine</option>
    <option class='text-black' value="washington">9 Dine</option>
    <option class='text-black' value="washington">10 Dine</option>
  </select>
  <label
    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-3  flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[9.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
   No. of Dine
  </label>
</div>

<br />
 
<div class="ml-15 flex ml-10 relative items-centre justify-center h-13 w-72 min-w-[200px]">
  <select
    class="peer h-full w-full rounded-[7px] border-t-none  bg-transparent px-1 py-2.5 font-sans text-sm font-normal text-white outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 ">
    <option class='text-black' value="brazil">Birthday</option>
    <option class='text-black' value="bucharest">Kitty Party</option>
    <option class='text-black' value="london">Anneversiary</option>
    <option class='text-black' value="washington">Engagement</option>
   
  </select>
  <label
    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-3  flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[9.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
   Occasion
  </label>
</div>





          </div>














         

           </div>
           
          </div>
     </div>
     
  )
}