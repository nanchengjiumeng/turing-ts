import { createTuring } from "../../src/turing";

const TURING = createTuring()

// 获取屏幕图像数据
TURING.Pixel_FromScreen(0, 0, 200, 100)

// 显示获取的图像
TURING.Pixel_Preview()