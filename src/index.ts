/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */

type hwnd = number;
type mode = string;
type ImageData = string; // 宽|高|图像数据(b,g,r,a,b,g,r,a,…)

interface WindowSize {
  left: number; // 窗口左上角X坐标
  top: number, // 窗口左上角Y坐标
  right: number, // 窗口右下角X坐标
  bottom: number // 窗口右下角Y坐标
}

interface Postion {
  x: number,
  y: number
}

interface ImageInfo {
  width: number, // 字符串型，图像宽度
  height: number, // 字符串型，图像高度
  data?: string // 字符串型，图像数据
}

export class Turing {
  private turing: any;
  constructor() {
    this.turing = {}
  }

  /**  窗口句柄 START */


  /**
   * 关联指定的窗口句柄
   * @param hwnd 整数型，窗口句柄(窗口不能最小化)
   * @param mode 字符串型，可选，关联模式。
  默认：普通窗口后台"normal"，
  普通前台窗口"window"，
  3D游戏窗口后台"gdi"(切换主题为Aero再试)，
  Aero主题缩略图后台"aero"，
  后台键鼠模式"km"。
   */
  Link(hwnd: hwnd, mode: mode = "normal"): void {
    this.turing.Link(hwnd, mode)
  }

  /**
   * 解除指定窗口句柄的关联
   * @param mode 字符串型，可选，默认空（"km"取消后台键鼠模式）
   */
  UnLink(mode: mode = ""): void {
    this.turing.UnLink(mode)
  }


  /**
   * 查找窗口类名或者标题得到窗口句柄
   * @param iClass 字符串型，窗口类名(空填"")
   * @param iTitle 字符串型，窗口标题(空填"")
   * @returns 整数型，窗口句柄
   */
  Window_FindHwnd(iClass: string, iTitle: string): hwnd {
    return this.Window_FindHwnd(iClass, iTitle)
  }

  /**
   * 得到指定关联句柄的窗口屏幕位置区域
   * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
   * @returns {WindowSize} 
   */
  Window_GetSize(iHwnd: hwnd = 0): WindowSize {
    const winSize: string = this.turing.Window_GetSize(iHwnd)
    const [left, top, right, bottom] = winSize.split(',').map(s => Number(s))
    return {
      left,
      top,
      right,
      bottom
    }
  }

  /**
   * 指定任意窗口句柄即可得到窗口最顶级的祖父句柄
   * @param iHwnd 整数型，可选，窗口内任意元素句柄(默认0:使用关联窗口句柄)
   */
  Window_GetAncestor(iHwnd: hwnd = 0): hwnd {
    return this.turing.Window_GetAncestor(iHwnd)
  }

  /**
   * 获取指定屏幕坐标下的窗口句柄
   * @param x 整数型，屏幕X坐标
   * @param y 整数型，屏幕Y坐标
   * @returns 整数型，坐标下句柄
   */
  Window_GetPointHwnd(x: number, y: number): hwnd {
    return this.turing.Window_GetPointHwnd(x, y)
  }

  /**
   * 移动指定窗口句柄在屏幕上的位置
   * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
   * @param iLeft 整数型，可选，屏幕X坐标(默认0)
   * @param iTop 整数型，可选，屏幕Y坐标(默认0)
   * @param width 整数型，可选，窗口宽度(默认0)
   * @param height 整数型，可选，窗口高度(默认0)
   */
  Wndow_MoveTo(iHwnd: hwnd = 0, iLeft: number = 0, iTop: number = 0, width: number = 0, height: number = 0): void {
    this.turing.Window_MoveTo(iHwnd, iLeft, iTop, width, height)
  }

  /**
   * 锁定指定窗口句柄在屏幕上的位置
   * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
   * @param Flag 布尔型，可选，锁定状态(默认锁定True)
   */
  Window_Lock(iHwnd: hwnd = 0, Flag: boolean = true): void {
    this.turing.Window_Lock(iHwnd, Flag)
  }

