


// "use client";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// import { ArrowDown } from "lucide-react";

// const initialItems = [
//     { id: 0, text: "UI/UX Designer", x: "-40%", y: "-5%" },
//     { id: 1, text: "Storyteller", x: "-10%", y: "-5%" },
//     { id: 2, text: "Product Designer", x: "20%", y: "-5%" },
//     { id: 3, icon: true, x: "-15%", y: "-10%" },
//     { id: 4, icon: true, x: "12%", y: "-10%" },
// ];

// export default function HeroAnimation() {
//     const [items, setItems] = useState(initialItems.map(item => ({
//         ...item,
//         dragX: 0,
//         dragY: 0,
//     })));

//     const containerRef = useRef(null);

//     // Check collision between two items
//     const checkCollision = (id1, bounds1, id2, bounds2) => {
//         return !(
//             bounds1.right < bounds2.left ||
//             bounds1.left > bounds2.right ||
//             bounds1.bottom < bounds2.top ||
//             bounds1.top > bounds2.bottom
//         );
//     };

//     // Handle drag end - check for collisions and push items away
//     const handleDragEnd = (id, event, info) => {
//         const draggedElement = event.target.getBoundingClientRect();
        
//         setItems(prevItems => {
//             return prevItems.map(item => {
//                 if (item.id === id) {
//                     // Update dragged item position
//                     return {
//                         ...item,
//                         dragX: item.dragX + info.offset.x,
//                         dragY: item.dragY + info.offset.y,
//                     };
//                 } else {
//                     // Check collision with other items
//                     const otherElement = document.getElementById(`item-${item.id}`);
//                     if (otherElement) {
//                         const otherBounds = otherElement.getBoundingClientRect();
                        
//                         if (checkCollision(id, draggedElement, item.id, otherBounds)) {
//                             // Calculate push direction
//                             const centerX1 = draggedElement.left + draggedElement.width / 2;
//                             const centerY1 = draggedElement.top + draggedElement.height / 2;
//                             const centerX2 = otherBounds.left + otherBounds.width / 2;
//                             const centerY2 = otherBounds.top + otherBounds.height / 2;
                            
//                             const dx = centerX2 - centerX1;
//                             const dy = centerY2 - centerY1;
//                             const distance = Math.sqrt(dx * dx + dy * dy);
                            
//                             // Push away with some force
//                             const pushForce = 80;
//                             const pushX = (dx / distance) * pushForce;
//                             const pushY = (dy / distance) * pushForce;
                            
//                             return {
//                                 ...item,
//                                 dragX: item.dragX + pushX,
//                                 dragY: item.dragY + pushY,
//                             };
//                         }
//                     }
//                     return item;
//                 }
//             });
//         });
//     };

//     return (
//         <div
//             ref={containerRef}
//             className="relative w-full h-[100vh] bg-[#0d0d0d] overflow-hidden flex items-center justify-center"
//         >
//             {items.map((item, i) => {
//                 const randomRotate = (Math.random() - 0.5) * 15;

//                 return (
//                     <motion.div
//                         id={`item-${item.id}`}
//                         key={item.id}
//                         drag
//                         dragElastic={0.1}
//                         dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
//                         onDragEnd={(event, info) => handleDragEnd(item.id, event, info)}
//                         className={`absolute font-mono ${!item.icon ? 'border-2 border-white rounded-2xl px-4 py-1.5 md:px-8 md:py-4' : ' md:px-2 md:py-2'} flex items-center justify-center text-white cursor-grab active:cursor-grabbing`}
//                         style={{
//                             left: `calc(50% + ${item.x})`,
//                             top: `calc(50% + ${item.y})`,
//                         }}
//                         initial={{
//                             y: -400,
//                             opacity: 0,
//                             rotateX: -45,
//                             x: item.dragX,
//                         }}
//                         animate={{
//                             y: item.dragY,
//                             x: item.dragX,
//                             opacity: 1,
//                             rotateX: 0,
//                             rotate: randomRotate,
//                         }}
//                         transition={{
//                             duration: 3.5,
//                             ease: [0.25, 0.8, 0.25, 1],
//                         }}
//                         whileHover={{
//                             scale: 1.05,
//                             rotate: randomRotate + (Math.random() - 0.5) * 10,
//                         }}
//                         whileDrag={{
//                             scale: 1.1,
//                             zIndex: 50,
//                             rotate: randomRotate + 5,
//                         }}
//                     >
//                         {item.icon ? (
//                             <div className="bg-white p-2 rounded-full">
//                                 <ArrowDown size={48} strokeWidth={1.5} className="text-black pointer-events-none" />
//                             </div>
//                         ) : (
//                             <motion.h1 className="text-xl md:text-4xl font-mono text-white whitespace-nowrap pointer-events-none">
//                                 {item.text}
//                             </motion.h1>
//                         )}
//                     </motion.div>
//                 );
//             })}

