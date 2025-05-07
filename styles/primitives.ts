import { tv } from "tailwind-variants";

export const button = tv({
    base: "group transition-all py-[15.5px] w-fit px-[30px] before:w-[160%] before:h-[190%] flex justify-center before:rounded-[50%] z-[1] before:z-[-1] hover:before:top-[-35%] overflow-hidden before:absolute relative before:top-[180%] hover:before:-scale-y-150 before:transition-all rounded-full bg-white inline-block relative text-black",
    variants: {
      whiteOrange: {
        true: "hover:border-transparent bg-white text-black hover:text-red-100 border-primary before:bg-primary",
      },
    },
    defaultVariants: {
        whiteOrange: true,
    },
  });