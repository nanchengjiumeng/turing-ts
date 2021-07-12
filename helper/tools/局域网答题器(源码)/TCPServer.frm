VERSION 5.00
Object = "{248DD890-BB45-11CF-9ABC-0080C7E7B78D}#1.0#0"; "MSWINSCK.ocx"
Begin VB.Form FrmServer 
   BorderStyle     =   1  'Fixed Single
   Caption         =   "TCP ������"
   ClientHeight    =   2730
   ClientLeft      =   1425
   ClientTop       =   1935
   ClientWidth     =   3840
   Icon            =   "TCPServer.frx":0000
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   2730
   ScaleWidth      =   3840
   StartUpPosition =   2  '��Ļ����
   Begin MSWinsockLib.Winsock tcpServer 
      Index           =   0
      Left            =   3000
      Top             =   120
      _ExtentX        =   741
      _ExtentY        =   741
      _Version        =   393216
   End
   Begin VB.TextBox txtid 
      Height          =   375
      Left            =   240
      TabIndex        =   8
      Top             =   2160
      Width           =   1455
   End
   Begin VB.CommandButton CmdSend 
      Caption         =   "����"
      Height          =   375
      Left            =   2640
      TabIndex        =   7
      Top             =   2160
      Width           =   975
   End
   Begin VB.TextBox TxtSend 
      Height          =   375
      Left            =   240
      TabIndex        =   1
      Top             =   1680
      Width           =   3375
   End
   Begin VB.CommandButton CmdClose 
      Caption         =   "�رշ�����"
      BeginProperty Font 
         Name            =   "����_GB2312"
         Size            =   10.5
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   1680
      TabIndex        =   2
      Top             =   1080
      Width           =   1335
   End
   Begin VB.CommandButton CmdStart 
      Caption         =   "����������"
      BeginProperty Font 
         Name            =   "����_GB2312"
         Size            =   10.5
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      Height          =   495
      Left            =   240
      TabIndex        =   0
      Top             =   1080
      Width           =   1335
   End
   Begin VB.TextBox TxtPort 
      Height          =   375
      Left            =   1680
      TabIndex        =   4
      Text            =   "1080"
      Top             =   600
      Width           =   1575
   End
   Begin VB.TextBox TxtIP 
      Height          =   375
      Left            =   1680
      TabIndex        =   3
      Text            =   "127.0.0.1"
      Top             =   120
      Width           =   1575
   End
   Begin VB.Label Label2 
      AutoSize        =   -1  'True
      Caption         =   "�������˿�"
      Height          =   180
      Left            =   510
      TabIndex        =   6
      Top             =   697
      Width           =   885
   End
   Begin VB.Label Label1 
      AutoSize        =   -1  'True
      Caption         =   "��������ַ"
      Height          =   180
      Left            =   495
      TabIndex        =   5
      Top             =   217
      Width           =   900
   End
End
Attribute VB_Name = "FrmServer"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
'Download by http://www.codefans.net
'==================================================================================
'
'                       �������:������������-��������
'
'                       ����汾:1.0
'
'                       ����:�ռ�����
'
'                       QQ:16811731
'
'                       Email:tjj1528@163.com
'
'                       2004��6��10�������ɹŹ�ҵ��ѧ��Ϣ����ѧԺ316����
'
'==================================================================================

Dim useid(30) As String
Dim nSock As Integer
Dim tcpNUM As Integer
Public a As String
Public bb As Boolean


Dim ͼ������() As String, iii As Long

Private Sub CmdClose_Click()
    For i = 0 To nSock    '�ر���������
        If tcpServer(i).State <> sckClosed Then
            tcpServer(i).Close
        End If
    Next i
    '"�������Ѿ��ر�"
    FrmServer.CmdStart.Enabled = True
    FrmServer.CmdClose.Enabled = False
    TxtSend.Enabled = False
    CmdSend.Enabled = False
    tcpNUM = 0
    '"��ǰ�У� 0 λ����"
End Sub


