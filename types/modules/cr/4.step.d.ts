/** 文字识别（主打）步骤四 加载字库 */
export default interface 加载字库 {
	/**
	 * 加载识别字库文件数据
	 * @param LibPath：字符串型，识别字库文件路径 
	 * @param iText：字符串型，可选，指定字库中的文字（类似白名单）
	 * @returns 整数型，字库的数量
	 */
	Lib_Load(LibPath: string, iText: string): number;
	/**
	 * 加载识别字库字符串数据
	 * @param LibStr：字符串型，识别字库的字符串内容（回车换行符用于分割数据） 
	 * @param iText：字符串型，可选，指定字库中的文字（类似白名单）
	 * @returns num：整数型，字库的数量
	*/
	Lib_LoadEx(LibStr: string, iText?: string): number;
	/**
	 * 创建系统的字体作为识别字库文件数据
	 * @param Font：字符串型，系统中的字体名称|字体样式(默认0。数值：0正常，1粗体，2斜体。其他依次叠加数字) 
	 * @param Size：整数型，字体的字号大小 
	 * @param Text：字符串型，可选，设置字库内容，默认含有3500个汉字和英文数字符号。
	 * @returns num：整数型，字库的数量
	*/
	Lib_Create(Font: string, Size: number, Text?: string): number;
	/**
	 * 添加新的识别字库数据到指定编号
	 * @param Serial：整数型，可选，字库编号（默认1，上限20）
	 * @returns 
	*/
	Lib_Add(Serial?: number): void;
	/**
	 * 使用指定编号的识别字库数据
	 * @param Serial：整数型，可选，字库编号（默认1，上限20）
	 * @returns 
	*/
	Lib_Use(Serial?: number): void;
	/**
	 * 对当前识别字库数据进行追加
	 * @param Serial：整数型，可选，字库编号（默认1，上限20）
	 * @returns Num：整数型，字库数量（下标）
	*/
	Lib_AddData(Serial?: number): number;
	/**
		* 对当前识别字库数据进行追加
		* @param Serial：整数型，可选，字库编号（默认1，上限20）
		* @returns Num：整数型，字库数量（下标）
	 */
	Lib_AddData(Serial?: number): number;


}