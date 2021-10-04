import ffi = require('ffi-napi');
export default function (): {
    LeftClick: (count?: number) => void;
    RightClick: (count?: number) => void;
    lib: {
        M_Open: ffi.ForeignFunction<number, [number]>;
        M_LeftClick: ffi.ForeignFunction<void, [number, number]>;
        M_RightClick: ffi.ForeignFunction<void, [number, number]>;
    };
};
