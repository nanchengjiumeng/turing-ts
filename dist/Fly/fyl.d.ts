export default function (path?: string): {
    LeftClick: (count?: number) => number;
    RightClick: (count?: number) => number;
    MoveTo2: (x: number, y: number) => number;
    MoveTo3: (x: number, y: number) => number;
    M_ResolutionUsed: (x: number, y: number) => number;
    KeyPress: (keycode: number, num: number) => number;
    KeyDown: (keycode: number) => number;
    KeyUp: (keycode: number) => number;
    KeyState: (keycode: number) => number;
};