  /**
   * 根据类名或者标题来枚举所有顶层窗口句柄
   * @param iClass 字符串型，模糊筛选条件：窗口类名(空填"")
   * @param iTitle 字符串型，模糊筛选条件：窗口标题(空填"")
   * @returns 字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
   */
  Window_Enum(iClass: string = "", iTitle: string = ""): hwnd {
    return this.turing.Window_Enum(iClass, iTitle)
  }

  /**
   * 根据类名或者标题来枚举指定窗口的所有子句柄
   * @param iHwnd 整数型，窗口句柄(默认0:使用关联窗口句柄)
   * @param iClass 字符串型，模糊筛选条件：窗口类名(空填"")
   * @param iTitle 字符串型，模糊筛选条件：窗口标题(空填"")
   * @returns 字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
   */
  Window_EnumChild(iHwnd: hwnd = 0, iClass: string = "", iTitle: string = ""): Array<hwnd> {
    return this.turing.Window_EnumChild(iHwnd, iClass, iTitle).split(',').map((s: string) => Number(s));
  }

  /**
   * 对窗口进行假激活后并获得焦点（同鼠标点击窗口后的效果，但不会置前）
   * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
   */
  Window_FakeActive(iHwnd: hwnd = 0): void {
    this.Window_FakeActive(iHwnd)
  }

  /** 窗口句柄 END */


  /** 文字识别 START */

  // 步骤一：获取图像 
  /**
   * 获取屏幕指定范围的图像像素数据
   * @param left 整数型，屏幕左上角X坐标
   * @param top 整数型，屏幕左上角Y坐标
   * @param right 整数型，屏幕右下角X坐标
   * @param bottom 整数型，屏幕右下角Y坐标
   * @param Model 整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
   */
  Pixel_FromScreen(left: number, top: number, right: number, bottom: number, Model: number = 0): void {
    this.turing.Pixel_FromScreen(left, top, right, bottom, Model)
  }

  /**
   * 获取指定路径图片文件的图像像素数据
   * @param ImagePath 字符串型，图片文件的路径(支持：bmp、png、jpg、gif|帧、格式)，GIF帧参数："路径|帧"
   * @param Model 整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
   */
  Pixel_FromPicture(ImagePath: string, Model: number = 0): void {
    this.turing.Pixel_FromPicture(ImagePath, Model)
  }

  /**
   * 获取内存地址中的24位bmp图像像素数据
   * @param Data 整数型，内存数据地址指针
   * @param Size 整数型，内存数据长度
   * @param Model 整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
   */
  Pixel_FromMemory(Data: number, Size: number, Model: number = 0): void {
    this.turing.Pixel_FromMemory(Data, Size, Model)
  }

  /**
   * 获取当前鼠标图案的像素数据
   * @param Width 整数型，可选，宽度（默认32）
   * @param Height 整数型，可选，高度（默认32）
   * @param model 整数型，可选，模式(默认0鼠标图案，1为鼠标位置的屏幕图像)
   */
  Pixel_FromMouse(Width: number, Height: number, model: number = 0): Postion {
    const [x, y] = this.turing.Pixel_FromMouse(Width, Height, model).split(',').map(Number)
    return {
      x,
      y
    }
  }

  /**
   * 对获取的图像像素数据进行显示查看
   * @param Mode 整数型，可选，模式：图像或直方图（默认0图像,1垂直直方图,2水平直方图）
   * @param subline 布尔型，可选，默认False（True显示十字辅助线）
   */
  Pixel_Preview(Mode: number = 0, subline: boolean = false) {
    const [x, y] = this.turing.Pixel_Preview(Mode, subline).split(',').map(Number)
    return {
      x,
      y
    }
  }

  // 配置图像数据
  /**
   * 将内部的图像数据保存为.bmp图片文件
   * @param ImagePath 
   */
  SaveImageData(ImagePath: string): void {
    return this.turing.SaveImageData(ImagePath)
  }

  /**
   * 载入图像像素数据，用于内部滤镜处理
   * @param ImageData 字符串型，图像像素数据，格式：宽|高|图像数据(b,g,r,a,b,g,r,a,…)
   * @returns 
   */
  LoadImageData(ImageData: string): void {
    return this.turing.LoadImageData(ImageData)
  }