//             {/* Right Text Section */}
//             <div className="absolute bottom-44 right-10">
//                 <motion.div
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1.5, ease: "easeOut" }}
//                     className="text-center md:text-left max-w-md text-white"
//                 >
//                     <h2 className="text-3xl md:text-xl font-mono leading-tight text-white">
//                             A PRODUCT DESIGNER MAKING
//                     </h2>
//                     <h2 className="text-3xl md:text-xl font-mono leading-tight text-white">
//                         SIMPLICITY FEEL EXCITING
//                     </h2>
//                 </motion.div>
//             </div>
            
//             {/* Name in big letters */}
//             <motion.div
//                 className="absolute bottom-10 left-0 right-0 w-full text-center"
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
//             >
//                 <h1 className="text-5xl md:text-7xl lg:text-[130px] font-bold text-white tracking-wider">
//                     DHANASHRI SHITOLE
//                 </h1>
//             </motion.div>
//         </div>
//     );
// }





"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const initialItems = [
    { id: 0, text: "UI/UX Designer", x: "-40%", y: "-5%" },
    { id: 1, text: "Storyteller", x: "-10%", y: "-5%" },
    { id: 2, text: "Product Designer", x: "20%", y: "-5%" },

    { id: 4, icon: true, x: "-15%", y: "-10%" },
    { id: 5, icon: true, x: "12%", y: "-10%" },
];

