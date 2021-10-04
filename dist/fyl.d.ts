export default function (): {
    LeftClick: (count?: number) => void;
    RightClick: (count?: number) => void;
    MoveTo2: (x: number, y: number) => void;
    MoveTo3: (x: number, y: number) => void;
    M_ResolutionUsed: (x: number, y: number) => number;
};
