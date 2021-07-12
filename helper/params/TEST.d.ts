interface a {
/**
	* 查看所有设备名称（用于多设备时切换）
        
	* @param Serial：整数型，可选，设备序号（默认0:所有设备）
	* @returns DevicesIdS：字符串型，设备名称（格式：设备名称|设备名称|…）
 */
Adb_Devices(Serial?: number): string;
/**
	* 在当前窗口中输入文字 
        
	* @param Text：字符串型，输入内容（仅支持英文、标点符号和数字）
	* @returns 无
 */
Adb_InputText: string(Text): void;
/**
	* 模拟键盘按键响应操作
        
	* @param Key：整数型，键码
	* @returns 无
 */
Adb_Key: numberEvent(Key): void;
/**
	* 运行ADB命令之前必须关联ADB调试桥
        
	* @param AdbPath：字符串型，ADB完整路径（可以是雷电模拟器路径下的adb.exe）
* @param DevicesId：字符串型，可选，设备名称（默认空:为第一个设备）
	* @returns 无
 */
Adb_Link(AdbPath: string, DevicesId?: string): void;
/**
	* 获取设备屏幕指定范围的图像像素数据
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param Mode：整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
	* @returns 无
 */
Adb_Screencap(left: number, top: number, right: number, bottom: number, Mode?: number): void;
/**
	* 模拟手指在屏幕上的划动操作
        
	* @param x1：整数型，起点屏幕X1坐标
* @param y1：整数型，起点屏幕Y1坐标<br>
* @param x2：整数型，终点屏幕X2坐标<br>
* @param y2：整数型，终点屏幕Y2坐标
	* @returns 无
 */
Adb_Swipe(x1: number, y1: number, x2: number, y2: number): void;
/**
	* 模拟短暂的点击操作
        
	* @param x：整数型，设备屏幕X坐标
* @param y：整数型，设备屏幕Y坐标
	* @returns 无
 */
Adb_Tap(x: number, y: number): void;
/**
	* 角度计算，指北为0度
        
	* @param aX：整数型，圆心点x
* @param aY：整数型，圆心点y<br>
* @param bX：整数型，移动点x<br>
* @param bY：整数型，移动点y
	* @returns Angle：整数型，角度（指北为0度）
 */
AngleCalc(aX: number, aY: number, bX: number, bY: number): number;
/**
	* BGR格式与RGB格式互相转换颜色空间
        
	* @param color1：字符串型，16进制颜色值
	* @returns color2：字符串型，16进制颜色值
 */
BGRvsRGB(Color1): string;
/**
	* 二进制转十六进制字符串
        
	* @param BinStr：字符串型，二进制字符串内容
	* @returns HexStr：字符串型，十六进制字符串内容
 */
BINtoHEX(BinStr: string): string;
/**
	* 生成贝塞尔曲线轨迹数据
        
	* @param coordinates：字符串型，坐标节点(格式："x坐标,y坐标|x坐标,y坐标|…")
* @param stepping：小数型，步进
	* @returns Pos：字符串型，曲线上所有坐标（格式：x坐标,y坐标-x坐标,y坐标…）
 */
BezierCurve(coordinates: string,stepping: 1231231221312): string;
/**
	* 计算一个算术表达式（仅四则运算）
        
	* @param formula：字符串型，算术表达式
	* @returns num：字符串型，计算结果数值
 */
Calc(formula: string): string;
/**
	* 计算两颜色相似程度
        
	* @param color1：字符串型，16进制颜色值1（格式：BBGGRR）
* @param color2：字符串型，16进制颜色值2（格式：BBGGRR）
	* @returns Num：小数型，颜色相似程度（最相似100,不相似为0）
 */
ColorSimilarity(color1: string，color2: string): 1231231221312;
/**
	* 统计内部图像数据上的颜色点数量
        
	* @param Color：字符串型，指定统计的颜色串BBGGRR-BDGDRD（例："0000FF-000080|00FFFF"）
	* @returns Num：整数型，颜色点数量
 */
CountColor: stringNum(Color): number;
/**
	* 十进制转二进制字符串
        
	* @param DecNum：整数型，十进制数字
	* @returns BinStr：字符串型，二进制字符串内容
 */
DECtoBIN(DecNum: number): string;
/**
	* 计算图像中颜色最小的区域范围
        
	* @param 无
	* @returns [坐标]
x：返回X坐标<br>
y：返回Y坐标
 */
Different(): string;
/**
	* 在内部的图像数据上画一个箭头
        
	* @param x1：整数型，起点X坐标
* @param y1：整数型，起点Y坐标<br>
* @param x2：整数型，终点X坐标<br>
* @param y2：整数型，终点Y坐标<br>
* @param size：整数型，可选，箭头大小，默认16<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值<br>
* @param Full:布尔型，可选，默认False，填充实心为True<br>
* @param Alpha:整数型，可选，透明度（默认100不透明，需要填充实心才能生效）
	* @returns 无
 */
Draw_Arrow(x1: number, y1: number, x2: number, y2: number, size?: number, R?: number, G?: number, B?: number, Full, Alpha): void;
/**
	* 【存储】将内部的各种模式的图像数据进行备份（最终为备份数据）
        
	* @param Serial：整数型，备份编号（范围：1~4096）
* @param Mode：整数型，模式（默认0：内部图像数据，1：图中图数据，2：绘图数据）
	* @returns 无
 */
Draw_Backups(Serial: number, Mode: number): void;
/**
	* 在内部的图像数据上画一个实心矩形方块
        
	* @param left：整数型，左上角X坐标
* @param top：整数型，左上角Y坐标<br>
* @param right：整数型，右下角X坐标<br>
* @param bottom：整数型，右下角Y坐标<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值<br>
* @param Alpha:整数型，可选，透明度（默认100不透明）
	* @returns 无
 */
Draw_B?: numberlock(left: number, top: number, right: number, bottom: number, R?: number, G?: number, B, Alpha): void;
/**
	* 随机生成一个数学（加减乘）计算的验证码
        
	* @param 无
	* @returns Num：整数型，返回验证码中计算的结果
 */
Draw_CAPTCHA(): number;
/**
	* 在内部的图像数据上画一个圆形
        
	* @param x：整数型，圆心X坐标
* @param y：整数型，圆心Y坐标<br>
* @param Radius：整数型，圆的半径<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值<br>
* @param Full:布尔型，可选，默认False，填充实心为True<br>
* @param Alpha:整数型，可选，透明度（默认100不透明，需要填充实心才能生效）
	* @returns 无
 */
Draw_Circle(x: number, y: number, R?: numberadius: number, R, G?: number, B?: number, Full, Alpha): void;
/**
	* 创建一个空白的内部图像数据的画布
        
	* @param Width：整数型，画布的宽度
* @param Height：整数型，画布的高度<br>
* @param R：整数型，可选，默认0，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值
	* @returns 无
 */
Draw_CreateCanvas(Width: number, Height: number, R?: number, G?: number, B?: number): void;
/**
	* 在内部的图像数据上画一条直线虚线
        
	* @param x1：整数型，起点X坐标
* @param y1：整数型，起点Y坐标<br>
* @param x2：整数型，终点X坐标<br>
* @param y2：整数型，终点Y坐标<br>
* @param Length：整数型，长度<br>
* @param Interval：整数型，间隙<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值
	* @returns 无
 */
Draw_DottedLine(x1: number, y1: number, x2: number, y2: number, Length: number, Interval: number, R?: number, G?: number, B?: number): void;
/**
	* 在内部的图像数据上画一个椭圆形
        
	* @param x：整数型，圆心X坐标
* @param y：整数型，圆心Y坐标<br>
* @param wRadius：整数型，椭圆的宽半径<br>
* @param hRadius：整数型，椭圆的高半径<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值<br>
* @param Full:布尔型，可选，默认False，填充实心为True<br>
* @param Alpha:整数型，可选，透明度（默认100不透明，需要填充实心才能生效）
	* @returns 无
 */
Draw_Ellipse(x: number, y: number, wR?: numberadius: number, hRadius: number, R, G?: number, B?: number, Full, Alpha): void;
/**
	* 在内部的图像数据上对指定坐标开始进行颜色填充
        
	* @param x：整数型，开始X坐标
* @param y：整数型，开始Y坐标<br>
* @param Through：布尔型，可选，是否八向,默认False<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值
	* @returns Area：字符串型，返回填充区域范围（格式：左,上,右,下）
 */
Draw_Fill(x: number, y: number, Through?: boolean, R?: number, G?: number, B?: number): string;
/**
	* 在内部的图像数据上画一个爱心
        
	* @param x：整数型，左上X坐标
* @param y：整数型，左上Y坐标<br>
* @param w：整数型，宽度<br>
* @param h：整数型，高度<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值<br>
* @param Full:布尔型，可选，默认False，填充实心为True<br>
* @param Alpha:整数型，可选，透明度（默认100不透明，需要填充实心才能生效）
	* @returns 无
 */
Draw: number_Heart(x: number, y: number, w, h: number, R?: number, G?: number, B?: number, Full, Alpha): void;
/**
	* 在内部的图像数据上进行绘制图片图像
        
	* @param x：整数型，X坐标
* @param y：整数型，Y坐标<br>
* @param FilePath：字符串型，可选，图片路径（为空""时，使用的是内部绘图数据）<br>
* @param Alpha:整数型，可选，透明度（默认100不透明）
	* @returns 无
 */
Draw_Image(x: number, y: number, FilePath?: string, Alpha): void;
/**
	* 在内部的图像数据上画一条直线
        
	* @param x1：整数型，起点X坐标
* @param y1：整数型，起点Y坐标<br>
* @param x2：整数型，终点X坐标<br>
* @param y2：整数型，终点Y坐标<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值
	* @returns 无
 */
Draw_Line(x1: number, y1: number, x2: number, y2: number, R?: number, G?: number, B?: number): void;
/**
	* 在内部的图像数据上画了一个点
        
	* @param x：整数型，X坐标
* @param y：整数型，Y坐标<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值
	* @returns 无
 */
Draw_Point(x: number, y: number, R?: number, G?: number, B?: number): void;
/**
	* 【覆盖】恢复内部的备份图像数据为其他模式的数据
        
	* @param Serial：整数型，备份编号（范围：1~4096）
* @param Mode：整数型，模式（默认0：内部图像数据，1：图中图数据，2：绘图数据）
	* @returns 无
 */
Draw_Recover(Serial: number, Mode: number): void;
/**
	* 在内部的图像数据上画一个矩形框
        
	* @param left：整数型，左上角X坐标
* @param top：整数型，左上角Y坐标<br>
* @param right：整数型，右下角X坐标<br>
* @param bottom：整数型，右下角Y坐标<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值
	* @returns 无
 */
Draw_R?: numberectangle(left: number, top: number, right: number, bottom: number, R, G?: number, B?: number): void;
/**
	* 在内部的图像数据上进行打字文本内容
        
	* @param x：整数型，X坐标
* @param y：整数型，Y坐标<br>
* @param Text：字符串型，打字文本内容<br>
* @param Mode：字符串型，可选，样式，默认："宋体|9|0|0"（格式：字体|字号|模式<0正常，1粗体，2斜体，4下划线，8删除线。其他依次叠加数字>|精度<0抗锯齿，1清晰>）<br>
* @param R：整数型，可选，默认255，10进制红色分量值<br>
* @param G：整数型，可选，默认0，10进制绿色分量值<br>
* @param B：整数型，可选，默认0，10进制蓝色分量值
	* @returns 无
 */
Draw_Tex: numbert(x, y: number, Text: string, Mode?: string, R?: number, G?: number, B?: number): void;
/**
	* 评价图像清晰度（对图像进行差平方的统计）
        
	* @param 无
	* @returns num：整数型，清晰度数值
 */
EvalVariance(): number;
/**
	* 下载指定的网络地址文件（包含图片和任何格式文件）
        
	* @param sUrl：字符串型，网络文件地址
* @param SaveName：字符串型，保存文件路径（记得写对后缀名）
	* @returns 无
 */
FileDownload(sUrl: string, SaveName: string): void;
/**
	* 对多张图片合成GIF文件
        
	* @param LoadName：字符串型，加载多张图片（jpg,bmp,png），但必须是同尺寸文件（格式：图片1|图片2|…）
* @param SaveName：字符串型，保存文件路径<br>
* @param Delay：整数型，可选，延迟时间（默认100毫秒）
	* @returns 无
 */
FileSaveGIF(LoadName: string, SaveName: string, Delay?: number): void;
/**
	* 压缩一个文件（自创算法,效率还是不错的）
        
	* @param OriginalFile：字符串型，原始文件路径
* @param ZipPath：字符串型，压缩后文件路径（后缀名任意！）
	* @returns ret：布尔型，是否成功（失败：False或0）
 */
Files_Dried(OriginalFile: string, ZipPath: string): boolean;
/**
	* 多个文件进行合并为一个文件
        
	* @param FilesPath：字符串型，多个文件路径（可以不同的文件路径，多文件用竖线|分隔）
* @param SaveFile：字符串型，保存文件路径（后缀名任意！）
	* @returns ret：布尔型，是否成功（失败：False）
 */
Files_Merge(FilesPath: string, SaveFile: string): boolean;
/**
	* 读取文本文件内容
        
	* @param FilePath：字符串型，文件路径（后缀名任意！）
	* @returns ret：字符串型，文本内容
 */
Files_Read(FilePath: string): string;
/**
	* 保存文本文件内容
        
	* @param iText：字符串型，文本内容
* @param SavePath：字符串型，保存文件路径（后缀名任意！）
	* @returns 无
 */
Files_Save(iText: string, SavePath: string): void;
/**
	* 遍历指定目录下所有文件夹和文件名（单层目录遍历）
        
	* @param sPath：字符串型，指定目录的路径
* @param sType：字符串型，可选，筛选的文件类型（默认全部：""，格式：jpg|bmp|png）<br>
* @param value：布尔型，可选，是否包含文件夹名（默认：False，含：True）
	* @returns Names：字符串型，文件夹名\|文件名|…
 */
Files_Search(sPath: string, sType?: string, value?: boolean): string;
/**
	* 对已合并的文件拆分为多个文件
        
	* @param FilePath：字符串型，已合并的文件路径
* @param SaveFolder：字符串型，释放文件夹路径
	* @returns ret：布尔型，是否成功（失败：False）
 */
Files_Split(FilePath: string, SaveFolder: string): boolean;
/**
	* 解压一个文件（自创算法,效率还是不错的）
        
	* @param ZipFile：字符串型，压缩文件路径
* @param OutputFile：字符串型，释放后文件路径（后缀名任意！）
	* @returns ret：布尔型，是否成功（失败：False或0）
 */
Files_UnDried(ZipFile: string, OutputFile: string): boolean;
/**
	* 在文件末尾写入一行文本内容
        
	* @param iText：字符串型，文本内容
* @param SavePath：字符串型，保存文件路径（后缀名任意！）
	* @returns 无
 */
Files_WriteLine(iText: string, SavePath: string): void;
/**
	* (针对彩色图像处理)二值化滤镜
        
	* @param value：字符串型，色阶阈值（范围：0-255）
* @param 或者：指定颜色串BBGGRR-BDGDRD（"0000FF-000080|00FFFF"）(反色效果："@BBGGRR-DBDGDR")<br>
* @param 或者：通过智能筛选黑白点数均衡取得（"ai"）<br>
* @param 或者：通过最大类间方差法[Otsu]取得（"auto"）
	* @returns 无
 */
Filter_Binaryzation(value: string): void;
/**
	* (针对彩色图像处理)指定大小的单色块进行保留
        
	* @param iWidth：整数型，指定色块宽度（不能与高同时小于2）
* @param iWidth：整数型，指定色块高度（不能与宽同时小于2）<br>
* @param fColor：字符串型，设置前景色（默认BBGGRR白色"FFFFFF"，为空时保留颜色）<br>
* @param bColor：字符串型，设置背景色（默认BBGGRR黑色"000000"）
	* @returns 无
 */
Filter_BlockChoose(iWidth: number: number, iHeight, fColor: string, bColor: string): void;
/**
	* (针对彩色图像处理)指定色点数量的颜色为黑色
        
	* @param Kind：整数型，颜色种类数量，默认1
* @param Num：整数型，指定颜色点数量，默认0<br>
* @param isMax：布尔型，是否指定最多数量的颜色，否则为最少数量，默认True
	* @returns 无
 */
Filter_CheckPoints(Kind: number, Num: number, isMax: boolean): void;
/**
	* (通用图像处理)指定颜色保留或者涂黑滤镜
        
	* @param value：字符串型，指定颜色串BBGGRR-BDGDRD（"0000FF-000080|00FFFF"）(反选效果："@BBGGRR-DBDGDR")
* @param bColor：字符串型，设置背景色（默认BBGGRR黑色"000000"）
	* @returns 无
 */
Filter_ColorChoose(value: string, bColor: string): void;
/**
	* (通用图像处理)右下对角点的互补颜色查找滤镜
        
	* @param 无
	* @returns Colors：字符串型，互补色颜色串，竖线分隔
 */
Filter_Complementary(): string;
/**
	* (通用图像处理)呈现一种暗调，对比度对比度明显的效果
        
	* @param 无
	* @returns 无
 */
Filter_Negative(): void;
/**
	* (针对黑白图像处理)清除杂点滤镜
        
	* @param Value：整数型，点数阈值（范围：1~8）
* @param Interval：整数型，间隙，默认0<br>
* @param Mode：整数型，模式（默认：1去白点，0去黑点）
	* @returns 无
 */
Filter_Despeckle(Value: number, Interval: number, Mode: number): void;
/**
	* (针对黑白图像处理)清除杂点滤镜_增强
        
	* @param Num：整数型，点数阈值
* @param Through：布尔型，是否八向，默认True<br>
* @param Mode：整数型，颜色模式（默认：1去白点，0去黑点）
	* @returns 无
 */
Filter_DespeckleEx(Num: number, Through: boolean, Mode: number): void;
/**
	* (针对彩色图像处理)两图像数据之间的差异提取，并返回匹配到的点数
        
	* @param ImgData1：整数型，备份图像编号1 <span class="blue">或者</span> 字符串型，图像的像素数据1（格式：宽|高|图像数据）
* @param ImgData2：整数型，备份图像编号2 <span class="blue">或者</span> 字符串型，图像的像素数据2（格式：宽|高|图像数据）<br>
* @param Similarity：整数型，颜色相似度（范围：0.1~1）<br>
* @param Filtrate：字符串型，可选，保留颜色（指定颜色为黑色，如：指定"FFFFFF"则白色相似的变为黑色，其他变成白色）
	* @returns Num：整数型，比对匹配上的点数量（白色为不同数据）
 */
Filter_DiffeExtract(ImgData1: number, ImgData2: number, Similarity: number, Filtrate?: string): number;
/**
	* (通用图像处理)图像中的颜色进行扩散（类似磨砂玻璃）
        
	* @param 无
	* @returns 无
 */
Filter_Diffuse(): void;
/**
	* (针对黑白图像处理)腐蚀膨胀滤镜
        
	* @param Model：整数型，模式（默认：1膨胀，0腐蚀）
	* @returns 无
 */
Filter_DilationErosion(Model: number): void;
/**
	* (通用图像处理)图像斑点祛除
        
	* @param Sensitivity：整数型，周边颜色与中间颜色的差值灵敏度，默认25
* @param Num：整数型，平均色的元素个数，默认2
	* @returns 无
 */
Filter_DispelSpot(Sensitivity: number, Num: number): void;
/**
	* (针对黑白图像处理)去掉直线滤镜
        
	* @param value：整数型，点数百分比（范围：1~100）
	* @returns 无
 */
Filter_EraseLine(value: number): void;
/**
	* (针对黑白图像处理)提取色块滤镜
        
	* @param width：整数型，色块宽度范围
* @param height：整数型，色块高度范围<br>
* @param num：整数型，符合点数量
	* @returns 无
 */
Filter_ExtractBlock(width: num: numberber, height: number, num): void;
/**
	* (针对黑白图像处理)栅栏调整滤镜
        
	* @param Direction：整数型，选择横列分栏时的方向
* @param Num：整数型，间隙穿透白色干扰点数<br>
* @param Interval：整数型，重新摆放后的间隙距离
	* @returns 无
 */
Filter_FenceAdjust(Direction: number, Num: number, Interval: number): void;
/**
	* (针对彩色图像处理)灰度滤镜
        
	* @param mode：整数型，可选，模式（默认0:标准灰，1:PS算法灰，2:PS算法去色）
	* @returns Gray：整数型，灰色平均值
 */
Filter_Gray(mode?: number): number;
/**
	* (针对黑白图像处理)颠倒颜色滤镜
        
	* @param Model：整数型，模式（默认：1白多变黑，0黑多变白，2单纯反色）
	* @returns 无
 */
Filter_InverseColor(Model: number): void;
/**
	* (针对彩色图像处理)两图像数据之间的相似颜色进行提取，并返回匹配到的点数
        
	* @param ImgData1：整数型，备份图像编号1
* @param ImgData2：整数型，备份图像编号2<br>
* @param Similarity：整数型，颜色相似度（范围：0.1~1）
	* @returns Num：整数型，比对匹配上的相似点数量
 */
Filter_KeepColors(ImgData1: number, ImgData2: number, Similarity: number): number;
/**
	* (针对黑白图像处理)保留指定大小范围的色块
        
	* @param Width：整数型，保留宽大小
* @param Height：整数型，保留高大小<br>
* @param Through：布尔型，可选，是否穿透（默认：True穿透）
	* @returns 无
 */
Filter_LeaveSize(Width: number, Height: number, Through?: boolean): void;
/**
	* (针对黑白图像处理)直线检测提取滤镜
        
	* @param Through：整数型，默认0，方向：0全部(含斜向)，1水平，2垂直，3横纵向
* @param Num：整数型，默认10，直线长度点数<br>
* @param wValue：整数型，默认0.5，横向点数或横向百分比（范围：0.1~0.99）<br>
* @param hValue：整数型，默认0.5，纵向点数或纵向百分比（范围：0.1~0.99）
	* @returns 无
 */
Filter_LineCheck(Through: number, Num: number, wValue: number, hValue: number): void;
/**
	* (通用图像处理)按一定方向镜像图像
        
	* @param Direction：整数型，镜像的方向（默认0水平镜像，1垂直镜像，2水平和垂直同时镜像）
	* @returns 无
 */
Filter_Mirror(Direction: number): void;
/**
	* (通用图像处理)电影底片效果（反向颜色：RGB三种颜色分别取255的差值）
        
	* @param 无
	* @returns 无
 */
Filter_Negative(): void;
/**
	* (针对黑白图像处理)获取轮廓滤镜
        
	* @param Value：整数型，可选，两颜色之间的差值阈值，默认0
* @param Interval：整数型，可选，间隙距离，默认1<br>
* @param R：整数型，可选，R颜色分量值，默认0<br>
* @param G：整数型，可选，G颜色分量值，默认0<br>
* @param B：整数型，可选，B颜色分量值，默认0
	* @returns 无
 */
Filter_Outline(Value?: number, Interval?: number, R?: number, G?: number, B?: number): void;
/**
	* (针对彩色图像处理)对指定颜色的像素进行描边
        
	* @param Value：字符串型，指定颜色的字符（默认FFFFFF，格式：BBGGRR）
* @param fColor：字符串型，描边颜色（默认FFFFFF，格式：BBGGRR）<br>
* @param bColor：字符串型，背景色（备用，默认000000）
	* @returns 无
 */
Filter_PixelStroke(Value: string, fColor: string, bColor: string): void;
/**
	* (针对彩色图像处理)色调分离滤镜
        
	* @param value：整数型，色阶阈值（范围：2~255）
	* @returns 无
 */
Filter_Posterization(value: number): void;
/**
	* (通用图像处理)按一定角度旋转图像
        
	* @param angle：整数型，旋转的正负度数值，正数顺时针（默认45，范围：正负0~360）
	* @returns 无
 */
Filter_Rotate(angle: number): void;
/**
	* (针对黑白图像处理)旋转纠正滤镜(使用白点占比最大的方法)
        
	* @param angle：整数型，旋转的正负度数值（范围：1~90）
* @param value：整数型，旋转的度数步进（范围：1~9）
	* @returns degree：整数型，转正的度数
 */
Filter_RotateCorrect(angle: number, value: number): number;
/**
	* (通用图像处理)指定每(行/列)的移动数量组成特征串进行扭正图像
        
	* @param Value：字符串型，像素移位特征串|开始行列数（移动数值：正数向左移动，负数向右移动）
* @param Direction：整数型，像素移位方向（默认0，0水平，1垂直）
	* @returns 无
 */
Filter_Shift(Value: string, Direction: number): void;
/**
	* (针对黑白图像处理)倾斜矫正滤镜
        
	* @param 无
	* @returns 无
 */
Filter_SlantCorrect(): void;
/**
	* (通用图像处理)柔化指定图像（类似模糊）
        
	* @param 无
	* @returns 无
 */
Filter_Softness(): void;
/**
	* (通用图像处理)指定任意范围对内部图像数据进行裁剪
        
	* @param Left：整数型，范围左上角X坐标（可以负数）
* @param Top：整数型，范围左上角Y坐标（可以负数）<br>
* @param Right：整数型，范围右下角X坐标（可以超过原图大小）<br>
* @param Bottom：整数型，范围右下角Y坐标（可以超过原图大小）
	* @returns 无
 */
Filter_Tailor(Left: number, Top: number, Right: number, Bottom: number): void;
/**
	* (针对黑白图像处理)细化抽骨(细骨)滤镜
        
	* @param 无
	* @returns 无
 */
Filter_ThinBone(): void;
/**
	* (针对黑白图像处理)一键裁剪有效图像数据滤镜(裁剪四个角一样的颜色)
        
	* @param Value:字符串型，可选，裁剪方式（默认空：裁剪黑边，"auto"：四角相同颜色裁剪，可指定颜色"0000FF"）
	* @returns 无
 */
Filter_ValidCut(Value): void;
/**
	* (通用图像处理)等比缩放滤镜
        
	* @param xTimes：整数型，宽度倍数，0.5缩小2倍（范围：0.1~1,2~8）
* @param yTimes：整数型，高度倍数，0.5缩小2倍（范围：0.1~1,2~8）
	* @returns 无
 */
Filter_Zoom(xTimes: number, yTimes: number): void;
/**
	* (通用图像处理)缩放归一化滤镜
        
	* @param width：整数型，宽度数值
* @param height：整数型，高度数值
	* @returns 无
 */
Filter_ZoomOne(width: number, height: number): void;
/**
	* 屏幕指定区域内查找颜色
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param color：字符串型，16进制颜色值<br>
* @param direction：整数型，查找方向（0从左上往右下，1从左下往右上，2从右上往左下，3从右下往左上，4从上左往下右，5从上右往下左，6从下左往上右，7从下右往上左）<br>
* @param similarity：整数型，颜色相似度（范围：0.1~1）
	* @returns [坐标，格式：x,y]
x：返回屏幕X坐标<br>
y：返回屏幕Y坐标
 */
FindColor(left: number, top: number, right: number, bottom: number, color: string, direction: number, similarity: number): string;
/**
	* 屏幕区域内查找指定大小并且符合颜色串点数量的色块
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param scolor：字符串型，符合的颜色串（格式：0000FF-101010|00FF00），多个颜色竖线分隔，支持偏色<br>
* @param w：整数型，指定宽度<br>
* @param h：整数型，指定高度<br>
* @param n：整数型，指定点数量或相似度(0.1~1.0)
	* @returns [坐标，格式：x,y]
x：返回屏幕X坐标<br>
y：返回屏幕Y坐标
 */
Fin: numberdColorBlock(left: number, top: number, righ: numbert: number, bottom: number, scolor: string, w: number, h, n): string;
/**
	* 屏幕指定区域内查找多个颜色及多个坐标
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param colorS：字符串型，16进制颜色值，多色用竖线|分隔<br>
* @param direction：整数型，查找方向（0从左上往右下，1从左下往右上，2从右上往左下，3从右下往左上，4从上左往下右，5从上右往下左，6从下左往上右，7从下右往上左）<br>
* @param similarity：整数型，颜色相似度（范围：0.1~1）
	* @returns [坐标，格式：x,y|x,y|…]
xyS：返回屏幕多个坐标（格式：x坐标,y坐标|x坐标,y坐标|…）
 */
FindColorExS(left: number, top: number, right: number, bottom: number, colorS: string, direction: number, similarity: number): string;
/**
	* 屏幕指定区域内查找图片（同按键精灵）
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param ImagePath：字符串型，需要查找的图片路径<br>
* @param similarity：整数型，颜色相似度（范围：0.1~1）/字符串型,颜色偏色值（范围：000000~FFFFFF）
	* @returns [坐标，格式：x,y]
x：返回屏幕X坐标<br>
y：返回屏幕Y坐标
 */
FindImage(left: number, top: number, right: number, bottom: number, ImagePath: string, similarity: number): string;
/**
	* 屏幕指定区域内查找所有图片的其中一张
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param ImagePathS：字符串型，需要查找的图片路径，多图用竖线|分隔<br>
* @param similarity：整数型，颜色相似度（范围：0.1~1）/字符串型,颜色偏色值（范围：000000~FFFFFF）
	* @returns [坐标，格式：id,x,y]
id：图片标识号，从0开始<br>
x：返回屏幕X坐标<br>
y：返回屏幕Y坐标
 */
FindImageEx(left: number, top: number, right: number, bottom: number, ImagePathS: string, similarity: number): 1231231221312;
/**
	* 屏幕指定区域内查找所有图片的每一张图的所有坐标
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param ImagePathS：字符串型，需要查找的图片路径，多图用竖线|分隔<br>
* @param similarity：整数型，颜色相似度（范围：0.1~1）/字符串型,颜色偏色值（范围：000000~FFFFFF）
	* @returns [坐标，格式：id,x,y|id,x,y|…]
idxyS：返回屏幕多个坐标（格式：id图片标识,x坐标,y坐标|id图片标识,x坐标,y坐标|…）
 */
FindImageExS(left: number, top: number, right: number, bottom: number, ImagePathS: string, similarity: number): string;
/**
	* 屏幕指定区域内查找图片的所有坐标
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param ImagePath：字符串型，需要查找的图片路径<br>
* @param similarity：整数型，颜色相似度（范围：0.1~1）/字符串型,颜色偏色值（范围：000000~FFFFFF）
	* @returns [坐标，格式：x,y|x,y|…]
xyS：返回屏幕多个坐标（格式：x坐标,y坐标|x坐标,y坐标|…），失败-1,-1
 */
FindImageS(left: number, top: number, right: number, bottom: number, ImagePath: string, similarity: number): 1231231221312;
/**
	* 获取当前鼠标光标的形状特征码
        
	* @param Mode：整数型，特征方式(默认0:方式1，1:方式2)
	* @returns shape：整数型，鼠标特征码
 */
FindMouseShape(Mode: number): number;
/**
	* 屏幕指定区域内查找多点颜色
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param color：字符串型，16进制首个颜色值(支持偏色,格式:BBGGR-DBDGDR）)<br>
* @param offsetColorS：字符串型，偏移颜色串(支持偏色,格式:DX|DY|BBGGR-DBDGDR)<br>
* @param similarity：整数型型，颜色相似度（范围：0.1~1.0）
	* @returns [坐标，格式：x,y]
x：返回首个颜色的屏幕X坐标<br>
y：返回首个颜色的屏幕Y坐标
 */
FindMultiColor(left: number, top: number, right: number, bottom: number, color: string, offsetColorS: string, similarity: number): string;
/**
	* 对二维多边形的图形进行识别（体验版）
        
	* @param distance：整数型，两顶点之间的距离
* @param length：整数型，两顶点之间的线条长度
	* @returns shape：字符串型，图形名称（三角形、多边形、矩形和圆形）
 */
FindShape(distance: number, length: number): string;
/**
	* 进行区域范围内快速查找文字(仅支持单个文字的识别库)
        
	* @param Text：字符串型，需要查找的文字（多个：文字串|文字串|…）
* @param Similar：整数型，点数匹配相似度（范围0~100，默认100匹配最高的相似）<br>
* @param Mode：整数型，设置返回结果内容，格式：默认0:找到其中一个文字串坐标，1:找到全部文字串坐标
	* @returns [坐标，格式：x,y|x,y|…]
XY：字符串型，查找到的屏幕多个坐标（格式：x坐标,y坐标|x坐标,y坐标|…），失败-1,-1
 */
FindText: string(Text, Similar: number, Mode: number): string;
/**
	* 获取内部图像数据上的所有端点之间的线条坐标
【注意】需要配合“GetAllPoints 获取所有端点坐标”命令使用
        
	* @param Value：整数型，可选，阈值（默认7，1~上限8）
* @param Num：整数型，可选，像素点数量（大于此数量保留坐标）
	* @returns Pos：字符串型，线条上所有坐标（格式:x坐标,y坐标-x坐标,y坐标…）
 */
GetAllLines(Value?: number, Num?: number): string;
/**
	* 获取内部图像数据上的所有认为是端点的坐标
        
	* @param Value：整数型，可选，阈值（默认7，1~上限8）
	* @returns Pos：字符串型，所有端点的坐标（格式:x坐标,y坐标|…）
 */
GetAllPoints(Value?: number): string;
/**
	* 获取指定范围内所有颜色的均值（支持图中图）
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标
	* @returns sColor：字符串型，16进制颜色值（格式：BBGGRR）
 */
GetAveRGB(left: number, top: number, right: number, bottom: number): string;
/**
	* 统计内部图像数据上的每一种颜色点数量
        
	* @param Mode：字符串型，指定颜色格式（默认：BGR，RGB，HSV：H.S.V）
	* @returns Nums：字符串型，每种颜色点数量（数量：从大到小排序）
 */
GetColorPoints(Mode: string): string;
/**
	* 获取Gif图片帧数
        
	* @param FilePath：字符串型，GIF图片文件的路径(支持：gif格式)
	* @returns Num：整数型，GIF图片帧数
 */
GetGifFrames(FilePath: string): number;
/**
	* 得到第一块硬盘的唯一型号
        
	* @param 无
	* @returns SN：字符串型，硬盘唯一型号
 */
GetHDSN(): string;
/**
	* 得到内部的图像像素数据，用于二次开发
        
	* @param value：整数型，可选，模式（默认0:宽|高|图像数据，1:宽|高，2:全部设置到剪切板）
	* @returns [图像像素数据，字符串型格式：宽|高|图像数据(b,g,r,a,b,g,r,a,…)]
width：字符串型，图像宽度<br>
height：字符串型，图像高度<br>
ImageData：字符串型，图像数据
 */
GetImageData(value?: number): string;
/**
	* 获取指定图片的宽度和高度
        
	* @param FilePath：字符串型，图片文件的路径(支持：bmp、png、jpg、gif格式)
	* @returns 
[图片大小，格式：宽,高]
w：图片宽度值<br>
h：图片高度值
 */
GetImageSize(FilePath: string): string;
/**
	* 获取两点间的直线上所有坐标
        
	* @param x1：整数型，起点X坐标
* @param y1：整数型，起点Y坐标<br>
* @param x2：整数型，终点X坐标<br>
* @param y2：整数型，终点Y坐标
	* @returns AllPos：字符串型，直线上所有坐标（格式:x坐标,y坐标|x坐标,y坐标|…）
 */
GetLineAllPos(x1: number,y1: number,x2: number,y2: number): string;
/**
	* 获取图像数据的内存地址和数据长度
	* @param data：整数型，返回图像数据内存地址
* @param size：整数型，返回图像数据字节长度
	* @returns 无
 */
GetMemoryDataBmp(data: number, size: number): void;
/**
	* 获取网络时间
        
	* @param url：字符串型，可选，网站地址(如果不能正常获得网络时间，填写可用的网站地址)
	* @returns iTime：字符串型，在线网络时间
 */
GetNetworkTime(url?: string): string;
/**
	* 获取内部图像数据上的指定两端点之间的线条坐标
        
	* @param x1：整数型，起点X坐标
* @param y1：整数型，起点Y坐标<br>
* @param x2：整数型，终点X坐标(最大分辨率为2000像素)<br>
* @param y2：整数型，终点Y坐标(最大分辨率为2000像素)
	* @returns Pos：字符串型，线条上所有坐标（格式:x坐标,y坐标-x坐标,y坐标…）
 */
GetOneLine(x1: number,y1: number,x2: number,y2: number): string;
/**
	* 得到屏幕指定位置点的颜色
        
	* @param x：整数型，屏幕X坐标
* @param y：整数型，屏幕Y坐标<br>
* @param mode：整数型，取色模式（默认0：普通取色，1：增强取色（半透明窗体），2：取内部图像数据颜色）
	* @returns color：字符串型，16进制颜色值
 */
GetPix: numberelColor(x, y: number, mode: number): string;
/**
	* 获取系统从开机到现在所经过的时间
        
	* @param 无
	* @returns iTime：整数型，毫秒时间
 */
GetTime(): number;
/**
	* 获取内部图像的有效区域范围
        
	* @param 无
	* @returns Area：字符串型，有效图像数据的范围（格式：左,上,右,下）
 */
GetValidArea(): string;
/**
	* 十六进制转二进制字符串
        
	* @param HexStr：字符串型，十六进制字符串内容
	* @returns BinStr：字符串型，二进制字符串内容
 */
HEXtoBIN(HexStr: string): string;
/**
	* HSV转换为RGB空间颜色值
        
	* @param H：整数型，颜色H分量
* @param S：整数型，颜色S分量<br>
* @param V：整数型，颜色V分量
	* @returns color：字符串型，16进制颜色值（格式：BBGGRR）
 */
H: numberS: numberV: numbertoRGB(H, S, V): string;
/**
	* 对各种的图片格式进行转换
        
	* @param ImagePath：字符串型，需转换的图片路径（支持任意格式图片）
* @param ImageSavePath：字符串型，保存指定格式的图片路径（支持的格式：bmp、png、jpg、gif）<br>
* @param Value：整数型，可选，仅jpg格式的压缩率（默认80）
	* @returns 无
 */
ImageFormatConverter(ImagePath: string, ImageSavePath: string, Value?: number): void;
/**
	* 对图片进行Base64编码（支持bmp/png/jpg/gif等）
        
	* @param FilePath：字符串型，图片文件路径
* @param IsHead：布尔型，默认False，True为含包头（格式：“data:image/<后缀名>;base64,”）
	* @returns cipher：字符串型，编码的文本内容
 */
Image_Base64Encode(FilePath: string, IsHead: boolean): string;
/**
	* 追加图像数据为切割字符数据
        
	* @param Left：整数型，可选，设置左边坐标（默认0）
* @param Top：整数型，可选，设置顶上坐标（默认0）
	* @returns CharNum：整数型，字符切割数量
 */
Incise_AddCharData(Left?: number, Top?: number): number;
/**
	* 自动调整进行合并切割字符数据
        
	* @param Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）。
* @param Height：字符串型，可选，保留字符切割高度范围（例："30-100"）。
	* @returns CharNum：整数型，字符切割数量(最大下标值)
 */
Incise_AutoCharData(Width?: string, Height?: string): number;
/**
	* 对切割的字符像素数据进行旋转纠正处理(使用白点占比最大的方法)
        
	* @param angle：整数型，旋转的正负度数值（范围：1~90）
* @param value：整数型，旋转的度数步进（范围：1~9）
	* @returns 无
 */
Incise_CharRotateCorrect(angle: number, value: number): void;
/**
	* 对切割的字符像素数据进行统一大小
        
	* @param iWidth：整数型，统一大小的宽度值
* @param iHeight：整数型，统一大小的高度值
	* @returns 无
 */
Incise_CharSizeOne(iWidth: number, iHeight: number): void;
/**
	* 对切割的字符像素数据进行倾斜矫正处理
        
	* @param 无
	* @returns 无
 */
Incise_CharSlantCorrect(): void;
/**
	* 颜色分层字符切割（体验版--组合式）
        
	* @param interval：整数型，颜色值之间的距离
* @param num：整数型，过滤掉点数的数量<br>
* @param Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）<br>
* @param Height：字符串型，可选，保留字符切割高度范围（例："30-100"）<br>
* @param value：整数型，可选，点数阈值（默认6，范围：1~8）<br>
* @param Row：整数型，可选，行间距（默认3）<br>
* @param Column：整数型，可选，列间距（默认2）
	* @returns CharNum：整数型，字符切割数量(最大下标值)
 */
Incise_ColorLayered(interval: num: numberber, num, Width?: string, Height?: string, Value, Row?: number, Column?: number): number;
/**
	* 连通区域字符切割
        
	* @param through：布尔型，是否八通方向（八向：True）
* @param Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）。<br>
* @param Height：字符串型，可选，保留字符切割高度范围（例："30-100"）。<br>
* @param Flag：整数型，可选，排序规则（默认0横向书写顺序，1从左到右，3纵向书写顺序
	* @returns CharNum：整数型，字符切割数量(最大下标值)
 */
Incise_ConnectedArea(through: boolean, Width?: string, Height?: string, Flag?: number): number;
/**
	* 清除图像中切割的字符所有数据
        
	* @param 无
	* @returns 无
 */
Incise_EraseData(): void;
/**
	* 固定位置字符切割
        
	* @param qx：整数型，起点X坐标
* @param qy：整数型，起点Y坐标<br>
* @param width：整数型，字符宽度<br>
* @param height：整数型，字符高度<br>
* @param Column：整数型，可选，列字间距，默认0<br>
* @param cNum：整数型，可选，列字符数量，默认1<br>
* @param Row：整数型，可选，行字间距，默认0<br>
* @param rNum：整数型，可选，行字符数量，默认1
	* @returns CharNum：整数型，字符切割数量(最大下标值)
 */
Incise_FixedLocation(qx: number, qy: number, width: number, height: number, Column?: number, cNum?: number, Row?: number, rNum?: number): number;
/**
	* 获取切割字符的数据结构信息 
        
	* @param Mode：整数型，默认0:全部数据，1:左,上，2:左,上,宽,高，3:宽,高,点阵
	* @returns CharData：字符串型，字符切割数据信息，格式：左,上,宽,高,点阵|左,上,宽,高,点阵|…）
 */
Incise_GetCharData(Mode: number): string;
/**
	* 对切割的两个字符像素数据进行合并处理
        
	* @param index1：整数型，切割字符索引号1
* @param index2：整数型，切割字符索引号2（合并后删除此字符图像）
	* @returns CharNum：整数型，字符切割数量
 */
Incise_JoinCharData(index1: number, index2: number): number;
/**
	* 修改图像中切割的字符数据
        
	* @param Index：整数型，切割字符数据对应的索引号
* @param Left：整数型，可选，设置左边坐标（默认0）<br>
* @param Top：整数型，可选，设置顶上坐标（默认0）
	* @returns 无
 */
Incise_ModifyCharData(Index: number, Left?: number, Top?: number): void;
/**
	* 对切割的字符像素数据进行显示查看
        
	* @param index：整数型，切割字符索引号
	* @returns [点击图像位置的坐标，格式：x,y]
x：返回图像上点击位置的X坐标<br>
y：返回图像上点击位置的Y坐标
 */
Incise_Preview(index: number): string;
/**
	* 随机方位字符切割
        
	* @param through：整数型，可选，穿透点数（默认0，指定点数：为大于点数时能够穿透切割）
* @param Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）。<br>
* @param Height：字符串型，可选，保留字符切割高度范围（例："30-100"）。
	* @returns CharNum：整数型，字符切割数量(最大下标值)
 */
Incise_RandomOrientation(through?: number, Width?: string, Height?: string): number;
/**
	* 范围投影字符切割
        
	* @param Row：整数型，行间隙（横向，最小值）
* @param Column：整数型，列间隙（纵向，最小值）<br>
* @param Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）。<br>
* @param Height：字符串型，可选，保留字符切割高度范围（例："30-100"）。<br>
* @param Flag：整数型，可选，排序规则（默认0书写顺序，1从左到右，2换行功能，3纵向书写顺序）
	* @returns CharNum：整数型，字符切割数量(最大下标值)
 */
Incise_ScopeAisle(Row: number, Column: number, Width?: string, Height?: string, Flag?: number): number;
/**
	* 解析JSON结构
        
	* @param Points：字符串型，节点层级键值名，多参数结构(如："Image", "Thumbnail", "Url")
	* @returns Ret：变体型，返回键值内容
 */
Json_Decode(Points: string): 1231231221312;
/**
	* 读取一个JSON文件，且初始化
        
	* @param FilePath：字符串型，JSON文件路径
	* @returns 无
 */
Json_Read(FilePath: string): void;
/**
	* 脚本暂停执行一段时间
        
	* @param mSec：整数型，毫秒数（1秒=1000毫秒）
	* @returns 无
 */
KM_Delay(mSec: number): void;
/**
	* 得到当前鼠标所在的位置坐标
        
	* @param 无
	* @returns 
[坐标，格式：x,y]
x：返回屏幕X坐标<br>
y：返回屏幕Y坐标
 */
KM_GetCursorPos(): string;
/**
	* 键盘按下
        
	* @param Asck：整数型，键码
	* @returns 无
 */
KM_KeyDown(Asck: number): void;
/**
	* 键盘按键
        
	* @param Asck：整数型，键码
	* @returns 无
 */
KM_KeyPress(Asck: number): void;
/**
	* 键盘弹起
        
	* @param Asck：整数型，键码
	* @returns 无
 */
KM_KeyUp(Asck: number): void;
/**
	* 模拟点击鼠标左键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_LeftClick(x?: number, y?: number): void;
/**
	* 模拟双击鼠标左键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_LeftDbClick(x?: number, y?: number): void;
/**
	* 模拟按下鼠标左键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_LeftDown(x?: number, y?: number): void;
/**
	* 模拟弹起鼠标左键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_LeftUp(x?: number, y?: number): void;
/**
	* 模拟点击鼠标中键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_MiddleClick(x?: number, y?: number): void;
/**
	* 模拟按下鼠标中键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_MiddleDown(x?: number, y?: number): void;
/**
	* 模拟弹起鼠标中键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_MiddleUp(x?: number, y?: number): void;
/**
	* 移动鼠标到指定位置
        
	* @param x：整数型，屏幕x坐标
* @param y：整数型，屏幕y坐标
	* @returns 无
 */
KM_MoveTo(x: number, y: number): void;
/**
	* 模拟单击鼠标右键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_RightClick(x?: number, y?: number): void;
/**
	* 模拟按下鼠标右键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_RightDown(x?: number, y?: number): void;
/**
	* 模拟弹起鼠标右键
        
	* @param x：整数型，可选，屏幕x坐标（默认0）
* @param y：整数型，可选，屏幕y坐标（默认0）
	* @returns 无
 */
KM_RightUp(x?: number, y?: number): void;
/**
	* 键盘输入文字
        
	* @param Text：字符串型，需要输入的文本内容
	* @returns 无
 */
KM_SendString(Text: string): void;
/**
	* 结束进程ID
        
	* @param PID：整数型，进程ID
	* @returns 无
 */
KillApp(PID: number): void;
/**
	* 添加新的识别字库数据到指定编号
        
	* @param Serial：整数型，可选，字库编号（默认1，上限20）
	* @returns 无
 */
Lib_Add(Serial?: number): void;
/**
	* 对当前识别字库数据进行追加
        
	* @param Serial：整数型，可选，字库编号（默认1，上限20）
	* @returns Num：整数型，字库数量（下标）
 */
Lib_AddData(Serial?: number): number;
/**
	* 内部的图像数据追加为识别字库
        
	* @param text：字符串型，字符点阵对应的识别文字
	* @returns 无
 */
Lib_AddImageData(text: string): void;
/**
	* 分析切割字符的字体与字号
        
	* @param Text：字符串型，切割字符对应的文字
* @param Mode：字符串型，样式，默认"0|0"（格式：0正常,1粗体,2斜体,3粗斜体|0中文字体，1英文字体）
	* @returns FontSize：字符串型，字体与字号（格式：字体,字号,相似度|字体,字号,相似度|…）
 */
Lib_AnalyzeFontSize(Text: string, Mode: string): string;
/**
	* 创建系统的字体作为识别字库文件数据
        
	* @param Font：字符串型，系统中的字体名称|字体样式(默认0。数值：0正常，1粗体，2斜体。其他依次叠加数字)
* @param Size：整数型，字体的字号大小<br>
* @param Text：字符串型，可选，设置字库内容，默认含有3500个汉字和英文数字符号。
	* @returns num：整数型，字库的数量
 */
Lib_Create(Font: string, Size: number, Text?: string): number;
/**
	* 清空指定编号的识别字库数据
        
	* @param Serial：整数型，字库编号（默认0:当前字库，1~20:指定编号字库）
	* @returns 无
 */
Lib_EraseData(Serial: number): void;
/**
	* 生成二进制字符串点阵
        
	* @param 无
	* @returns bit：字符串型，二进制字符串点阵
 */
Lib_Generate(): string;
/**
	* 获取字库的单个数据信息
        
	* @param Serial：整数型，字库图像索引号（从0开始）
* @param Mode：整数型，模式（默认0：全部，1：文字,宽,高，2：文字，3：宽,高，4：点阵）
	* @returns Info：字符串型，字库对应的信息内容
 */
Lib_GetCharData(Serial: number, Mode: number): string;
/**
	* 加载识别字库文件数据
        
	* @param LibPath：字符串型，识别字库文件路径
* @param iText：字符串型，可选，指定字库中的文字（类似白名单）
	* @returns num：整数型，字库的数量
 */
Lib_Load(LibPath: string, iText?: string): number;
/**
	* 加载识别字库字符串数据
        
	* @param LibStr：字符串型，识别字库的字符串内容（回车换行符用于分割数据）
* @param iText：字符串型，可选，指定字库中的文字（类似白名单）
	* @returns num：整数型，字库的数量
 */
Lib_LoadEx(LibStr: string, iText?: string): number;
/**
	* 获取图像切割的字符点阵库内容
        
	* @param index：整数型，切割字符索引号
	* @returns lattice：字符串型，字符点阵（格式：字符宽,高|二进制字符串点阵）
 */
Lib_OneCharData(index: number): string;
/**
	* 对加载的识别字库点阵进行显示查看
        
	* @param index：整数型，字库索引号
	* @returns [点击图像位置的坐标，格式：x,y]
x：返回图像上点击位置的X坐标<br>
y：返回图像上点击位置的Y坐标
 */
Lib_Preview(index: number): string;
/**
	* 切割字符存储为识别字库
        
	* @param text：字符串型，字符点阵对应的识别文字
* @param lattice：字符串型，字符点阵（格式：字符宽,高|二进制字符串点阵）<br>
* @param LibPath：字符串型，识别字库文件路径
	* @returns 无
 */
Lib_Save(text: string, lattice: string, LibPath: string): void;
/**
	* 切割字符存储为识别字库（扩展）
        
	* @param text：字符串型，字符点阵对应的识别文字
* @param Index：整数型，切割字符索引号（从0开始）<br>
* @param LibPath：字符串型，识别字库文件路径
	* @returns 无
 */
Lib_SaveEx(text: string, Index: number, LibPath: string): void;
/**
	* 将已加载的识别字库重新生成一个新的字库文件
        
	* @param LibPath：字符串型，保存识别字库文件路径
	* @returns 无
 */
Lib_Share(LibPath: string): void;
/**
	* 将已加载的识别字库重新生成一个新的UTF8无BOM字库文件（移动版专用） 
        
	* @param 明 LibPath：字符串型，保存识别字库文件路径（后缀名：.lib8）
	* @returns 无
 */
Lib_ShareUTF8(LibPath): void;
/**
	* 获得识别字库数量下标值
        
	* @param Serial：整数型，字库编号（默认0:当前字库，1~20:指定编号字库）
	* @returns Num：整数型，字库数量下标值
 */
Lib_UBound(Serial: number): number;
/**
	* 使用指定编号的识别字库数据
        
	* @param Serial：整数型，可选，字库编号（默认1，上限20）
	* @returns 无
 */
Lib_Use(Serial?: number): void;
/**
	* 关联指定的窗口句柄
        
	* @param hwnd：整数型，窗口句柄(窗口不能最小化)
* @param mode：字符串型，可选，关联模式。<br>
* @param 　　默认：普通窗口后台"normal"，<br>
* @param 　　普通前台窗口"window"，<br>
* @param 　　3D游戏窗口后台"gdi"(切换主题为Aero再试)，<br>
* @param 　　Aero主题缩略图后台"aero"，<br>
* @param 　　后台键鼠模式"km"。
	* @returns 无
 */
Link(hwnd: number, mode?: string): void;
/**
	* 载入图像像素数据，用于内部滤镜处理
        
	* @param ImageData：字符串型，图像像素数据，格式：宽|高|图像数据(b,g,r,a,b,g,r,a,…)
	* @returns 无
 */
LoadImageData: string(ImageData): void;
/**
	* 获取目标定位区域信息（需配合：目标检测定位）
        
	* @param Model：整数型，可选，模式（默认0全部数据，1:左,上，2:宽,高）
	* @returns Ret：字符串型，字符位置区域信息
 */
Locate_GetAreaInfo(Model?: number): string;
/**
	* 目标检测区域定位（用法：同范围投影字符切割）
        
	* @param Row：整数型，行间隙（横向，最小值）
* @param Column：整数型，列间隙（纵向，最小值）<br>
* @param Width：字符串型，可选，保留字符切割宽度范围（例："50-150"）。<br>
* @param Height：字符串型，可选，保留字符切割高度范围（例："30-100"）。<br>
* @param Flag：整数型，可选，排序规则（默认0书写顺序，1从左到右）
	* @returns CharNum：整数型，字符切割数量(最大下标值)
 */
Locate_TargetArea(Row: number, Column: number, Width?: string, Height?: string, Flag?: number): number;
/**
	* 获取播放时间长度(单位：毫秒)
        
	* @param 无
	* @returns Length：整数型，音乐播放时间长度（单位：毫秒）
 */
Media_GetMusicLength(): number;
/**
	* 获取当前播放进度
        
	* @param 无
	* @returns Pos:整数型，播放进度（单位：毫秒）
 */
Media_GetMusicPos(): string;
/**
	* 获取声音大小
        
	* @param 无
	* @returns Volume:整数型，音量（最大值：100）
 */
Media_GetVolume(): string;
/**
	* 当前音乐是否在播放
        
	* @param 无
	* @returns Playing:布尔型，状态（true或者非0：在播放）
 */
Media_IsPlaying(): string;
/**
	* 暂停播放音乐
        
	* @param 无
	* @returns 无
 */
Media_PauseMusic(): void;
/**
	* 播放音乐（支持在线播放）
        
	* @param FileName：字符串型，音乐文件路径（支持在线：http://*）
	* @returns 无
 */
Media_PlayMusic(FileName: string): void;
/**
	* 继续播放音乐
        
	* @param 无
	* @returns 无
 */
Media_ResumeMusic(): void;
/**
	* 设置当前播放进度
        
	* @param Pos:整数型，播放进度（单位：毫秒）
	* @returns 无
 */
Media_SetMusicPos(Pos): void;
/**
	* 设置声音大小
        
	* @param Volume:整数型，音量（最大值：100）
	* @returns 无
 */
Media_SetVolume(Volume): void;
/**
	* 停止音乐播放
        
	* @param 无
	* @returns 无
 */
Media_StopMusic(): void;
/**
	* 文字转语音（百度语音识别接口）
        
	* @param Text：字符串型，需要转换的文字内容
* @param Sound：整数型，声音类型（0小姐姐,1小哥哥,2大姐姐,3大哥哥）<br>
* @param SavePath：字符串型，保存声音文件路径（后缀名.mp3）
	* @returns 无
 */
Media_Text: stringToSpeech(Text, Sound: number, SavePath: string): void;
/**
	* 进行物理内存垃圾清理
        
	* @param 无
	* @returns 无
 */
Memory_Clear(): void;
/**
	* 获取物理内存相关信息
        
	* @param 无
	* @returns Info：字符串型，获取内存信息（总共物理内存KB|可用物理内存KB|已用内存比率%）
 */
Memory_GetInfo(): string;
/**
	* 进行图像文字识别
        
	* @param Similar：整数型，点数匹配相似度（范围0~100，默认0匹配最高的相似）
* @param Model：整数型，设置返回结果内容，格式：默认0:识别文字，1:识别文字|第1个字x坐标,y坐标|…，2:第1个文字,x坐标,y坐标|…，3:第1个文字,x坐标,y坐标,相似度|…，4:第1个文字|第2个文字|…<br>
* @param Interval：整数型，可选，字符之间的间隔（默认0），Model为2或3时才生效
	* @returns text：字符串型，识别得到的文字内容
 */
OCR(Similar: number, Model: number, Interval?: number): string;
/**
	* 进行图像文字识别（对拆分的文字识别，效率比较慢）
        
	* @param Similar：整数型，点数匹配相似度（范围0~100，默认0匹配最高的相似）
* @param Model：整数型，设置返回结果内容，格式：默认0:识别文字，1:识别文字|第1个字x坐标,y坐标|第2个字x坐标,y坐标|…，2:第1个文字,x坐标,y坐标|第2个文字,x坐标,y坐标|…<br>
* @param Interval：整数型，可选，字符之间的间隔（默认0），Model为2时才生效
	* @returns text：字符串型，识别得到的文字内容
 */
OCRex(Similar: number, Model: number, Interval?: number): string;
/**
	* 字符串加密
        
	* @param text：字符串型，文字内容
* @param password：字符串型，10位密码（每位范围：1~255）
	* @returns cipher：字符串型，加密的文字内容
 */
Pass_Encode(text: string, password: string): string;
/**
	* 字符串MD5加密
        
	* @param Text：字符串型，字符串内容
* @param Code：整数型，可选，编码，默认3（格式：0:ANSI，1:ANSI-UTF8，2:GB2312，3:GB2312-UTF8）
	* @returns cipher：字符串型，加密的文字内容
 */
Pass_MD5String(Text: string, Code?: number): string;
/**
	* 字符串解密
        
	* @param cipher：字符串型，加密的文字内容
* @param password：字符串型，10位密码（每位范围：1~255）
	* @returns text：字符串型，文字内容
 */
Pass_Uncode(cipher: string, password: string): string;
/**
	* 获取当前已注册的插件完整路径
        
	* @param 无
	* @returns Base：字符串型，插件完整路径
 */
Path(): string;
/**
	* 对获取的图像像素数据进行RGB通道图层拆分（顺序：蓝绿红）
        
	* @param Model：布尔型，可选，默认False全图，True单色图
	* @returns 无
 */
Pixel_ChannelImageData(Model?: boolean): void;
/**
	* 对获取的图像像素数据进行颜色图层拆分
        
	* @param Interval：整数型，两颜色值之间的空间距离（以HSV的颜色空间计算的）
* @param Value：字符串型，筛选掉干扰的颜色点数范围（例：大于保留："15"个像素，区间保留："520-9751"个像素）
	* @returns CharNum：整数型，颜色图层数量
 */
Pixel_ColorImageData(Interval: number, Value: string): number;
/**
	* 图像像素数据拆分为多个（上限10个）
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param Serial：整数型，分配数据编号（默认1，上限10个）
	* @returns 无
 */
Pixel_CutImageData(left: number, top: number, right: number, bottom: number, Serial: number): void;
/**
	* 获取内存地址中的24位bmp图像像素数据
	* @param Data：整数型，内存数据地址指针
* @param Size：整数型，内存数据长度<br>
* @param Model：整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
	* @returns 无
 */
Pixel_FromMemory(Data: number, Size: number, Model?: number): void;
/**
	* 获取当前鼠标图案的像素数据
	* @param Width：整数型，可选，宽度（默认32）
* @param Height：整数型，可选，高度（默认32）<br>
* @param model：整数型，可选，模式(默认0鼠标图案，1为鼠标位置的屏幕图像)
	* @returns [字符串型，hot热点（格式：x坐标,y坐标）]
x：热点x坐标<br>
y：热点y坐标
 */
Pixel_FromMouse(Width?: number, Height?: number, model?: number): string;
/**
	* 获取指定路径图片文件的图像像素数据
	* @param ImagePath：字符串型，图片文件的路径(支持：bmp、png、jpg、gif|帧、格式)，GIF帧参数："路径|帧"
* @param Model：整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
	* @returns 无
 */
Pixel_FromPicture(ImagePath: string, Model?: number): void;
/**
	* 获取屏幕指定范围的图像像素数据
        
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标<br>
* @param Model：整数型，可选，默认0。应用于图中图时使用1,应用于绘图时使用2
	* @returns 无
 */
Pixel_FromScreen(left: number, top: number, right: number, bottom: number, Model?: number): void;
/**
	* 获取剪切板中的图像像素数据
	* @param 无
	* @returns 无
 */
Pixel_GetClpImageData(): void;
/**
	* 对获取的图像像素数据进行显示查看
        
	* @param Mode：整数型，可选，模式：图像或直方图（默认0图像,1垂直直方图,2水平直方图）
* @param subline：布尔型，可选，默认False（True显示十字辅助线）
	* @returns [点击图像位置的坐标，格式：x,y]
x：返回图像上点击位置的X坐标<br>
y：返回图像上点击位置的Y坐标
 */
Pixel_Preview(Mode?: number,subline?: boolean): string;
/**
	* 剪切板中的图像数据保存为图片文件
	* @param ImagePath：字符串型，保存图片文件的路径
	* @returns 无
 */
Pixel_SaveClpImageData(ImagePath: string): void;
/**
	* 将内部的图像数据设置到剪切板中
	* @param 无
	* @returns 无
 */
Pixel_SetClpImageData(): void;
/**
	* 设置图片图像数据保存到剪切板中
	* @param ImagePath：字符串型，图片文件的路径
	* @returns 无
 */
Pixel_SetClpPictureData(ImagePath: string): void;
/**
	* 设置屏幕图像数据保存到剪切板中
	* @param left：整数型，屏幕左上角X坐标
* @param top：整数型，屏幕左上角Y坐标<br>
* @param right：整数型，屏幕右下角X坐标<br>
* @param bottom：整数型，屏幕右下角Y坐标
	* @returns 无
 */
Pixel_SetClpScreenData(left: number, top: number, right: number, bottom: number): void;
/**
	* 对拆分的图像像素数据进行设置
        
	* @param Serial：整数型，指定数据编号（默认1，上限10个）
	* @returns 无
 */
Pixel_SetImageData(Serial: number): void;
/**
	* 对切割的字符图像像素数据进行设置
        
	* @param index：整数型，切割图像索引号
	* @returns 无
 */
Pixel_SetImageDataCut(index: number): void;
/**
	* 对字库的字符图像像素数据进行设置
        
	* @param Index：整数型，字库图像索引号
	* @returns Text：字符串型，字库对应的文字
 */
Pixel_SetImageDataLib(Index: number): string;
/**
	* 对拆分的颜色图层设置为图像像素数据
        
	* @param Index：整数型，颜色图层数据索引号（顺序：蓝绿红）
	* @returns 无
 */
Pixel_SetLayerImageData(Index: number): void;
/**
	* 配置图像像素数据应用于图色场景
        
	* @param Mode：整数型，场景模式(默认1找图场景,2绘图图像>)
	* @returns 无
 */
Pixel_SetSceneImageData(Mode: number): void;
/**
	* RGB转换为HSV空间颜色值
        
	* @param color：字符串型，16进制颜色值（格式：BBGGRR）
	* @returns [HSV颜色，格式：H,S,V]
H：返回颜色H分量<br>
S：返回颜色S分量<br>
V：返回颜色V分量
 */
RGBtoHSV(color: string): string;
/**
	* 运行Cmd命令行功能
        
	* @param CmdLine：字符串型，命令行内容
	* @returns ret：字符串型，执行结果信息内容
 */
Run(CmdLine: string): string;
/**
	* 运行VBS脚本命令内容
        
	* @param sText：字符串型，脚本命令内容/或者vbs脚本文件
* @param Items：变体型，可选，指定函数的参数值（可以设置16个哦，每个参数用逗号隔开）
	* @returns ret：字符串型，执行结果
 */
RunVBScript(sText: string,Items?: 1231231221312): string;
/**
	* 将内部的图像数据保存为.bmp图片文件
	* @param ImagePath：字符串型，保存图片文件的路径
	* @returns 无
 */
SaveImageData(ImagePath: string): void;
/**
	* 直接在屏幕上打印图像像素数据
        
	* @param x：整数型，可选，屏幕X坐标(默认0)
* @param y：整数型，可选，屏幕X坐标(默认0)
	* @returns 无
 */
Screen_PrintImage(x?: number, y?: number): void;
/**
	* 直接在屏幕上打印文字内容
        
	* @param Text：字符串型，文字内容
* @param x：整数型，可选，屏幕X坐标(默认0)<br>
* @param y：整数型，可选，屏幕X坐标(默认0)<br>
* @param FBcolor：字符串型，可选，文字颜色|背景色(默认"0000FF|000000")<br>
* @param FontNameSize：字符串型，可选，字体名称|字号大小(默认"宋体|9")<br>
* @param Mode：字符串型，可选，字体样式和精度，默认："0|0"(格式：模式<0正常，1粗体，2斜体，4下划线，8删除线。其他依次叠加数字>|精度<0抗锯齿，1清晰>)
	* @returns 无
 */
Screen_PrintTex?: numbert: string(Text, x, y?: number, FBcolor?: string, FontNameSize?: string, Mode?: string): void;
/**
	* 对屏幕上显示的打印内容进行强制刷新清除
        
	* @param 无
	* @returns 无
 */
Screen_Refresh(): void;
/**
	* 执行类型Cmd命令行的功能。带参数执行，并返回进程ID
        
	* @param CmdLine：字符串型，命令行内容
	* @returns ret：整数型，进程ID
 */
ShellRun(CmdLine: string): number;
/**
	* RGB颜色分量合并为16进制颜色值（格式：BBGGRR）
        
	* @param R：整数型，颜色R分量（范围：0~255）
* @param G：整数型，颜色G分量（范围：0~255）<br>
* @param B：整数型，颜色B分量（范围：0~255）
	* @returns color：字符串型，16进制颜色值（格式：BBGGRR）
 */
ToColor(R: number, G: number, B: number): string;
/**
	* 得到指定的16进制颜色值的中文名称
        
	* @param sColor：字符串型，16进制颜色值（格式：BBGGRR）
	* @returns Name：字符串型，16进制颜色值的中文名称（黑、灰、白、红、橙、黄、绿、青、蓝、紫）
 */
ToColorName(sColor: string): string;
/**
	* 16进制颜色值分解为RGB分量
        
	* @param color：字符串型，16进制颜色值（格式：BBGGRR）
	* @returns [RGB颜色，格式：R,G,B]
R：返回颜色R分量<br>
G：返回颜色G分量<br>
B：返回颜色B分量
 */
ToRGB(color: string): string;
/**
	* 获取两条件直线相交的坐标（理论上的相交线）
        
	* @param ax1：整数型，第1条线起点X坐标
* @param ay1：整数型，第1条线起点Y坐标<br>
* @param ax2：整数型，第1条线终点X坐标<br>
* @param ay2：整数型，第1条线终点Y坐标<br>
* @param bx1：整数型，第2条线起点X坐标<br>
* @param by1：整数型，第2条线起点Y坐标<br>
* @param bx2：整数型，第2条线终点X坐标<br>
* @param by2：整数型，第2条线终点Y坐标
	* @returns Pos：字符串型，两线相交的坐标（格式:x坐标,y坐标）
 */
TwoLinesCrossPos(ax1: number,ay1: number,ax2: number,ay2: number,bx1: number,by1: number,bx2: number,by2: number): string;
/**
	* 在屏幕上按住鼠标左键框选区域（及宽高）
        
	* @param 无
	* @returns ret：字符串型，[左,上,右,下|宽,高]
 */
UI_Area(): string;
/**
	* 在屏幕中间弹出可输入内容对话框
        
	* @param Content：字符串型，提示内容
* @param Title：字符串型，窗口标题<br>
* @param Default：字符串型，可选，填写输入框中的默认值<br>
* @param Timeout：整数型，可选，默认0，时间等待（单位秒）<br>
* @param x：整数型，可选，默认居中-1，屏幕X坐标<br>
* @param y：整数型，可选，默认居中-1，屏幕Y坐标
	* @returns ret：字符串型，输入框中的内容
 */
UI_InputBox?: number(Content: string, Title: string, Default?: string, Timeout?: number, x, y?: number): string;
/**
	* 在屏幕中间弹出提示对话框
        
	* @param Content：字符串型，提示内容
* @param Title：字符串型，窗口标题<br>
* @param iStyle：整数型，可选，默认1，对话框样式(1确定，2是否，3中止重试忽略，4是否取消，5重试取消，6确定取消)<br>
* @param Timeout：整数型，可选，默认0，时间等待（单位秒）<br>
* @param x：整数型，可选，默认居中-1，屏幕X坐标<br>
* @param y：整数型，可选，默认居中-1，屏幕Y坐标
	* @returns ret：字符串型，按钮编号(1确定，2取消，3中止，4重试，5忽略，6是，7否)
 */
UI_MsgBox?: number(Content: string, Title: string, iSty?: numberle?: number, Timeout?: number, x, y): string;
/**
	* 抓取屏幕坐标与颜色值（及窗口客户区坐标和RGB分量）
        
	* @param 无
	* @returns ret：字符串型，[x坐标,y坐标,16进制颜色值|窗口客户区x坐标,y坐标,句柄|R分量,G分量,B分量]
 */
UI_Zoom(): string;
/**
	* 解除指定窗口句柄的关联
        
	* @param Mode：字符串型，可选，默认空（"km"取消后台键鼠模式）
	* @returns 无
 */
UnLink(Mode?: string): void;
/**
	* 当前插件版本号
        
	* @param 无
	* @returns ver：字符串型，插件版本号
 */
Version(): string;
/**
	* 根据类名或者标题来枚举所有顶层窗口句柄
        
	* @param iClass：字符串型，模糊筛选条件：窗口类名(空填"")
* @param iTitle：字符串型，模糊筛选条件：窗口标题(空填"")
	* @returns Hwnds：字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
 */
Window_Enum(iClass: string, iTitle: string): string;
/**
	* 根据类名或者标题来枚举指定窗口的所有子句柄
        
	* @param iHwnd：整数型，窗口句柄(默认0:使用关联窗口句柄)
* @param iClass：字符串型，模糊筛选条件：窗口类名(空填"")<br>
* @param iTitle：字符串型，模糊筛选条件：窗口标题(空填"")
	* @returns Hwnds：字符串型，所有顶层窗口句柄(格式：句柄|句柄|…)
 */
Window_EnumChild(iHwnd: number, iClass: string, iTitle: string): string;
/**
	* 对窗口进行假激活后并获得焦点（同鼠标点击窗口后的效果，但不会置前）
        
	* @param iHwnd：整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
	* @returns 无
 */
Window_FakeActive(iHwnd?: number): void;
/**
	* 查找窗口类名或者标题得到窗口句柄
        
	* @param iClass：字符串型，窗口类名(空填"")
* @param iTitle：字符串型，窗口标题(空填"")
	* @returns Hwnd：整数型，窗口句柄
 */
Window_FindHwnd(iClass: string, iTitle: string): number;
/**
	* 指定任意窗口句柄即可得到窗口最顶级的祖父句柄
        
	* @param iHwnd：整数型，可选，窗口内任意元素句柄(默认0:使用关联窗口句柄)
	* @returns Hwnd：整数型，祖父（顶级）窗口句柄
 */
Window_GetAncestor(iHwnd?: number): number;
/**
	* 获取指定屏幕坐标下的窗口句柄
        
	* @param x：整数型，屏幕X坐标
* @param y：整数型，屏幕Y坐标
	* @returns Hwnd：整数型，坐标下句柄
 */
Window_GetPointHwnd(x: number, y: number): number;
/**
	* 得到指定关联句柄的窗口屏幕位置区域
        
	* @param iHwnd：整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
	* @returns [窗口大小，字符串型格式：左,上,右,下]
left：窗口左上角X坐标<br>
top：窗口左上角Y坐标<br>
right：窗口右下角X坐标<br>
bottom：窗口右下角Y坐标
 */
Window_GetSize(iHwnd?: number): string;
/**
	* 锁定指定窗口句柄在屏幕上的位置
        
	* @param iHwnd：整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
* @param Flag：布尔型，可选，锁定状态(默认锁定True)
	* @returns 无
 */
Window_Lock(iHwnd?: number, Flag?: boolean): void;
/**
	* 移动指定窗口句柄在屏幕上的位置
        
	* @param iHwnd：整数型，可选，窗口句柄(默认0:使用关联窗口句柄)
* @param iLeft：整数型，可选，屏幕X坐标(默认0)<br>
* @param iTop：整数型，可选，屏幕Y坐标(默认0)<br>
* @param width：整数型，可选，窗口宽度(默认0)<br>
* @param height：整数型，可选，窗口高度(默认0)
	* @returns 无
 */
Window_MoveTo(iHwnd?: number, iLeft?: number, iTop?: number): void;
/**
	* 指定的坐标进行坐标系的旋转
        
	* @param qx：整数型，x坐标
* @param qy：整数型，y坐标<br>
* @param sWidth：整数型，可选，屏幕宽度（默认0）<br>
* @param sHeight：整数型，可选，屏幕高度（默认0）<br>
* @param degree：整数型，可选，旋转角度（默认270，支持：0,90,180,270,-90）
	* @returns [newX,newY]：字符串型，新的坐标(可以使用Split、Clng进行坐标拆分和转整数)
 */
xyRotate(qx: number, qy: number, sWidth?: number, sHeight?: number, degree?: number): string;
}