Attribute VB_Name = "Module1"


'���ͼ��

'��vb���ж������Ƿ�Ϊ��Api����SafeArrayGetDim:û��redim��api�����㣬redim�ˣ����ط��㡣
Public Declare Function SafeArrayGetDim Lib "oleaut32.dll" (ByRef saArray() As Any) As Long
'If SafeArrayGetDim(����) > 0 Then MsgBox "���鲻Ϊ��" Else MsgBox "����Ϊ��"
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


Dim ��άͼ������() As Byte


'�����������󣬾Ͳ������ˣ����Զ�����һ��ͼ���ļ�
'����ͼ�����������(�ַ�����
Public Sub LoadImageData(ImageData As Variant)     ', iWidth As Variant, iHeight As Variant
Dim W As Long, H As Long, �� As Long, �� As Long, n As Long, ����() As String, Tempͼ������() As String
    ���� = Split(ImageData, "|")
    �� = CLng(����(0)) - 1
    �� = CLng(����(1)) - 1
    Tempͼ������ = Split(����(2), ",")
    ReDim ��άͼ������(3, ��, ��) As Byte
    n = 0
    For W = 0 To ��
        For H = 0 To ��
            ��άͼ������(0, W, H) = Tempͼ������(n)
            ��άͼ������(1, W, H) = Tempͼ������(n + 1)
            ��άͼ������(2, W, H) = Tempͼ������(n + 2)
            n = n + 4
        Next
    Next
End Sub

'��Դ_����ͼ������ΪͼƬ
Public Sub SaveImageData(ImagePath As Variant)
    If SafeArrayGetDim(��άͼ������) <= 0 Then Exit Sub
    Call ��Դ_����ͼ������ΪͼƬ24(��άͼ������, CStr(ImagePath))
End Sub


'24λͼ
Public Sub ��Դ_����ͼ������ΪͼƬ24(ͼ������() As Byte, �ļ�����·�� As String)
Dim W As Long, H As Long, �� As Long, �� As Long, WW As Long, Num As Long, n As Long, i As Long
Dim bfh As BMP_File_Header, bih As BMP_Info_Header, Tempͼ������() As Byte
    �� = UBound(ͼ������, 2)
    �� = UBound(ͼ������, 3)
    n = ((�� + 1) * 3) Mod 4
    Num = ((�� + 1) * 3 + (4 - n)) * (�� + 1) - 1
    ReDim Tempͼ������(Num)
    i = 0
    For H = �� To 0 Step -1
        For W = 0 To ��
            Tempͼ������(i) = ͼ������(0, W, H)
            Tempͼ������(i + 1) = ͼ������(1, W, H)
            Tempͼ������(i + 2) = ͼ������(2, W, H)
            i = (i + 3)
        Next
        If n <> 0 Then i = i + (4 - n)
    Next
    bfh.fileType = &H4D42
    bfh.offset = Len(bfh) + Len(bih)
    bih.dataLength = &H100& * &H100&
    'bfh.FileLength = bfh.offset + bih.dataLength    'ͼƬ�ļ���С
    'Debug.Print 54 + (((�� + 1) * 3 + (4 - n)) And &H7FFFFFFC) * (�� + 1)
    bfh.FileLength = 54 + (((�� + 1) * 3 + (4 - n)) And &H7FFFFFFC) * (�� + 1)    'bfh.offset + bih.dataLength    'ͼƬ�ļ���С
    bih.infoLength = Len(bih)
    bih.Width = �� + 1    'ͼƬ���
    bih.Height = �� + 1    'ͼƬ�߶ȣ�������Ҫ�ߵ����棩
    'bih.biSizeImage = (((�� + 1) * 3 + 3) And &H7FFFFFFC) * (�� + 1) '�����С
    bih.plane = 1
    bih.pixBits = 24    'ÿ����λ��
    bih.Compress = 0
    bih.H_res = &HB12    ' = 72 dpi / 0.0254
    bih.V_res = &HB12
    bih.colorNumber = 0
    bih.impColor = 0
    If InStr(�ļ�����·��, ":\") <= 0 Then �ļ�����·�� = App.Path & "\" & �ļ�����·��
    Call �����ļ���(�ļ�����·��)
    If Dir(�ļ�����·��) <> "" Then Kill �ļ�����·��
    Open �ļ�����·�� For Binary As #1
    Put #1, , bfh
    Put #1, , bih
    Put #1, , Tempͼ������    '����������һ��ָ����С��λͼ����
    Close #1
End Sub


Public Sub �����ļ���(·�� As String)
Dim Temp·�� As String
    Temp·�� = Left(·��, InStrRev(·��, "\") - 1)
    If Dir(Temp·��, vbDirectory) = "" Then MkDir Temp·��    'û���ļ������Զ�����
End Sub



