// export default function VideoSection() {
//   return (
//     <div className="relative w-full h-screen bg-gray-800">
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/video.webm" type="video/webm" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
//         <h2
//           className="text-white text-6xl font-bold font-sans tracking-wide
//                         text-shadow-lg
//                         bg-gradient-to-r from-purple-500 to-pink-500
//                         bg-clip-text text-transparent"
//         >
//           {/* Uddheshya Studio */}
//         </h2>
//       </div>
//     </div>
//   );
// }
export default function VideoSection() {
  return (
    <div className="relative w-full h-screen bg-gray-800">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-1 80"
        autoPlay
        loop
        muted
      >
        <source src="/web.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <h2
          className="text-white text-6xl font-bold font-sans tracking-wide 
                            text-shadow-lg 
                            bg-gradient-to-r from-purple-500 to-pink-500 
                            bg-clip-text text-transparent"
        >
          {/* Uddheshya Studio */}
        </h2>
      </div>
    </div>
  );
}
