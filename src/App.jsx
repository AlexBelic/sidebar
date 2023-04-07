import { useState } from "react"

function App() {
  const [open, setOpen] =useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div className={`${open ? 'w-72' : 'w-20'} duration-300 p-5 pt-8 h-screen bg-keppel relative`}>
        <img 
          src="../src/assets/control.png" 
          className={`absolute cursor-pointer -right-3 top-10 w-7 border-2 border-keppel rounded-full ${!open && 'rotate-180'} duration-500`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img src="./src/assets/logo.png" className={`cursor-pointer duration-500 ${!open && 'rotate-[360deg]'}`} />
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Sidebar</h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'}`}>
              <img src={`./src/assets/${menu.src}.png`} />
              <span className={`origin-left duration-200 ${!open && 'hidden'}`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default App
