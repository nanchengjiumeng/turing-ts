"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KEYCODE_BUTTON_14 = exports.KEYCODE_BUTTON_13 = exports.KEYCODE_BUTTON_12 = exports.KEYCODE_BUTTON_11 = exports.KEYCODE_BUTTON_10 = exports.KEYCODE_BUTTON_9 = exports.KEYCODE_BUTTON_8 = exports.KEYCODE_BUTTON_7 = exports.KEYCODE_BUTTON_6 = exports.KEYCODE_BUTTON_5 = exports.KEYCODE_BUTTON_4 = exports.KEYCODE_BUTTON_3 = exports.KEYCODE_BUTTON_2 = exports.KEYCODE_BUTTON_1 = exports.KEYCODE_Z = exports.KEYCODE_Y = exports.KEYCODE_X = exports.KEYCODE_W = exports.KEYCODE_V = exports.KEYCODE_U = exports.KEYCODE_T = exports.KEYCODE_S = exports.KEYCODE_R = exports.KEYCODE_Q = exports.KEYCODE_P = exports.KEYCODE_O = exports.KEYCODE_N = exports.KEYCODE_M = exports.KEYCODE_L = exports.KEYCODE_K = exports.KEYCODE_J = exports.KEYCODE_I = exports.KEYCODE_H = exports.KEYCODE_G = exports.KEYCODE_F = exports.KEYCODE_E = exports.KEYCODE_D = exports.KEYCODE_C = exports.KEYCODE_B = exports.KEYCODE_A = exports.KEYCODE_9 = exports.KEYCODE_8 = exports.KEYCODE_7 = exports.KEYCODE_6 = exports.KEYCODE_5 = exports.KEYCODE_4 = exports.KEYCODE_3 = exports.KEYCODE_2 = exports.KEYCODE_1 = exports.KEYCODE_0 = void 0;
exports.KEYCODE_SCROLL_LOCK = exports.KEYCODE_BREAK = exports.KEYCODE_CAPS_LOCK = exports.KEYCODE_NUM_LOCK = exports.KEYCODE_TAB = exports.KEYCODE_INSERT = exports.KEYCODE_FORWARD_DEL = exports.KEYCODE_DEL = exports.KEYCODE_PAGE_DOWN = exports.KEYCODE_PAGE_UP = exports.KEYCODE_MOVE_END = exports.KEYCODE_MOVE_HOME = exports.KEYCODE_DPAD_RIGHT = exports.KEYCODE_DPAD_LEFT = exports.KEYCODE_DPAD_DOWN = exports.KEYCODE_DPAD_UP = exports.KEYCODE_DPAD_CENTER = exports.KEYCODE_ESCAPE = exports.KEYCODE_ENTER = exports.KEYCODE_VOLUME_DOWN = exports.KEYCODE_VOLUME_UP = exports.KEYCODE_VOLUME_MUTE = exports.KEYCODE_MUTE = exports.KEYCODE_NOTIFICATION = exports.KEYCODE_POWER = exports.KEYCODE_FOCUS = exports.KEYCODE_CAMERA = exports.KEYCODE_SEARCH = exports.KEYCODE_BACK = exports.KEYCODE_MENU = exports.KEYCODE_HOME = exports.KEYCODE_ENDCALL = exports.KEYCODE_CALL = exports.KEYCODE_BUTTON_THUMBR = exports.KEYCODE_BUTTON_THUMBL = exports.KEYCODE_BUTTON_START = exports.KEYCODE_BUTTON_SELECT = exports.KEYCODE_BUTTON_MODE = exports.KEYCODE_BUTTON_R2 = exports.KEYCODE_BUTTON_R1 = exports.KEYCODE_BUTTON_L2 = exports.KEYCODE_BUTTON_L1 = exports.KEYCODE_BUTTON_Z = exports.KEYCODE_BUTTON_Y = exports.KEYCODE_BUTTON_X = exports.KEYCODE_BUTTON_C = exports.KEYCODE_BUTTON_B = exports.KEYCODE_BUTTON_A = exports.KEYCODE_BUTTON_16 = exports.KEYCODE_BUTTON_15 = void 0;
exports.KEYCODE_F6 = exports.KEYCODE_F5 = exports.KEYCODE_F4 = exports.KEYCODE_F3 = exports.KEYCODE_F2 = exports.KEYCODE_F1 = exports.KEYCODE_NUMPAD_ENTER = exports.KEYCODE_NUMPAD_RIGHT_PAREN = exports.KEYCODE_NUMPAD_LEFT_PAREN = exports.KEYCODE_NUMPAD_DOT = exports.KEYCODE_NUMPAD_COMMA = exports.KEYCODE_NUMPAD_EQUALS = exports.KEYCODE_NUMPAD_DIVIDE = exports.KEYCODE_NUMPAD_MULTIPLY = exports.KEYCODE_NUMPAD_SUBTRACT = exports.KEYCODE_NUMPAD_ADD = exports.KEYCODE_NUMPAD_9 = exports.KEYCODE_NUMPAD_8 = exports.KEYCODE_NUMPAD_7 = exports.KEYCODE_NUMPAD_6 = exports.KEYCODE_NUMPAD_5 = exports.KEYCODE_NUMPAD_4 = exports.KEYCODE_NUMPAD_3 = exports.KEYCODE_NUMPAD_2 = exports.KEYCODE_NUMPAD_1 = exports.KEYCODE_NUMPAD_0 = exports.KEYCODE_SPACE = exports.KEYCODE_GRAVE = exports.KEYCODE_SEMICOLON = exports.KEYCODE_RIGHT_BRACKET = exports.KEYCODE_LEFT_BRACKET = exports.KEYCODE_PERIOD = exports.KEYCODE_COMMA = exports.KEYCODE_BACKSLASH = exports.KEYCODE_APOSTROPHE = exports.KEYCODE_POUND = exports.KEYCODE_AT = exports.KEYCODE_EQUALS = exports.KEYCODE_SLASH = exports.KEYCODE_STAR = exports.KEYCODE_MINUS = exports.KEYCODE_PLUS = exports.KEYCODE_SHIFT_RIGHT = exports.KEYCODE_SHIFT_LEFT = exports.KEYCODE_CTRL_RIGHT = exports.KEYCODE_CTRL_LEFT = exports.KEYCODE_ALT_RIGHT = exports.KEYCODE_ALT_LEFT = exports.KEYCODE_ZOOM_OUT = exports.KEYCODE_ZOOM_IN = void 0;
exports.KEYCODE_TV = exports.KEYCODE_SYSRQ = exports.KEYCODE_SYM = exports.KEYCODE_SWITCH_CHARSET = exports.KEYCODE_STB_POWER = exports.KEYCODE_STB_INPUT = exports.KEYCODE_SOFT_RIGHT = exports.KEYCODE_SOFT_LEFT = exports.KEYCODE_SETTINGS = exports.KEYCODE_PROG_YELLOW = exports.KEYCODE_PROG_RED = exports.KEYCODE_PROG_GREEN = exports.KEYCODE_PROG_BLUE = exports.KEYCODE_PICTSYMBOLS = exports.KEYCODE_META_RIGHT = exports.KEYCODE_META_LEFT = exports.KEYCODE_HEADSETHOOK = exports.KEYCODE_GUIDE = exports.KEYCODE_FUNCTION = exports.KEYCODE_FORWARD = exports.KEYCODE_EXPLORER = exports.KEYCODE_ENVELOPE = exports.KEYCODE_DVR = exports.KEYCODE_CLEAR = exports.KEYCODE_CHANNEL_UP = exports.KEYCODE_CHANNEL_DOWN = exports.KEYCODE_CAPTIONS = exports.KEYCODE_AVR_POWER = exports.KEYCODE_AVR_INPUT = exports.KEYCODE_BOOKMARK = exports.KEYCODE_APP_SWITCH = exports.KEYCODE_INFO = exports.KEYCODE_NUM = exports.KEYCODE_MEDIA_RECORD = exports.KEYCODE_MEDIA_EJECT = exports.KEYCODE_MEDIA_CLOSE = exports.KEYCODE_MEDIA_PREVIOUS = exports.KEYCODE_MEDIA_NEXT = exports.KEYCODE_MEDIA_REWIND = exports.KEYCODE_MEDIA_FAST_FORWARD = exports.KEYCODE_MEDIA_PLAY_PAUSE = exports.KEYCODE_MEDIA_PAUSE = exports.KEYCODE_MEDIA_STOP = exports.KEYCODE_MEDIA_PLAY = exports.KEYCODE_F12 = exports.KEYCODE_F11 = exports.KEYCODE_F10 = exports.KEYCODE_F9 = exports.KEYCODE_F8 = exports.KEYCODE_F7 = void 0;
exports.KEYCODE_UNKNOWN = exports.KEYCODE_WINDOW = exports.KEYCODE_TV_POWER = exports.KEYCODE_TV_INPUT = void 0;
// 按键'0'  
exports.KEYCODE_0 = 7;
// 按键'1'  
exports.KEYCODE_1 = 8;
// 按键'2'  
exports.KEYCODE_2 = 9;
// 按键'3'  
exports.KEYCODE_3 = 10;
// 按键'4'  
exports.KEYCODE_4 = 11;
// 按键'5'  
exports.KEYCODE_5 = 12;
// 按键'6'  
exports.KEYCODE_6 = 13;
// 按键'7'  
exports.KEYCODE_7 = 14;
// 按键'8'  
exports.KEYCODE_8 = 15;
// 按键'9'  
exports.KEYCODE_9 = 16;
// 按键'A'  
exports.KEYCODE_A = 29;
// 按键'B'  
exports.KEYCODE_B = 30;
// 按键'C'  
exports.KEYCODE_C = 31;
// 按键'D'  
exports.KEYCODE_D = 32;
// 按键'E'  
exports.KEYCODE_E = 33;
// 按键'F'  
exports.KEYCODE_F = 34;
// 按键'G'  
exports.KEYCODE_G = 35;
// 按键'H'  
exports.KEYCODE_H = 36;
// 按键'I'  
exports.KEYCODE_I = 37;
// 按键'J'  
exports.KEYCODE_J = 38;
// 按键'K'  
exports.KEYCODE_K = 39;
// 按键'L'  
exports.KEYCODE_L = 40;
// 按键'M'  
exports.KEYCODE_M = 41;
// 按键'N'  
exports.KEYCODE_N = 42;
// 按键'O'  
exports.KEYCODE_O = 43;
// 按键'P'  
exports.KEYCODE_P = 44;
// 按键'Q'  
exports.KEYCODE_Q = 45;
// 按键'R'  
exports.KEYCODE_R = 46;
// 按键'S'  
exports.KEYCODE_S = 47;
// 按键'T'  
exports.KEYCODE_T = 48;
// 按键'U'  
exports.KEYCODE_U = 49;
// 按键'V'  
exports.KEYCODE_V = 50;
// 按键'W'  
exports.KEYCODE_W = 51;
// 按键'X'  
exports.KEYCODE_X = 52;
// 按键'Y'  
exports.KEYCODE_Y = 53;
// 按键'Z'  
exports.KEYCODE_Z = 54;
// 通用游戏手柄按钮#1     
exports.KEYCODE_BUTTON_1 = 188;
// 通用游戏手柄按钮 #2    
exports.KEYCODE_BUTTON_2 = 189;
// 通用游戏手柄按钮 #3    
exports.KEYCODE_BUTTON_3 = 190;
// 通用游戏手柄按钮 #4    
exports.KEYCODE_BUTTON_4 = 191;
// 通用游戏手柄按钮 #5    
exports.KEYCODE_BUTTON_5 = 192;
// 通用游戏手柄按钮 #6    
exports.KEYCODE_BUTTON_6 = 193;
// 通用游戏手柄按钮 #7    
exports.KEYCODE_BUTTON_7 = 194;
// 通用游戏手柄按钮 #8    
exports.KEYCODE_BUTTON_8 = 195;
// 通用游戏手柄按钮 #9    
exports.KEYCODE_BUTTON_9 = 196;
// 通用游戏手柄按钮 #10   
exports.KEYCODE_BUTTON_10 = 197;
// 通用游戏手柄按钮 #11   
exports.KEYCODE_BUTTON_11 = 198;
// 通用游戏手柄按钮 #12   
exports.KEYCODE_BUTTON_12 = 199;
// 通用游戏手柄按钮 #13   
exports.KEYCODE_BUTTON_13 = 200;
// 通用游戏手柄按钮 #14   
exports.KEYCODE_BUTTON_14 = 201;
// 通用游戏手柄按钮 #15   
exports.KEYCODE_BUTTON_15 = 202;
// 通用游戏手柄按钮 #16   
exports.KEYCODE_BUTTON_16 = 203;
// 游戏手柄按钮 A         
exports.KEYCODE_BUTTON_A = 96;
// 游戏手柄按钮 B         
exports.KEYCODE_BUTTON_B = 97;
// 游戏手柄按钮 C         
exports.KEYCODE_BUTTON_C = 98;
// 游戏手柄按钮 X         
exports.KEYCODE_BUTTON_X = 99;
// 游戏手柄按钮 Y         
exports.KEYCODE_BUTTON_Y = 100;
// 游戏手柄按钮 Z         
exports.KEYCODE_BUTTON_Z = 101;
// 游戏手柄按钮 L1        
exports.KEYCODE_BUTTON_L1 = 102;
// 游戏手柄按钮 L2        
exports.KEYCODE_BUTTON_L2 = 104;
// 游戏手柄按钮 R1        
exports.KEYCODE_BUTTON_R1 = 103;
// 游戏手柄按钮 R2        
exports.KEYCODE_BUTTON_R2 = 105;
// 游戏手柄按钮 Mode      
exports.KEYCODE_BUTTON_MODE = 110;
// 游戏手柄按钮 Select    
exports.KEYCODE_BUTTON_SELECT = 109;
// 游戏手柄按钮 Start     
exports.KEYCODE_BUTTON_START = 108;
// Left Thumb Button      
exports.KEYCODE_BUTTON_THUMBL = 106;
// Right Thumb Button     
exports.KEYCODE_BUTTON_THUMBR = 107;
// 拨号键        
exports.KEYCODE_CALL = 5;
// 挂机键        
exports.KEYCODE_ENDCALL = 6;
// 按键Home      
exports.KEYCODE_HOME = 3;
// 菜单键        
exports.KEYCODE_MENU = 82;
// 返回键        
exports.KEYCODE_BACK = 4;
// 搜索键        
exports.KEYCODE_SEARCH = 84;
// 拍照键        
exports.KEYCODE_CAMERA = 27;
// 拍照对焦键    
exports.KEYCODE_FOCUS = 80;
// 电源键        
exports.KEYCODE_POWER = 26;
// 通知键        
exports.KEYCODE_NOTIFICATION = 83;
// 话筒静音键    
exports.KEYCODE_MUTE = 91;
// 扬声器静音键  
exports.KEYCODE_VOLUME_MUTE = 164;
// 音量增加键    
exports.KEYCODE_VOLUME_UP = 24;
// 音量减小键    
exports.KEYCODE_VOLUME_DOWN = 25;
// 回车键          
exports.KEYCODE_ENTER = 66;
// ESC键           
exports.KEYCODE_ESCAPE = 111;
// 导航键 确定键   
exports.KEYCODE_DPAD_CENTER = 23;
// 导航键 向上     
exports.KEYCODE_DPAD_UP = 19;
// 导航键 向下     
exports.KEYCODE_DPAD_DOWN = 20;
// 导航键 向左     
exports.KEYCODE_DPAD_LEFT = 21;
// 导航键 向右     
exports.KEYCODE_DPAD_RIGHT = 22;
// 光标移动到开始键
exports.KEYCODE_MOVE_HOME = 122;
// 光标移动到末尾键
exports.KEYCODE_MOVE_END = 123;
// 向上翻页键      
exports.KEYCODE_PAGE_UP = 92;
// 向下翻页键      
exports.KEYCODE_PAGE_DOWN = 93;
// 退格键          
exports.KEYCODE_DEL = 67;
// 删除键          
exports.KEYCODE_FORWARD_DEL = 112;
// 插入键          
exports.KEYCODE_INSERT = 124;
// Tab键           
exports.KEYCODE_TAB = 61;
// 小键盘锁        
exports.KEYCODE_NUM_LOCK = 143;
// 大写锁定键      
exports.KEYCODE_CAPS_LOCK = 115;
// Break/Pause键   
exports.KEYCODE_BREAK = 121;
// 滚动锁定键      
exports.KEYCODE_SCROLL_LOCK = 116;
// 放大键          
exports.KEYCODE_ZOOM_IN = 168;
// 缩小键          
exports.KEYCODE_ZOOM_OUT = 169;
// Alt+Left       
exports.KEYCODE_ALT_LEFT = 57;
// Alt+Right      
exports.KEYCODE_ALT_RIGHT = 58;
// Control+Left   
exports.KEYCODE_CTRL_LEFT = 113;
// Control+Right  
exports.KEYCODE_CTRL_RIGHT = 114;
// Shift+Left     
exports.KEYCODE_SHIFT_LEFT = 59;
// Shift+Right    
exports.KEYCODE_SHIFT_RIGHT = 60;
// 按键'+'  
exports.KEYCODE_PLUS = 81;
// 按键'-'  
exports.KEYCODE_MINUS = 69;
// 按键'*'  
exports.KEYCODE_STAR = 17;
// 按键'/'  
exports.KEYCODE_SLASH = 76;
// 按键'='  
exports.KEYCODE_EQUALS = 70;
// 按键'@'  
exports.KEYCODE_AT = 77;
// 按键'#'  
exports.KEYCODE_POUND = 18;
// 按键'''  
exports.KEYCODE_APOSTROPHE = 75;
// 按键''  
exports.KEYCODE_BACKSLASH = 73;
// 按键','  
exports.KEYCODE_COMMA = 55;
// 按键'.'  
exports.KEYCODE_PERIOD = 56;
// 按键'['  
exports.KEYCODE_LEFT_BRACKET = 71;
// 按键']'  
exports.KEYCODE_RIGHT_BRACKET = 72;
// 按键';'  
exports.KEYCODE_SEMICOLON = 74;
// 按键'`'  
exports.KEYCODE_GRAVE = 68;
// 空格键   
exports.KEYCODE_SPACE = 62;
// 小键盘按键'0'   
exports.KEYCODE_NUMPAD_0 = 144;
// 小键盘按键'1'   
exports.KEYCODE_NUMPAD_1 = 145;
// 小键盘按键'2'   
exports.KEYCODE_NUMPAD_2 = 146;
// 小键盘按键'3'   
exports.KEYCODE_NUMPAD_3 = 147;
// 小键盘按键'4'   
exports.KEYCODE_NUMPAD_4 = 148;
// 小键盘按键'5'   
exports.KEYCODE_NUMPAD_5 = 149;
// 小键盘按键'6'   
exports.KEYCODE_NUMPAD_6 = 150;
// 小键盘按键'7'   
exports.KEYCODE_NUMPAD_7 = 151;
// 小键盘按键'8'   
exports.KEYCODE_NUMPAD_8 = 152;
// 小键盘按键'9'   
exports.KEYCODE_NUMPAD_9 = 153;
// 小键盘按键' + '   
exports.KEYCODE_NUMPAD_ADD = 157;
// 小键盘按键' - '   
exports.KEYCODE_NUMPAD_SUBTRACT = 156;
// 小键盘按键' * '   
exports.KEYCODE_NUMPAD_MULTIPLY = 155;
// 小键盘按键' / '   
exports.KEYCODE_NUMPAD_DIVIDE = 154;
// 小键盘按键' = '   
exports.KEYCODE_NUMPAD_EQUALS = 161;
// 小键盘按键', '   
exports.KEYCODE_NUMPAD_COMMA = 159;
// 小键盘按键'.'   
exports.KEYCODE_NUMPAD_DOT = 158;
// 小键盘按键'('   
exports.KEYCODE_NUMPAD_LEFT_PAREN = 162;
// 小键盘按键')'   
exports.KEYCODE_NUMPAD_RIGHT_PAREN = 163;
// 小键盘按键回车  
exports.KEYCODE_NUMPAD_ENTER = 160;
// 按键F1   
exports.KEYCODE_F1 = 131;
// 按键F2   
exports.KEYCODE_F2 = 132;
// 按键F3   
exports.KEYCODE_F3 = 133;
// 按键F4   
exports.KEYCODE_F4 = 134;
// 按键F5   
exports.KEYCODE_F5 = 135;
// 按键F6   
exports.KEYCODE_F6 = 136;
// 按键F7   
exports.KEYCODE_F7 = 137;
// 按键F8   
exports.KEYCODE_F8 = 138;
// 按键F9   
exports.KEYCODE_F9 = 139;
// 按键F10  
exports.KEYCODE_F10 = 140;
// 按键F11  
exports.KEYCODE_F11 = 141;
// 按键F12  
exports.KEYCODE_F12 = 142;
// 多媒体键 播放        
exports.KEYCODE_MEDIA_PLAY = 126;
// 多媒体键 停止        
exports.KEYCODE_MEDIA_STOP = 86;
// 多媒体键 暂停        
exports.KEYCODE_MEDIA_PAUSE = 127;
// 多媒体键 播放/暂停   
exports.KEYCODE_MEDIA_PLAY_PAUSE = 85;
// 多媒体键 快进        
exports.KEYCODE_MEDIA_FAST_FORWARD = 90;
// 多媒体键 快退        
exports.KEYCODE_MEDIA_REWIND = 89;
// 多媒体键 下一首      
exports.KEYCODE_MEDIA_NEXT = 87;
// 多媒体键 上一首      
exports.KEYCODE_MEDIA_PREVIOUS = 88;
// 多媒体键 关闭        
exports.KEYCODE_MEDIA_CLOSE = 128;
// 多媒体键 弹出        
exports.KEYCODE_MEDIA_EJECT = 129;
// 多媒体键 录音        
exports.KEYCODE_MEDIA_RECORD = 130;
// 按键Number modifier              
exports.KEYCODE_NUM = 78;
// 按键Info                         
exports.KEYCODE_INFO = 165;
// 按键App switch                   
exports.KEYCODE_APP_SWITCH = 187;
// 按键Bookmark                     
exports.KEYCODE_BOOKMARK = 174;
// 按键A/V Receiver input           
exports.KEYCODE_AVR_INPUT = 182;
// 按键A/V Receiver power           
exports.KEYCODE_AVR_POWER = 181;
// 按键Toggle captions              
exports.KEYCODE_CAPTIONS = 175;
// 按键Channel down                 
exports.KEYCODE_CHANNEL_DOWN = 167;
// 按键Channel up                   
exports.KEYCODE_CHANNEL_UP = 166;
// 按键Clear                        
exports.KEYCODE_CLEAR = 28;
// 按键DVR                          
exports.KEYCODE_DVR = 173;
// 按键Envelope special function    
exports.KEYCODE_ENVELOPE = 65;
// 按键Explorer special function    
exports.KEYCODE_EXPLORER = 64;
// 按键Forward                      
exports.KEYCODE_FORWARD = 125;
// 按键Forward Delete               
exports.KEYCODE_FORWARD_DEL = 112;
// 按键Function modifier            
exports.KEYCODE_FUNCTION = 119;
// 按键Guide                        
exports.KEYCODE_GUIDE = 172;
// 按键Headset Hook                 
exports.KEYCODE_HEADSETHOOK = 79;
// 按键Left Meta modifier           
exports.KEYCODE_META_LEFT = 117;
// 按键Right Meta modifier          
exports.KEYCODE_META_RIGHT = 118;
// 按键Picture Symbols modifier     
exports.KEYCODE_PICTSYMBOLS = 94;
// 按键Blue “programmable”        
exports.KEYCODE_PROG_BLUE = 186;
// 按键Green “programmable”       
exports.KEYCODE_PROG_GREEN = 184;
// 按键Red “programmable”         
exports.KEYCODE_PROG_RED = 183;
// 按键Yellow “programmable”      
exports.KEYCODE_PROG_YELLOW = 185;
// 按键Settings                     
exports.KEYCODE_SETTINGS = 176;
// 按键Soft Left                    
exports.KEYCODE_SOFT_LEFT = 1;
// 按键Soft Right                   
exports.KEYCODE_SOFT_RIGHT = 2;
// 按键Set-top-box input            
exports.KEYCODE_STB_INPUT = 180;
// 按键Set-top-box power            
exports.KEYCODE_STB_POWER = 179;
// 按键Switch Charset modifier      
exports.KEYCODE_SWITCH_CHARSET = 95;
// 按键Symbol modifier              
exports.KEYCODE_SYM = 63;
// 按键System Request / Print Screen
exports.KEYCODE_SYSRQ = 120;
// 按键TV                           
exports.KEYCODE_TV = 170;
// 按键TV input                     
exports.KEYCODE_TV_INPUT = 178;
// 按键TV power                     
exports.KEYCODE_TV_POWER = 177;
// 按键Window                       
exports.KEYCODE_WINDOW = 171;
// 未知按键                         
exports.KEYCODE_UNKNOWN = 0;
//# sourceMappingURL=Keycode%20copy.js.map