  /**
   * 获取图像数据的内存地址和数据长度
   * @param data 整数型，返回图像数据内存地址
   * @param size 整数型，返回图像数据字节长度
   * @returns 
   */
  GetMemoryDataBmp(data: number, size: number): void {
    return this.turing.GetMemoryDataBmp(data, size)
  }

  /**
   * 得到内部的图像像素数据，用于二次开发
   * @param value 整数型，可选，模式（默认0:宽|高|图像数据，1:宽|高，2:全部设置到剪切板）
   * @returns {ImageInfo}
   */
  GetImageData(value: number = 0): ImageInfo {
    const [width, height, imageData] = this.turing.GetImageData(value).split(',')
    return {
      width: Number(width),
      height: Number(height),
      data: imageData
    }
  }

  /**
   * 获取指定图片的宽度和高度
   * @param FilePath 字符串型，图片文件的路径(支持：bmp、png、jpg、gif格式)
   * @returns {ImageInfo}
   */
  GetImageSize(FilePath: string): ImageInfo {
    const [width, height] = this.turing.GetImageSize(FilePath).split(',').map(Number)
    return {
      width,
      height
    }
  }

  /**
   * 获取Gif图片帧数
   * @param FilePath 字符串型，GIF图片文件的路径(支持：gif格式)
   * @returns 整数型，GIF图片帧数
   */
  GetGifFrames(FilePath: string): number {
    return this.turing.GetGifFrames(FilePath)
  }

  /**
   * 对获取的图像像素数据进行颜色图层拆分
   * @param Interval 整数型，两颜色值之间的空间距离（以HSV的颜色空间计算的）
   * @param Value 字符串型，筛选掉干扰的颜色点数范围（例：大于保留："15"个像素，区间保留："520-9751"个像素）
   * @returns 整数型，颜色图层数量
   */
  Pixel_ColorImageData(Interval: number, Value: string): number {
    return this.turing.Pixel_ColorImageData(Interval, Value)
  }

  /**
   * 对获取的图像像素数据进行RGB通道图层拆分（顺序：蓝绿红）
   * @param Model 布尔型，可选，默认False全图，True单色图
   */
  Pixel_ChannelImageData(Model: boolean = false): void {
    this.turing.Pixel_ChannelImageData(Model)
  }

  /**
   * 图像像素数据拆分为多个（上限10个）
   * @param left 整数型，屏幕左上角X坐标
   * @param top 整数型，屏幕左上角Y坐标
   * @param right 整数型，屏幕右下角X坐标
   * @param bottom 整数型，屏幕右下角Y坐标
   * @param Serial 整数型，分配数据编号（默认1，上限10个）
   */
  Pixel_CutImageData(left: number, top: number, right: number, bottom: number, Serial: number = 1): void {
    this.turing.Pixel_CutImageData(left, top, right, bottom, Serial)
  }

  /**
   * 对拆分的图像像素数据进行设置
   * @param Serial 整数型，指定数据编号（默认1，上限10个）
   */
  Pixel_SetImageData(Serial: number = 1) {
    this.turing.Pixel_SetImageData(Serial)
  }

  /**
   * 配置图像像素数据应用于图色场景
   * @param Mode 整数型，场景模式(默认1找图场景,2绘图图像>
   */
  Pixel_SetSceneImageData(Mode: number = 1): void {
    this.turing.Pixel_SetSceneImageData(Mode)
  }

  /**
   * 对切割的字符图像像素数据进行设置
   * @param index 整数型，切割图像索引号
   */
  Pixel_SetImageDataCut(index: number): void {
    this.turing.Pixel_SetImageDataCut(index)
  }

  /**
   * 对字库的字符图像像素数据进行设置
   * @param Index 整数型，字库图像索引号
   * @returns 字符串型，字库对应的文字
   */
  Pixel_SetImageDataLib(Index: number): string {
    return this.turing.Pixel_SetImageDataLib(Index)
  }

  /**
   * 对拆分的颜色图层设置为图像像素数据
   * @param Index 整数型，颜色图层数据索引号（顺序：蓝绿红）
   */
  Pixel_SetLayerImageData(Index: number): void {
    this.turing.Pixel_SetLayerImageData(Index)
  }

