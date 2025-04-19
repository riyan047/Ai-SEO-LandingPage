import React from "react";

export const Button = (props: React.PropsWithChildren) => {
    return (
        <button type='submit' className='relative px-3 py-2 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8c45ff] '>
            <div className='absolute inset-0 '>
                <div className='absolute inset-0 border rounded-lg border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]' />
                <div className='absolute inset-0 border rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]' />
                <div className='absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255,0.7)_inset] rounded-lg' />
            </div>
            <span>
                {props.children}
            </span>
        </button>
    );
};