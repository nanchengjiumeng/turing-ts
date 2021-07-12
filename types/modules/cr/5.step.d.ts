/** 文字识别（主打）步骤五 识别对比 */
export default interface 识别对比 {
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
	* 进行区域范围内快速查找文字(仅支持单个文字的识别库)
	* @param Text：字符串型，需要查找的文字（多个：文字串|文字串|…）
	* @param Similar：整数型，点数匹配相似度（范围0~100，默认100匹配最高的相似）<br>
	* @param Mode：整数型，设置返回结果内容，格式：默认0:找到其中一个文字串坐标，1:找到全部文字串坐标
	* @returns [坐标，格式：x,y|x,y|…]
		XY：字符串型，查找到的屏幕多个坐标（格式：x坐标,y坐标|x坐标,y坐标|…），失败-1,-1
 */
	FindText(Text: string, Similar: number, Mode: number): string;
}