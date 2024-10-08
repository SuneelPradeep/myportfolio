// // import React from 'react'
// // import Image from 'next/image';
// // import Link from 'next/link';

// // interface ImageProps {
// //     src  :string;
// //     alt : string;
// //     href? : string;
// //     height? : string;
// //     dimensions? : {width : number,height: number};
// //     imageClassName? : string
// // }
// // const ImageLink : React.FC<ImageProps> = ({src,alt,href="#", height, dimensions,imageClassName}) => {
// //   return (
// //     <div>
// //       <a href={href} target="_blank" rel="noreferrer">
// //         <Image
// //           src={src}
// //           alt={alt}
// //           width={height! * 2}
// //           height={height}
// //           className={`${imageClassName ? imageClassName : 'rounded shadow-lg object-cover'}`}
// //         />
// //       </a>
// //   </div>
// //   )
// // }

// // export default ImageLinks

// 'use client';
// import { BiLinkExternal } from "react-icons/bi";

// type Dimensions = { width: number; height: number };

// type Props = {
//   src: string;
//   alt: string;
//   href?: string;
//   height?: number;
//   dimensions?: Dimensions;
//   imageClassName?: string;
// };

// const ImageLink: React.FC<Props> = ({ src, alt, href = "#", height, dimensions, imageClassName }) => {
  
//   return (
//   <div className="relative overflow-hidden shadow rounded group" >
//     <Link href={href} >
//     <a target="_blank" rel="noreferrer" className="flex">
//       {dimensions ? (
//         <img
//           src={src}
//           alt={alt}
//           width={dimensions.width}
//           height={dimensions.height}
//           className={clsx("rounded shadow-lg object-cover", imageClassName)}
//         />
//       ) : (
//         <div style={{ height }} className="w-full relative rounded shadow-lg overflow-hidden min-h-[250px]">
//           <img
//             src={src}
//             alt={alt}
//             width={height! * 2}
//             height={height}
//             className={clsx("object-cover", imageClassName)}
//           />
//         </div>
//       )}
//       <div className="absolute inset-0 bg-neutral-900 text-white opacity-0 flex items-center justify-center transition group-hover:opacity-60">
//         <BiLinkExternal fontSize={64} />
//       </div>
//     </a></Link>
//   </div>
// )};

// export default ImageLink;