  // 剪切板图像
  /**
   * 获取剪切板中的图像像素数据
   */
  Pixel_GetClpImageData(): void {
    this.turing.Pixel_GetClpImageData()
  }

  /**
   * 将内部的图像数据设置到剪切板中
   */
  Pixel_SetClpImageData(): void {
    this.turing.Pixel_SetClpImageData()
  }

  /**
   * 设置屏幕图像数据保存到剪切板中
   * @param left 整数型，屏幕左上角X坐标
   * @param top 整数型，屏幕左上角Y坐标
   * @param right 整数型，屏幕右下角X坐标
   * @param bottom 整数型，屏幕右下角Y坐标
   */
  Pixel_SetClpScreenData(left: number, top: number, right: number, bottom: number): void {
    this.turing.Pixel_SetClpScreenData(left, top, right, bottom)
  }

  /**
   * 设置图片图像数据保存到剪切板中
   * @param ImagePath 字符串型，图片文件的路径
   */
  Pixel_SetClpPictureData(ImagePath: string): void {
    this.turing.Pixel_SetClpPictureData(ImagePath)
  }

  /**
   * 剪切板中的图像数据保存为图片文件
   * @param ImagePath 字符串型，保存图片文件的路径
   */
  Pixel_SaveClpImageData(ImagePath: string): void {
    this.turing.Pixel_SaveClpImageData(ImagePath)
  }