Private Sub CmdStart_Click()
    tcpServer(0).LocalPort = TxtPort.Text    '���ñ��ض˿�
    tcpServer(0).listen
    FrmServer.CmdStart.Enabled = False
    FrmServer.CmdClose.Enabled = True
    '"������׼������"
    TxtIP.Enabled = False
    TxtPort.Enabled = False
    TxtSend.Enabled = False
    CmdSend.Enabled = False
    '"��ǰ�У� 0 λ����"
End Sub

Private Sub CmdSend_Click()
    On Error GoTo errend
    '���ʹ�
    For n = 1 To nSock
        If tcpServer(n).State <> sckClosed Then
            tcpServer(n).SendData "TxtSend.Text"
            DoEvents
        End If
    Next n
    Exit Sub
errend:
    Exit Sub
End Sub



Private Sub Form_Load()
    iii = 0
    nSock = 0
    tcpNUM = 0
    TxtIP.Text = tcpServer(0).LocalIP    '���÷�����IP
    txtid.Text = tcpServer(0).LocalIP
    FrmServer.TxtIP.Enabled = False
    FrmServer.CmdClose.Enabled = False
    TxtSend.Enabled = False
    CmdSend.Enabled = False
End Sub


Private Sub Form_Unload(Cancel As Integer)
    End
End Sub

Private Sub tcpServer_Close(Index As Integer)
    tcpServer(Index).Close
    tcpNUM = tcpNUM - 1
    If tcpNUM = 0 Then
        TxtSend.Enabled = False
        CmdSend.Enabled = False
    End If
End Sub

Private Sub tcpServer_Connect(Index As Integer)
    TxtSend.Enabled = True
    CmdSend.Enabled = True
    TxtSend.Enabled = True
    CmdSend.Enabled = True
    TxtSend.SetFocus
End Sub

Private Sub tcpServer_ConnectionRequest(Index As Integer, ByVal requestID As Long)
    nSock = nSock + 1
    tcpNUM = tcpNUM + 1
    Load tcpServer(nSock)
    tcpServer(nSock).LocalPort = 0
    tcpServer(nSock).accept requestID
    TxtSend.Enabled = True
    CmdSend.Enabled = True
End Sub


Private Sub tcpServer_DataArrival(Index As Integer, ByVal bytesTotal As Long)
Dim clientDat As String, i As Long, ���� As String
    '"���ڽ������ݴ���"
    tcpServer(Index).GetData clientDat
    ReDim Preserve ͼ������(iii) As String
    ͼ������(iii) = clientDat
    iii = iii + 1
    i = InStr(clientDat, "ok")    '���ҽ�����
    If i > 0 Then
        '����ͼ������
        ���� = Join(ͼ������, "")
        ���� = Replace(����, Chr(10), "")
        ���� = Replace(Split(����, ":")(1), "ok", "")
        Call LoadImageData(����)
        Call SaveImageData(App.Path & "\ͼƬ.bmp")    '����ͼƬ
        iii = 0
        '���ʹ�
        For n = 1 To nSock
            If tcpServer(n).State <> sckClosed Then
                tcpServer(n).SendData "from:TURING"    '�������ⲻ֧�����ģ���ҪתUTF8�������
                DoEvents
            End If
        Next
        '�ر���������
        For n = 0 To nSock
            If tcpServer(n).State <> sckClosed Then
                tcpServer(n).Close
            End If
        Next
        tcpNUM = 0
        '����������
        tcpServer(0).LocalPort = TxtPort.Text    '���ñ��ض˿�
        tcpServer(0).listen
    End If
End Sub

Private Sub tcpServer_Error(Index As Integer, ByVal number As Integer, Description As String, ByVal Scode As Long, ByVal Source As String, ByVal HelpFile As String, ByVal HelpContext As Long, CancelDisplay As Boolean)
    MsgBox "���ӷ�����������������ʧ�ܣ�", vbOKOnly + vbExclamation, "TCP ������Ϣ"
    If tcpServer(Index).State <> sckClosed Then
        tcpServer(Index).Close
    End If
    TxtSend.Enabled = False
    CmdSend.Enabled = False
End Sub

Private Sub tcpServer_SendComplete(Index As Integer)
   '"���ݴ������"
End Sub

Private Sub tcpServer_SendProgress(Index As Integer, ByVal bytesSent As Long, ByVal bytesRemaining As Long)
    '"���ڽ������ݴ���"
End Sub





