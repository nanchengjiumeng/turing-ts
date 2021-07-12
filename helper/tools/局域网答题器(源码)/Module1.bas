Attribute VB_Name = "Module1"


'输出图像

'在vb中判断数组是否为空Api函数SafeArrayGetDim:没有redim，api返回零，redim了，返回非零。
Public Declare Function SafeArrayGetDim Lib "oleaut32.dll" (ByRef saArray() As Any) As Long
'If SafeArrayGetDim(数组) > 0 Then MsgBox "数组不为空" Else MsgBox "数组为空"
Private Type BMP_File_Header
    fileType As Integer
    FileLength As Long
    reserve As Long
    offset As Long
End Type

Private Type BMP_Info_Header
    infoLength As Long
    Width As Long
    Height As Long
    plane As Integer
    pixBits As Integer
    Compress As Long
    dataLength As Long
    H_res As Long
    V_res As Long
    colorNumber As Long
    impColor As Long
End Type


Dim 三维图像数据() As Byte


'服务器开启后，就不管他了，会自动保存一份图像文件
'载入图像的像素数据(字符串）
Public Sub LoadImageData(ImageData As Variant)     ', iWidth As Variant, iHeight As Variant
Dim W As Long, H As Long, 宽 As Long, 高 As Long, n As Long, 数据() As String, Temp图像数据() As String
    数据 = Split(ImageData, "|")
    宽 = CLng(数据(0)) - 1
    高 = CLng(数据(1)) - 1
    Temp图像数据 = Split(数据(2), ",")
    ReDim 三维图像数据(3, 宽, 高) As Byte
    n = 0
    For W = 0 To 宽
        For H = 0 To 高
            三维图像数据(0, W, H) = Temp图像数据(n)
            三维图像数据(1, W, H) = Temp图像数据(n + 1)
            三维图像数据(2, W, H) = Temp图像数据(n + 2)
            n = n + 4
        Next
    Next
End Sub

'来源_保存图像数据为图片
Public Sub SaveImageData(ImagePath As Variant)
    If SafeArrayGetDim(三维图像数据) <= 0 Then Exit Sub
    Call 来源_保存图像数据为图片24(三维图像数据, CStr(ImagePath))
End Sub


'24位图
Public Sub 来源_保存图像数据为图片24(图像数据() As Byte, 文件保存路径 As String)
Dim W As Long, H As Long, 宽 As Long, 高 As Long, WW As Long, Num As Long, n As Long, i As Long
Dim bfh As BMP_File_Header, bih As BMP_Info_Header, Temp图像数据() As Byte
    宽 = UBound(图像数据, 2)
    高 = UBound(图像数据, 3)
    n = ((宽 + 1) * 3) Mod 4
    Num = ((宽 + 1) * 3 + (4 - n)) * (高 + 1) - 1
    ReDim Temp图像数据(Num)
    i = 0
    For H = 高 To 0 Step -1
        For W = 0 To 宽
            Temp图像数据(i) = 图像数据(0, W, H)
            Temp图像数据(i + 1) = 图像数据(1, W, H)
            Temp图像数据(i + 2) = 图像数据(2, W, H)
            i = (i + 3)
        Next
        If n <> 0 Then i = i + (4 - n)
    Next
    bfh.fileType = &H4D42
    bfh.offset = Len(bfh) + Len(bih)
    bih.dataLength = &H100& * &H100&
    'bfh.FileLength = bfh.offset + bih.dataLength    '图片文件大小
    'Debug.Print 54 + (((宽 + 1) * 3 + (4 - n)) And &H7FFFFFFC) * (高 + 1)
    bfh.FileLength = 54 + (((宽 + 1) * 3 + (4 - n)) And &H7FFFFFFC) * (高 + 1)    'bfh.offset + bih.dataLength    '图片文件大小
    bih.infoLength = Len(bih)
    bih.Width = 宽 + 1    '图片宽度
    bih.Height = 高 + 1    '图片高度（数据需要颠倒保存）
    'bih.biSizeImage = (((宽 + 1) * 3 + 3) And &H7FFFFFFC) * (高 + 1) '计算大小
    bih.plane = 1
    bih.pixBits = 24    '每像素位数
    bih.Compress = 0
    bih.H_res = &HB12    ' = 72 dpi / 0.0254
    bih.V_res = &HB12
    bih.colorNumber = 0
    bih.impColor = 0
    If InStr(文件保存路径, ":\") <= 0 Then 文件保存路径 = App.Path & "\" & 文件保存路径
    Call 创建文件夹(文件保存路径)
    If Dir(文件保存路径) <> "" Then Kill 文件保存路径
    Open 文件保存路径 For Binary As #1
    Put #1, , bfh
    Put #1, , bih
    Put #1, , Temp图像数据    '这里是生成一个指定大小的位图数据
    Close #1
End Sub


Public Sub 创建文件夹(路径 As String)
Dim Temp路径 As String
    Temp路径 = Left(路径, InStrRev(路径, "\") - 1)
    If Dir(Temp路径, vbDirectory) = "" Then MkDir Temp路径    '没有文件夹则自动创建
End Sub