  // 步骤二 滤镜处理
  // 彩色
  /**
   * (针对彩色图像处理)二值化滤镜
   * @param value 字符串型，色阶阈值（范围：0-255）
或者：指定颜色串BBGGRR-BDGDRD（"0000FF-000080|00FFFF"）(反色效果："@BBGGRR-DBDGDR")
或者：通过智能筛选黑白点数均衡取得（"ai"）
或者：通过最大类间方差法[Otsu]取得（"auto"）
   */
  Filter_Binaryzation(value: string): void {
    this.turing.Filter_Binaryzation(value)
  }
  /**
   * (针对彩色图像处理)灰度滤镜
   * @param mode 整数型，可选，模式（默认0:标准灰，1:PS算法灰，2:PS算法去色）
   * @returns Gray：整数型，灰色平均值
   */
  Filter_Gray(mode: number = 0): number {
    return this.turing.Filter_Gray(mode)
  }
  /**
   * (针对彩色图像处理)色调分离滤镜
   * @param value 整数型，色阶阈值（范围：2~255）
   * @returns 
   */
  Filter_Posterization(value: number): void {
    this.turing.Filter_Posterization(value)
  }
  /**
   * (针对彩色图像处理)指定色点数量的颜色为黑色
   * @param Kind 整数型，颜色种类数量，默认1
   * @param Num 整数型，指定颜色点数量，默认0
   * @param isMax 布尔型，是否指定最多数量的颜色，否则为最少数量，默认True
   */
  Filter_CheckPoints(Kind: number = 1, Num: number = 0, isMax: boolean = true) {
    this.turing.Filter_CheckPoints(Kind, Num, isMax)
  }
  /**
   * (针对彩色图像处理)对指定颜色的像素进行描边
   * @param Value 字符串型，指定颜色的字符（默认FFFFFF，格式：BBGGRR）
   * @param fColor 字符串型，描边颜色（默认FFFFFF，格式：BBGGRR）
   * @param bColor 字符串型，背景色（备用，默认000000）
   */
  Filter_PixelStroke(Value: string = 'FFFFFF', fColor: string = 'FFFFFF', bColor: string = '000000') {
    this.turing.Filter_PixelStroke(Value, fColor, bColor)
  }
  /**
   * (针对彩色图像处理)两图像数据之间的差异提取，并返回匹配到的点数
   * @param ImgData1 整数型，备份图像编号1 或者 字符串型，图像的像素数据1（格式：宽|高|图像数据）
   * @param ImgData2 整数型，备份图像编号2 或者 字符串型，图像的像素数据2（格式：宽|高|图像数据）
   * @param Similarity 整数型，颜色相似度（范围：0.1~1）
   * @param Filtrate 字符串型，可选，保留颜色（指定颜色为黑色，如：指定"FFFFFF"则白色相似的变为黑色，其他变成白色）
   * @returns ：整数型，比对匹配上的点数量（白色为不同数据）
   */
  Filter_DiffeExtract(ImgData1: number | ImageData, ImgData2: number | ImageData, Similarity?: number, Filtrate?: string): number {
    if (Filtrate) {
      return this.turing.Filter_DiffeExtract(ImgData1, ImgData2, Similarity, Filtrate)
    } if (Similarity) {
      return this.turing.Filter_DiffeExtract(ImgData1, ImgData2, Similarity)
    } else {
      return this.turing.Filter_DiffeExtract(ImgData1, ImgData2)
    }
  }
  /**
   * (针对彩色图像处理)两图像数据之间的相似颜色进行提取，并返回匹配到的点数
   * @param ImgData1 整数型，备份图像编号1
   * @param ImgData2 整数型，备份图像编号2
   * @param Similarity 整数型，颜色相似度（范围：0.1~1）
   * @returns 整数型，比对匹配上的相似点数量
   */
  Filter_KeepColors(ImgData1: number, ImgData2: number, Similarity?: number) {
    if (Similarity) {
      return this.turing.Filter_KeepColors(ImgData1, ImgData2)
    } else {
      return this.turing.Filter_KeepColors(ImgData1, ImgData2, Similarity)
    }
  }
  /**
   * (针对彩色图像处理)指定大小的单色块进行保留
   * @param iWidth 整数型，指定色块宽度（不能与高同时小于2）
   * @param iHeight 整数型，指定色块高度（不能与宽同时小于2）
   * @param fColor 字符串型，设置前景色（默认BBGGRR白色"FFFFFF"，为空时保留颜色）
   * @param bColor 字符串型，设置背景色（默认BBGGRR黑色"000000"）
   * @returns 
   */
  Filter_BlockChoose(iWidth: number, iHeight: number, fColor: string = 'FFFFFF', bColor: string = '000000'): void {
    return this.Filter_BlockChoose(iWidth, iHeight, fColor, bColor)
  }
  // 黑白
  /**
   * (针对黑白图像处理)清除杂点滤镜
   * @param Value 整数型，点数阈值（范围：1~8）
   * @param Interval 整数型，间隙，默认0
   * @param Mode 整数型，模式（默认：1去白点，0去黑点）
   * @returns 
   */
  Filter_Despeckle(Value: number, Interval: number = 0, Mode: number = 1): void {
    return this.turing.Filter_Despeckle(Value, Interval, Mode)
  }
  /**
   * (针对黑白图像处理)清除杂点滤镜_增强
   * @param Num Num：整数型，点数阈值
   * @param Through Through：布尔型，是否八向，默认True
   * @param Mode 整数型，颜色模式（默认：1去白点，0去黑点）
   * @returns 
   */
  Filter_DespeckleEx(Num: number, Through: boolean = true, Mode: number = 1): void {
    return this.turing.Filter_DespeckleEx(Num, Through, Mode)
  }
  /**
   * (针对黑白图像处理)保留指定大小范围的色块
   * @param Width 整数型，保留宽大小
   * @param Height 整数型，保留高大小
   * @param Through 布尔型，可选，是否穿透（默认：True穿透）
   * @returns 
   */
  Filter_LeaveSize(Width: number, Height: number, Through: boolean = true): void {
    return this.turing.Filter_LeaveSize(Width, Height, Through)
  }
  /**
   * (针对黑白图像处理)去掉直线滤镜
   * @param value 整数型，点数百分比（范围：1~100）
   * @returns 
   */
  Filter_EraseLine(value: number): void {
    return this.turing.Filter_EraseLine(value)
  }
  /**
   * (针对黑白图像处理)直线检测提取滤镜
   * @param Through ：整数型，默认0，方向：0全部(含斜向)，1水平，2垂直，3横纵向
   * @param Num 整数型，默认10，直线长度点数
   * @param wValue 整数型，默认0.5，横向点数或横向百分比（范围：0.1~0.99）
   * @param hValue 整数型，默认0.5，纵向点数或纵向百分比（范围：0.1~0.99）
   * @returns 
   */
  Filter_LineCheck(Through: number = 0, Num: number = 10, wValue: number = 0.5, hValue: number = 0.5): void {
    return this.turing.Filter_LineCheck(Through, Num, wValue, hValue)
  }
  /**
   * (针对黑白图像处理)获取轮廓滤镜
   * @param Value 整数型，可选，两颜色之间的差值阈值，默认0
   * @param Interval 整数型，可选，间隙距离，默认1
   * @param R 整数型，可选，R颜色分量值，默认0
   * @param G 整数型，可选，G颜色分量值，默认0
   * @param B 整数型，可选，B颜色分量值，默认0
   * @returns 
   */
  Filter_Outline(Value: number = 0, Interval: number = 1, R: number = 0, G: number = 0, B: number = 0): void {
    return this.turing.Filter_Outline(Value, Interval, R, G, B)
  }
  /**
   * (针对黑白图像处理)提取色块滤镜
   * @param width 整数型，色块宽度范围
   * @param height 整数型，色块高度范围
   * @param num 整数型，符合点数量
   * @returns 
   */
  Filter_ExtractBlock(width: number, height: number, num: number) {
    return this.turing.Filter_ExtractBlock(width, height, num)
  }
  /**
   * (针对黑白图像处理)倾斜矫正滤镜
   * @returns 
   */
  Filter_SlantCorrect() {
    return this.turing.Filter_SlantCorrect()
  }
  /**
   * (针对黑白图像处理)旋转纠正滤镜(使用白点占比最大的方法)
   * @param angle 整数型，旋转的正负度数值（范围：1~90）
   * @param value 整数型，旋转的度数步进（范围：1~9）
   * @returns degree：整数型，转正的度数
   */
  Filter_RotateCorrect(angle: number, value: number): number {
    return this.turing.Filter_RotateCorrect(angle, value)
  }
  /**
   * (针对黑白图像处理)颠倒颜色滤镜
   * @param Mode 整数型，模式（默认：1白多变黑，0黑多变白，2单纯反色)
   */
  Filter_InverseColor(Mode: number = 1): void {
    this.turing.Filter_InverseColor(Mode)
  }
  /**
   * (针对黑白图像处理)腐蚀膨胀滤镜
   * @param Mode 整数型，模式（默认：1膨胀，0腐蚀）
   */
  Filter_DilationErosion(Mode: number = 1): void {
    this.turing.Filter_DilationErosion(Mode)
  }
  /**
   * (针对黑白图像处理)细化抽骨(细骨)滤镜
   */
  Filter_ThinBone(): void {
    this.turing.Filter_ThinBone()
  }
  /**
   * Filter_ValidCut 裁剪有效图像
   * @param Value 字符串型，可选，裁剪方式（默认空：裁剪黑边，"auto"：四角相同颜色裁剪，可指定颜色"0000FF"）
   */
  Filter_ValidCut(Value: string = 'auto'): void {
    this.turing.Filter_ValidCut(Value)
  }
  /**
   * (针对黑白图像处理)栅栏调整滤镜
   * @param Direction 整数型，选择横列分栏时的方向
   * @param Num 整数型，间隙穿透白色干扰点数
   * @param Interval 整数型，重新摆放后的间隙距离
   */
  Filter_FenceAdjust(Direction?: number, Num?: number, Interval?: number): void {
    if (Interval) {
      this.turing.Filter_FenceAdjust(Direction, Num, Interval)
    } else if (Num) {
      this.turing.Filter_FenceAdjust(Direction, Num)
    } else if (Direction) {
      this.turing.Filter_FenceAdjust(Direction)
    } else {
      this.turing.Filter_FenceAdjust()
    }
  }

