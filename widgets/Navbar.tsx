// "use client";

// import { useState } from "react";
// import { Spin as Hamburger } from "hamburger-react";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// export default function Navbar() {
//   const [Open, setOpen] = useState(false);
//   return (
//     <nav className="fixed right-0 z-1000 w-full bg-white py-2">
//       <div className="flex items-center justify-between">
//         <div className="pl-4 text-2xl font-bold">Badiamba</div>
//         <div className="relative z-1001 pr-2">
//           <Hamburger toggled={Open} toggle={setOpen} />
//         </div>
//         <Sheet open={Open} onOpenChange={setOpen}>
//           <SheetContent showCloseButton={false} side="right" className="z-990">
//             <div className="flex justify-end pt-4 pr-4">
//               <Hamburger toggled={Open} toggle={setOpen} />
//             </div>
//             <SheetHeader>
//               <SheetTitle>Badiamba</SheetTitle>
//               <SheetDescription>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </SheetDescription>
//               <div className="pt-10 flex flex-col gap-5">
//                 <a href="#home">Home</a>
//                 <a href="#about">About</a>
//                 <a href="#contact">Contact</a>
//               </div>
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   );
// }