export default function HeroAnimation() {
    const [items, setItems] = useState(initialItems.map(item => ({
        ...item,
        dragX: 0,
        dragY: 0,
    })));

    const containerRef = useRef(null);

    // Check collision between two items
    const checkCollision = (id1, bounds1, id2, bounds2) => {
        return !(
            bounds1.right < bounds2.left ||
            bounds1.left > bounds2.right ||
            bounds1.bottom < bounds2.top ||
            bounds1.top > bounds2.bottom
        );
    };

    // Handle drag end - check for collisions and push items away
    const handleDragEnd = (id, event, info) => {
        const draggedElement = event.target.getBoundingClientRect();

        setItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === id) {
                    // Update dragged item position
                    return {
                        ...item,
                        dragX: item.dragX + info.offset.x,
                        dragY: item.dragY + info.offset.y,
                    };
                } else {
                    // Check collision with other items
                    const otherElement = document.getElementById(`item-${item.id}`);
                    if (otherElement) {
                        const otherBounds = otherElement.getBoundingClientRect();

                        if (checkCollision(id, draggedElement, item.id, otherBounds)) {
                            // Calculate push direction
                            const centerX1 = draggedElement.left + draggedElement.width / 2;
                            const centerY1 = draggedElement.top + draggedElement.height / 2;
                            const centerX2 = otherBounds.left + otherBounds.width / 2;
                            const centerY2 = otherBounds.top + otherBounds.height / 2;

                            const dx = centerX2 - centerX1;
                            const dy = centerY2 - centerY1;
                            const distance = Math.sqrt(dx * dx + dy * dy);

                            // Push away with some force
                            const pushForce = 80;
                            const pushX = (dx / distance) * pushForce;
                            const pushY = (dy / distance) * pushForce;

                            return {
                                ...item,
                                dragX: item.dragX + pushX,
                                dragY: item.dragY + pushY,
                            };
                        }
                    }
                    return item;
                }
            });
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[100vh] bg-[#0d0d0d] overflow-hidden flex items-center justify-center"
        >
            {/* Mobile layout - stacked but draggable */}
            <div className="md:hidden flex flex-col items-center justify-center space-y-6 ">
                {["UI/UX Designer", "Storyteller", "Product Designer"].map((text, i) => (
                    <motion.div
                        key={i}
                        drag
                        dragElastic={0.15}
                        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                        className="border-2 border-white rounded-2xl px-4 py-1.5 flex items-center justify-center cursor-grab active:cursor-grabbing"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                        <h1 className="text-xl font-mono text-white whitespace-nowrap pointer-events-none">
                            {text}
                        </h1>
                    </motion.div>
                ))}

                <motion.div
                    drag
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    {/* <div className="bg-white p-2 rounded-full">
                        <ArrowDown size={32} strokeWidth={1.5} className="text-black pointer-events-none" />
                    </div> */}
                </motion.div>
            </div>


            {/* Desktop layout - draggable items */}
            <div className="hidden md:block w-full h-full">
                {items.map((item, i) => {
                    const randomRotate = (Math.random() - 0.5) * 15;

                    return (
                        <motion.div
                            id={`item-${item.id}`}
                            key={item.id}
                            drag
                            dragElastic={0.1}
                            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                            onDragEnd={(event, info) => handleDragEnd(item.id, event, info)}
                            className={`absolute font-mono ${!item.icon ? 'border-2 border-white rounded-2xl px-8 py-4' : 'px-2 py-2'} flex items-center justify-center text-white cursor-grab active:cursor-grabbing`}
                            style={{
                                left: `calc(50% + ${item.x})`,
                                top: `calc(50% + ${item.y})`,
                            }}
                            initial={{
                                y: -400,
                                opacity: 0,
                                rotateX: -45,
                                x: item.dragX,
                            }}
                            animate={{
                                y: item.dragY,
                                x: item.dragX,
                                opacity: 1,
                                rotateX: 0,
                                rotate: randomRotate,
                            }}
                            transition={{
                                duration: 3.5,
                                ease: [0.25, 0.8, 0.25, 1],
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: randomRotate + (Math.random() - 0.5) * 10,
                            }}
                            whileDrag={{
                                scale: 1.1,
                                zIndex: 50,
                                rotate: randomRotate + 5,
                            }}
                        >
                            {item.icon ? (
                                <div className="bg-white p-2 rounded-full">
                                    <ArrowDown size={48} strokeWidth={1.5} className="text-black pointer-events-none" />
                                </div>
                            ) : (
                                <motion.h1 className="text-4xl font-mono text-white whitespace-nowrap pointer-events-none">
                                    {item.text}
                                </motion.h1>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Right Text Section */}
            <div className="absolute bottom-48 right-10 hidden md:block">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-center md:text-left max-w-md text-white"
                >
                    <h2 className="text-3xl md:text-xl font-mono leading-tight text-white">
                        A PRODUCT DESIGNER MAKING
                    </h2>
                    <h2 className="text-3xl md:text-xl font-mono leading-tight text-white">
                        SIMPLICITY FEEL EXCITING
                    </h2>
                </motion.div>
            </div>

            {/* Mobile Text Section */}
            <div className="absolute bottom-32 left-0 right-0 md:hidden">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }}
                    className="text-center px-4"
                >
                    <h2 className="text-xl font-mono leading-tight text-white">
                        A PRODUCT DESIGNER MAKING
                    </h2>
                    <h2 className="text-xl font-mono leading-tight text-white">
                        SIMPLICITY FEEL EXCITING
                    </h2>
                </motion.div>
            </div>

            {/* Name in big letters */}
            <motion.div
                className="absolute bottom-10 left-0 right-0 w-full text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-7xl lg:text-[130px] font-bold text-white tracking-wider px-2">
                    DHANASHRI SHITOLE
                    {/* UNKWNOWN DESIGNER */}
                </h1>
            </motion.div>
        </div>
    );
}