"use strict";
/**
 * @author 王羽彪
 * @description 图灵插件，nodejs插件
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turing = void 0;
var Turing = /** @class */ (function () {
    function Turing() {
        this.turing = {};
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
    Turing.prototype.Link = function (hwnd, mode) {
        if (mode === void 0) { mode = "normal"; }
        this.turing.Link(hwnd, mode);
    };
    /**
     * 解除指定窗口句柄的关联
     * @param mode 字符串型，可选，默认空（"km"取消后台键鼠模式）
     */
    Turing.prototype.UnLink = function (mode) {
        if (mode === void 0) { mode = ""; }
        this.turing.UnLink(mode);
    };
    /**
     * 查找窗口类名或者标题得到窗口句柄
     * @param iClass 字符串型，窗口类名(空填"")
     * @param iTitle 字符串型，窗口标题(空填"")
     * @returns 整数型，窗口句柄
     */
    Turing.prototype.Window_FindHwnd = function (iClass, iTitle) {
        return this.Window_FindHwnd(iClass, iTitle);
    };
    /**
     * 得到指定关联句柄的窗口屏幕位置区域
     * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
     * @returns {WindowSize}
     */
    Turing.prototype.Window_GetSize = function (iHwnd) {
        if (iHwnd === void 0) { iHwnd = 0; }
        var winSize = this.turing.Window_GetSize(iHwnd);
        var _a = winSize.split(',').map(function (s) { return Number(s); }), left = _a[0], top = _a[1], right = _a[2], bottom = _a[3];
        return {
            left: left,
            top: top,
            right: right,
            bottom: bottom
        };
    };
    /**
     * 指定任意窗口句柄即可得到窗口最顶级的祖父句柄
     * @param iHwnd 整数型，可选，窗口内任意元素句柄(默认0:使用关联窗口句柄)
     */
    Turing.prototype.Window_GetAncestor = function (iHwnd) {
        if (iHwnd === void 0) { iHwnd = 0; }
        return this.turing.Window_GetAncestor(iHwnd);
    };
    /**
     * 获取指定屏幕坐标下的窗口句柄
     * @param x 整数型，屏幕X坐标
     * @param y 整数型，屏幕Y坐标
     * @returns 整数型，坐标下句柄
     */
    Turing.prototype.Window_GetPointHwnd = function (x, y) {
        return this.turing.Window_GetPointHwnd(x, y);
    };
    /**
     * 移动指定窗口句柄在屏幕上的位置
     * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
     * @param iLeft 整数型，可选，屏幕X坐标(默认0)
     * @param iTop 整数型，可选，屏幕Y坐标(默认0)
     * @param width 整数型，可选，窗口宽度(默认0)
     * @param height 整数型，可选，窗口高度(默认0)
     */
    Turing.prototype.Wndow_MoveTo = function (iHwnd, iLeft, iTop, width, height) {
        if (iHwnd === void 0) { iHwnd = 0; }
        if (iLeft === void 0) { iLeft = 0; }
        if (iTop === void 0) { iTop = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        this.turing.Window_MoveTo(iHwnd, iLeft, iTop, width, height);
    };
    /**
     * 锁定指定窗口句柄在屏幕上的位置
     * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
     * @param Flag 布尔型，可选，锁定状态(默认锁定True)
     */
    Turing.prototype.Window_Lock = function (iHwnd, Flag) {
        if (iHwnd === void 0) { iHwnd = 0; }
        if (Flag === void 0) { Flag = true; }
        this.turing.Window_Lock(iHwnd, Flag);
    };
    /**
     * 根据类名或者标题来枚举所有顶层窗口句柄
     * @param iClass 字符串型，模糊筛选条件：窗口类名(空填"")
     * @param iTitle 字符串型，模糊筛选条件：窗口标题(空填"")
     * @returns 字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
     */
    Turing.prototype.Window_Enum = function (iClass, iTitle) {
        if (iClass === void 0) { iClass = ""; }
        if (iTitle === void 0) { iTitle = ""; }
        return this.turing.Window_Enum(iClass, iTitle);
    };
    /**
     * 根据类名或者标题来枚举指定窗口的所有子句柄
     * @param iHwnd 整数型，窗口句柄(默认0:使用关联窗口句柄)
     * @param iClass 字符串型，模糊筛选条件：窗口类名(空填"")
     * @param iTitle 字符串型，模糊筛选条件：窗口标题(空填"")
     * @returns 字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
     */
    Turing.prototype.Window_EnumChild = function (iHwnd, iClass, iTitle) {
        if (iHwnd === void 0) { iHwnd = 0; }
        if (iClass === void 0) { iClass = ""; }
        if (iTitle === void 0) { iTitle = ""; }
        return this.turing.Window_EnumChild(iHwnd, iClass, iTitle).split(',').map(function (s) { return Number(s); });
    };
    /**
     * 对窗口进行假激活后并获得焦点（同鼠标点击窗口后的效果，但不会置前）
     * @param iHwnd 整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
     */
    Turing.prototype.Window_FakeActive = function (iHwnd) {
        if (iHwnd === void 0) { iHwnd = 0; }
        this.Window_FakeActive(iHwnd);
    };
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
    Turing.prototype.Pixel_FromScreen = function (left, top, right, bottom, Model) {
        if (Model === void 0) { Model = 0; }
        this.turing.Pixel_FromScreen(left, top, right, bottom, Model);
    };
    /**
     * 获取指定路径图片文件的图像像素数据
     * @param ImagePath 字符串型，图片文件的路径(支持：bmp、png、jpg、gif|帧、格式)，GIF帧参数："路径|帧"
     * @param Model 整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
     */
    Turing.prototype.Pixel_FromPicture = function (ImagePath, Model) {
        if (Model === void 0) { Model = 0; }
        this.turing.Pixel_FromPicture(ImagePath, Model);
    };
    /**
     * 获取内存地址中的24位bmp图像像素数据
     * @param Data 整数型，内存数据地址指针
     * @param Size 整数型，内存数据长度
     * @param Model 整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
     */
    Turing.prototype.Pixel_FromMemory = function (Data, Size, Model) {
        if (Model === void 0) { Model = 0; }
        this.turing.Pixel_FromMemory(Data, Size, Model);
    };
    /**
     * 获取当前鼠标图案的像素数据
     * @param Width 整数型，可选，宽度（默认32）
     * @param Height 整数型，可选，高度（默认32）
     * @param model 整数型，可选，模式(默认0鼠标图案，1为鼠标位置的屏幕图像)
     */
    Turing.prototype.Pixel_FromMouse = function (Width, Height, model) {
        if (model === void 0) { model = 0; }
        var _a = this.turing.Pixel_FromMouse(Width, Height, model).split(',').map(Number), x = _a[0], y = _a[1];
        return {
            x: x,
            y: y
        };
    };
    /**
     * 对获取的图像像素数据进行显示查看
     * @param Mode 整数型，可选，模式：图像或直方图（默认0图像,1垂直直方图,2水平直方图）
     * @param subline 布尔型，可选，默认False（True显示十字辅助线）
     */
    Turing.prototype.Pixel_Preview = function (Mode, subline) {
        if (Mode === void 0) { Mode = 0; }
        if (subline === void 0) { subline = false; }
        var _a = this.turing.Pixel_Preview(Mode, subline).split(',').map(Number), x = _a[0], y = _a[1];
        return {
            x: x,
            y: y
        };
    };
    // 配置图像数据
    /**
     * 将内部的图像数据保存为.bmp图片文件
     * @param ImagePath
     */
    Turing.prototype.SaveImageData = function (ImagePath) {
        return this.turing.SaveImageData(ImagePath);
    };
    /**
     * 载入图像像素数据，用于内部滤镜处理
     * @param ImageData 字符串型，图像像素数据，格式：宽|高|图像数据(b,g,r,a,b,g,r,a,…)
     * @returns
     */
    Turing.prototype.LoadImageData = function (ImageData) {
        return this.turing.LoadImageData(ImageData);
    };
    /**
     * 获取图像数据的内存地址和数据长度
     * @param data 整数型，返回图像数据内存地址
     * @param size 整数型，返回图像数据字节长度
     * @returns
     */
    Turing.prototype.GetMemoryDataBmp = function (data, size) {
        return this.turing.GetMemoryDataBmp(data, size);
    };
    /**
     * 得到内部的图像像素数据，用于二次开发
     * @param value 整数型，可选，模式（默认0:宽|高|图像数据，1:宽|高，2:全部设置到剪切板）
     * @returns {ImageInfo}
     */
    Turing.prototype.GetImageData = function (value) {
        if (value === void 0) { value = 0; }
        var _a = this.turing.GetImageData(value).split(','), width = _a[0], height = _a[1], imageData = _a[2];
        return {
            width: Number(width),
            height: Number(height),
            data: imageData
        };
    };
    /**
     * 获取指定图片的宽度和高度
     * @param FilePath 字符串型，图片文件的路径(支持：bmp、png、jpg、gif格式)
     * @returns {ImageInfo}
     */
    Turing.prototype.GetImageSize = function (FilePath) {
        var _a = this.turing.GetImageSize(FilePath).split(',').map(Number), width = _a[0], height = _a[1];
        return {
            width: width,
            height: height
        };
    };
    /**
     * 获取Gif图片帧数
     * @param FilePath 字符串型，GIF图片文件的路径(支持：gif格式)
     * @returns 整数型，GIF图片帧数
     */
    Turing.prototype.GetGifFrames = function (FilePath) {
        return this.turing.GetGifFrames(FilePath);
    };
    /**
     * 对获取的图像像素数据进行颜色图层拆分
     * @param Interval 整数型，两颜色值之间的空间距离（以HSV的颜色空间计算的）
     * @param Value 字符串型，筛选掉干扰的颜色点数范围（例：大于保留："15"个像素，区间保留："520-9751"个像素）
     * @returns 整数型，颜色图层数量
     */
    Turing.prototype.Pixel_ColorImageData = function (Interval, Value) {
        return this.turing.Pixel_ColorImageData(Interval, Value);
    };
    /**
     * 对获取的图像像素数据进行RGB通道图层拆分（顺序：蓝绿红）
     * @param Model 布尔型，可选，默认False全图，True单色图
     */
    Turing.prototype.Pixel_ChannelImageData = function (Model) {
        if (Model === void 0) { Model = false; }
        this.turing.Pixel_ChannelImageData(Model);
    };
    /**
     * 图像像素数据拆分为多个（上限10个）
     * @param left 整数型，屏幕左上角X坐标
     * @param top 整数型，屏幕左上角Y坐标
     * @param right 整数型，屏幕右下角X坐标
     * @param bottom 整数型，屏幕右下角Y坐标
     * @param Serial 整数型，分配数据编号（默认1，上限10个）
     */
    Turing.prototype.Pixel_CutImageData = function (left, top, right, bottom, Serial) {
        if (Serial === void 0) { Serial = 1; }
        this.turing.Pixel_CutImageData(left, top, right, bottom, Serial);
    };
    /**
     * 对拆分的图像像素数据进行设置
     * @param Serial 整数型，指定数据编号（默认1，上限10个）
     */
    Turing.prototype.Pixel_SetImageData = function (Serial) {
        if (Serial === void 0) { Serial = 1; }
        this.turing.Pixel_SetImageData(Serial);
    };
    /**
     * 配置图像像素数据应用于图色场景
     * @param Mode 整数型，场景模式(默认1找图场景,2绘图图像>
     */
    Turing.prototype.Pixel_SetSceneImageData = function (Mode) {
        if (Mode === void 0) { Mode = 1; }
        this.turing.Pixel_SetSceneImageData(Mode);
    };
    /**
     * 对切割的字符图像像素数据进行设置
     * @param index 整数型，切割图像索引号
     */
    Turing.prototype.Pixel_SetImageDataCut = function (index) {
        this.turing.Pixel_SetImageDataCut(index);
    };
    /**
     * 对字库的字符图像像素数据进行设置
     * @param Index 整数型，字库图像索引号
     * @returns 字符串型，字库对应的文字
     */
    Turing.prototype.Pixel_SetImageDataLib = function (Index) {
        return this.turing.Pixel_SetImageDataLib(Index);
    };
    /**
     * 对拆分的颜色图层设置为图像像素数据
     * @param Index 整数型，颜色图层数据索引号（顺序：蓝绿红）
     */
    Turing.prototype.Pixel_SetLayerImageData = function (Index) {
        this.turing.Pixel_SetLayerImageData(Index);
    };
    // 剪切板图像
    /**
     * 获取剪切板中的图像像素数据
     */
    Turing.prototype.Pixel_GetClpImageData = function () {
        this.turing.Pixel_GetClpImageData();
    };
    /**
     * 将内部的图像数据设置到剪切板中
     */
    Turing.prototype.Pixel_SetClpImageData = function () {
        this.turing.Pixel_SetClpImageData();
    };
    /**
     * 设置屏幕图像数据保存到剪切板中
     * @param left 整数型，屏幕左上角X坐标
     * @param top 整数型，屏幕左上角Y坐标
     * @param right 整数型，屏幕右下角X坐标
     * @param bottom 整数型，屏幕右下角Y坐标
     */
    Turing.prototype.Pixel_SetClpScreenData = function (left, top, right, bottom) {
        this.turing.Pixel_SetClpScreenData(left, top, right, bottom);
    };
    /**
     * 设置图片图像数据保存到剪切板中
     * @param ImagePath 字符串型，图片文件的路径
     */
    Turing.prototype.Pixel_SetClpPictureData = function (ImagePath) {
        this.turing.Pixel_SetClpPictureData(ImagePath);
    };
    /**
     * 剪切板中的图像数据保存为图片文件
     * @param ImagePath 字符串型，保存图片文件的路径
     */
    Turing.prototype.Pixel_SaveClpImageData = function (ImagePath) {
        this.turing.Pixel_SaveClpImageData(ImagePath);
    };
    /** 文字识别 END */
    /**
     * 获取当前已注册的插件完整路径
     * @returns 字符串型，插件完整路径
     */
    Turing.prototype.Path = function () {
        return this.turing.Path();
    };
    /**
     * 当前插件版本号
     * @returns  当前插件版本号
     */
    Turing.prototype.Version = function () {
        return this.turing.Version();
    };
    return Turing;
}());
exports.Turing = Turing;