  // 通用
  /**
   * (通用图像处理)等比缩放滤镜
   * @param xTimes 整数型，宽度倍数，0.5缩小2倍（范围：0.1~1,2~8）
   * @param yTimes 整数型，高度倍数，0.5缩小2倍（范围：0.1~1,2~8）
   */
  Filter_Zoom(xTimes: number, yTimes: number): void {
    this.turing.Filter_Zoom(xTimes, yTimes)
  }
  /**
   * (通用图像处理)缩放归一化滤镜
   * @param width 整数型，宽度数值
   * @param height 整数型，高度数值
   */
  Filter_ZoomOne(width: number, height: number): void {
    this.turing.Filter_ZoomOne(width, height)
  }
  /**
   * TURING.Filter_ColorChoose(value, bColor)
   * @param value 字符串型，指定颜色串BBGGRR-BDGDRD（"0000FF-000080|00FFFF"）(反选效果："@BBGGRR-DBDGDR")
   * @param bColor 字符串型，设置背景色（默认BBGGRR黑色"000000"）
   */
  Filter_ColorChoose(value: string, bColor: string = '000000'): void {
    this.turing.Filter_ColorChoose(value, bColor)
  }
  /**
   * (通用图像处理)图像斑点祛除
   * @param Sensitivity 整数型，周边颜色与中间颜色的差值灵敏度，默认25
   * @param Num 整数型，平均色的元素个数，默认2
   */
  Filter_DispelSpot(Sensitivity: number = 25, Num: number = 2): void {
    this.turing.Filter_DispelSpot(Sensitivity, Num)
  }
  /**
   * (通用图像处理)右下对角点的互补颜色查找滤镜
   * @returns Colors：字符串型，互补色颜色串，竖线分隔
   */
  Filter_Complementary(): number {
    return this.turing.Filter_Complementary()
  }
  /**
   * (通用图像处理)指定任意范围对内部图像数据进行裁剪
   * @param Left 整数型，范围左上角X坐标（可以负数）
   * @param Top 整数型，范围左上角Y坐标（可以负数）
   * @param Right 整数型，范围右下角X坐标（可以超过原图大小）
   * @param Bottom 整数型，范围右下角Y坐标（可以超过原图大小）
   */
  Filter_Tailor(Left: number, Top: number, Right: number, Bottom: number) {
    this.turing.Filter_Tailor(Left, Top, Right, Bottom)
  }
  /**
   * (通用图像处理)按一定角度旋转图像
   * @param angle 整数型，旋转的正负度数值，正数顺时针（默认45，范围：正负0~360）
   */
  Filter_Rotate(angle: number = 45) {
    this.turing.Filter_Rotate(angle)
  }
  /**
   * TURING.Filter_Mirror(Direction)
   * @param Direction 整数型，镜像的方向（默认0水平镜像，1垂直镜像，2水平和垂直同时镜像）
   */
  Filter_Mirror(Direction: number = 0) {
    this.turing.Filter_Mirror(Direction)
  }
  /**
   * (通用图像处理)指定每(行/列)的移动数量组成特征串进行扭正图像
   * @param Value 字符串型，像素移位特征串|开始行列数（移动数值：正数向左移动，负数向右移动）
   * @param Direction 整数型，像素移位方向（默认0，0水平，1垂直）
   */
  Filter_Shift(Value: string, Direction: number): void {
    this.turing.Filter_Shift(Value, Direction)
  }
  /**
   * (通用图像处理)柔化指定图像（类似模糊）
   */
  Filter_Softness(): void {
    this.turing.Filter_Softness()
  }
  /**
   * (通用图像处理)图像中的颜色进行扩散（类似磨砂玻璃）
   */
  Filter_Diffuse(): void {
    this.turing.Filter_Diffuse()
  }
  /**
   * (通用图像处理)电影底片效果（反向颜色：RGB三种颜色分别取255的差值）
   */
  Filter_Negative(): void {
    this.turing.Filter_Negative()
  }
  /**
   * (通用图像处理)呈现一种暗调，对比度对比度明显的效果
   */
  Filter_DarkColor(): void {
    this.turing.Filter_DarkColor()
  }

  // 步骤三
  // 步骤四
  // 步骤五

  /** 文字识别 END */


  /**
   * 获取当前已注册的插件完整路径
   * @returns 字符串型，插件完整路径
   */
  Path(): string {
    return this.turing.Path()
  }

  /**
   * 当前插件版本号
   * @returns  当前插件版本号
   */
  Version(): string {
    return this.turing.Version()
  }
}

